// The Guruvanikal search used by NAMA. It reads only the stored text and never changes it.
//
// Every passage is indexed in both languages:
//   - the 7,955 Malayalam paragraphs (GV1 to GV4), with the English rendering beside each where it exists
//   - the complete English of each Volume 2 month, paragraph by paragraph (IDs like GV2:E1998-01:03),
//     because Volume 2's English is divided differently from its Malayalam
//   - the 1,001 collected sayings (S1 to S1001)
//
// Malayalam is normalised so that any keyboard finds it: the modern one-character chillu letters
// (ൻ ർ ൽ ൾ ൺ ൿ) and the older form (consonant + virama + joiner) are treated as the same letter, and
// joiners are ignored. Malayalam words match by their stem, since endings are added to words.
// English words match by stem on word boundaries (so "sin" does not match "singing").
// Passages are ranked with BM25, the standard measure of how well a text answers a set of words.

(function (root) {
  const CHILLU = { 'ൺ': 'ണ്', 'ൻ': 'ന്', 'ർ': 'ര്', 'ൽ': 'ല്', 'ൾ': 'ള്', 'ൿ': 'ക്', 'ൔ': 'മ്', 'ൕ': 'യ്', 'ൖ': 'ഴ്' };
  const isMl = (s) => /[ഀ-ൿ]/.test(s);
  function normMl(s) {
    return String(s).normalize('NFC').replace(/[ൺൻർൽൾൿൔൕൖ]/g, (c) => CHILLU[c]).replace(/[​-‍⁠﻿]/g, '').replace(/ൌ/g, 'ൗ');
  }
  // English: a light stemmer, applied the same way to the text and to the question
  function stemEn(w) {
    if (w.length <= 3) return w;
    if (w.endsWith("'s")) w = w.slice(0, -2);
    const rules = [['ational', 'ate'], ['iveness', 'ive'], ['fulness', 'ful'], ['ousness', 'ous'], ['ization', 'ize'], ['ation', 'ate'], ['ments', ''], ['ment', ''],
      ['ness', ''], ['ings', ''], ['ing', ''], ['edly', ''], ['ies', 'y'], ['ied', 'y'], ['ves', 'f'], ['sses', 'ss'], ['ed', ''], ['ly', ''], ['es', ''], ['s', '']];
    for (const [a, b] of rules) {
      if (w.endsWith(a) && w.length - a.length >= 3) { w = w.slice(0, -a.length) + b; break; }
    }
    if (w.length > 4 && /([b-df-hj-np-tv-z])\1$/.test(w) && !/(ll|ss|zz)$/.test(w)) w = w.slice(0, -1);   // running -> run
    if (w.length > 4 && w.endsWith('e')) w = w.slice(0, -1);
    return w;
  }
  const STOP = new Set(('a an the and or but if of to in on at by for with from into onto upon about as is are was were be been being am do does did done has have had having ' +
    'it its this that these those there here then than so such very just only also too not no nor can could shall should will would may might must ' +
    'i me my mine we us our ours you your yours he him his she her hers they them their theirs what which who whom whose when where why how ' +
    'all any each every some more most other another own same both either neither one ones please tell say said says ask asked').split(' '));
  // Malayalam stem: drop the common case endings and keep at least three letters
  const ML_END = ['ങ്ങളുടെ', 'ങ്ങളെ', 'ങ്ങൾ', 'ങ്ങള്', 'ത്തിന്റെ', 'ത്തില്', 'ത്തിൽ', 'ത്തെ', 'ന്റെ', 'യുടെ', 'ിന്റെ', 'ില്', 'ിൽ', 'ിനെ', 'ിന്', 'യെ', 'യില്', 'യിൽ', 'ുടെ', 'ും', 'ം', 'ോ', 'േ'];
  function stemMl(w) {
    w = normMl(w);
    for (const e of ML_END.map(normMl)) if (w.endsWith(e) && w.length - e.length >= 3) return w.slice(0, -e.length);
    return w;
  }
  function tokens(text, ml) {
    if (!text) return [];
    if (ml) return normMl(text).split(/[^ഀ-ൿ]+/).filter((w) => w.length >= 2);
    return text.toLowerCase().replace(/[’‘]/g, "'").split(/[^a-z']+/).map((w) => w.replace(/^'+|'+$/g, '')).filter((w) => w.length >= 2);
  }

  function build(docs) {
    // docs: [{id, ml, en, ...}] ; returns an index over both languages
    const N = docs.length, len = new Float32Array(N), postEn = new Map(), postMl = new Map();
    let total = 0;
    docs.forEach((d, i) => {
      const tf = new Map();
      for (const w of tokens(d.en, false)) { if (STOP.has(w)) continue; const s = 'e' + stemEn(w); tf.set(s, (tf.get(s) || 0) + 1); }
      for (const w of tokens(d.ml, true)) { const s = 'm' + w; tf.set(s, (tf.get(s) || 0) + 1); }
      let n = 0;
      for (const [k, c] of tf) { n += c; const M = k[0] === 'e' ? postEn : postMl; const key = k.slice(1); let p = M.get(key); if (!p) M.set(key, (p = [])); p.push(i, c); }
      len[i] = n; total += n;
      d.mlN = d.ml ? normMl(d.ml).replace(/\s+/g, ' ') : ''; d.enN = d.en ? d.en.toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ') : '';
    });
    const mlVocab = [...postMl.keys()].sort();
    return { docs, N, len, avg: total / N, postEn, postMl, mlVocab };
  }

  // all Malayalam words in the text that begin with the stem
  function mlMatches(ix, stem) {
    const v = ix.mlVocab; let lo = 0, hi = v.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (v[m] < stem) lo = m + 1; else hi = m; }
    const out = [];
    for (let i = lo; i < v.length && v[i].startsWith(stem) && out.length < 400; i++) out.push(v[i]);
    return out;
  }

  function queryTerms(words) {
    const en = [], ml = [];
    const raw = Array.isArray(words) ? words.join(' ') : String(words);
    for (const w of tokens(raw, true)) { const s = stemMl(w); if (s.length >= 2 && !ml.includes(s)) ml.push(s); }
    let enW = tokens(raw, false);
    const content = enW.filter((w) => !STOP.has(w));
    if (content.length) enW = content;                      // a question made only of common words still searches with them
    for (const w of enW) { const s = stemEn(w); if (!en.includes(s)) en.push(s); }
    return { en, ml };
  }

  function search(ix, words, { top = 10, offset = 0, filter = null } = {}) {
    const { en, ml } = queryTerms(words);
    const k1 = 1.4, b = 0.72, score = new Float32Array(ix.N), hits = new Uint8Array(ix.N);
    const add = (post, weight) => {
      if (!post) return;
      const df = post.length / 2, idf = Math.log(1 + (ix.N - df + 0.5) / (df + 0.5));
      for (let j = 0; j < post.length; j += 2) {
        const i = post[j], tf = post[j + 1];
        score[i] += weight * idf * (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * ix.len[i] / ix.avg));
      }
    };
    const termCount = en.length + ml.length;
    en.forEach((s) => { const p = ix.postEn.get(s); add(p, 1); if (p) for (let j = 0; j < p.length; j += 2) hits[p[j]]++; });
    ml.forEach((s) => {
      const seen = new Uint8Array(ix.N);
      for (const w of mlMatches(ix, s)) {
        const p = ix.postMl.get(w); add(p, w === s ? 1 : 0.85);
        for (let j = 0; j < p.length; j += 2) if (!seen[p[j]]) { seen[p[j]] = 1; hits[p[j]]++; }
      }
    });
    const out = [];
    for (let i = 0; i < ix.N; i++) {
      if (!score[i]) continue;
      const d = ix.docs[i];
      if (filter && !filter(d)) continue;
      if (!d.saying && !d.block && d.ml && d.ml.length < 60 && !d.en) continue;     // headings alone
      out.push([score[i] * (0.55 + 0.45 * hits[i] / Math.max(1, termCount)), i]);
    }
    out.sort((a, c) => c[0] - a[0]);
    return { total: out.length, docs: out.slice(offset, offset + top).map(([s, i]) => ix.docs[i]) };
  }

  // exact words, in either language, wherever they stand (for checking whether something was said)
  function phrase(ix, text, { top = 10 } = {}) {
    const q = isMl(text) ? normMl(text).replace(/\s+/g, ' ').trim() : String(text).toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
    if (q.length < 3) return { total: 0, docs: [] };
    const out = ix.docs.filter((d) => (isMl(q) ? d.mlN.includes(q) : d.enN.includes(q)));
    return { total: out.length, docs: out.slice(0, top) };
  }

  // normalise a text for comparison while remembering where each character came from
  function normMap(src, ml) {
    let out = '', map = [];
    for (let i = 0; i < src.length; i++) {
      let c = src[i];
      if (/\s/.test(c)) { if (out.endsWith(' ')) continue; c = ' '; }
      else if (ml) { if (/[​-‍⁠﻿]/.test(c)) continue; c = CHILLU[c] || (c === 'ൌ' ? 'ൗ' : c); }
      else c = c.toLowerCase().replace(/[’‘]/, "'").replace(/[“”]/, '"');
      for (const ch of c) { out += ch; map.push(i); }
    }
    map.push(src.length);
    return { s: out, map };
  }
  // a quotation is genuine only if it stands, letter for letter, in the passage; it is then cut from the stored text itself
  function exact(d, ex) {
    const n = String(ex).replace(/^[\s."'“”‘’…]+|[\s."'“”‘’…]+$/g, '');
    if (n.length < 8) return null;
    const ml = isMl(n);
    const src = ml ? d.ml : d.en;
    if (!src) return null;
    const A = normMap(src.normalize('NFC'), ml), B = normMap(n.normalize('NFC'), ml).s;
    const at = A.s.indexOf(B);
    if (at < 0) return null;
    return src.normalize('NFC').slice(A.map[at], A.map[at + B.length - 1] + 1);
  }

  const api = { build, search, phrase, exact, normMl, stemEn, stemMl, queryTerms, isMl };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.GVSearch = api;
})(typeof self !== 'undefined' ? self : this);

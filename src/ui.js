import { DB, loadYear, loadAll, locate, talkList, isMalayalam } from './data.js';
import '../nama-artifact/search.js';
const GVS = self.GVSearch;

// Reading, the years, search and NAMA.
//
// One rule holds everywhere in this file: the Guru's words are only ever copied from the data,
// character for character, with their source ID. Nothing here composes or paraphrases them.

// Set this to the address of the NAMA artifact once it is published.
export const NAMA_AI_URL = 'https://claude.ai/artifact/61DJF7LcMHVP1kWuYi8No3';

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (n) => n.toLocaleString('en-IN');
const VOL = { GV1: 'Volume 1', GV2: 'Volume 2', GV3: 'Volume 3', GV4: 'Volume 4' };

export function initUI(api) {
  const reader = $('#reader'), side = $('#side'), tip = $('#tip');
  let lang = localStorage.getItem('gv-lang') || 'both';
  let sideTab = 'years', yearOpen = null;

  // ------------------------------------------------------------ tooltip
  function petalLabel(i) {
    if (i < DB.nSay) {
      const it = DB.sayings.items[i];
      return `<small>Saying ${i + 1} of ${num(DB.nSay)}</small>${esc(DB.sayings.topics[it.topic].title)}`;
    }
    const L = locate(i - DB.nSay);
    return `<small>${esc(L.M.en)}</small><span class="mlt">${esc(L.T.t || L.M.ml)}</span>${L.T.te ? ' · ' + esc(L.T.te) : ''}`;
  }
  function showTip(html, x, y) {
    if (!html) { tip.classList.remove('on'); return; }
    tip.innerHTML = html; tip.classList.add('on');
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.min(innerWidth - w - 8, Math.max(8, x + 16)) + 'px';
    tip.style.top = Math.min(innerHeight - h - 8, Math.max(8, y + 18)) + 'px';
  }

  // ------------------------------------------------------------ the reader
  function closeReader() { reader.hidden = true; api.lotus.mark(null); if (side.hidden) api.lotus.select(null); }
  function langSeg() {
    return `<div class="seg">${[['ml', 'മലയാളം'], ['en', 'English'], ['both', 'Both']].map(([k, t]) => `<button data-lang="${k}" class="${lang === k ? 'on' : ''}${k === 'ml' ? ' mlt' : ''}">${t}</button>`).join('')}</div>`;
  }

  async function openTalk(yi, mi, ti, hitG = null) {
    const Y = DB.index.years[yi], M = Y.months[mi], T = M.talks[ti];
    reader.hidden = false;
    reader.innerHTML = `<div class="phead"><button class="x" aria-label="Close">×</button><div class="when">${esc(M.en)}</div></div><div class="pbody"><p class="note">Opening…</p></div>`;
    $('.x', reader).onclick = closeReader;
    const F = await loadYear(Y.y);
    const o = T.start - Y.start;
    const slice = F.en ? F.en.slice(o, o + T.n) : [];
    const got = slice.filter(Boolean).length, paired = got === T.n;
    const block = F.blocks && F.blocks[mi];
    let html = '';
    for (let k = 0; k < T.n; k++) {
      const g = T.start + k, id = F.ids[o + k], ml = F.ml[o + k], en = F.en ? F.en[o + k] : null;
      html += `<article class="para${ml.length < 60 ? ' short' : ''}${en ? ' has-en' : ''}${g === hitG ? ' hit' : ''}" data-g="${g}">
        <p class="ml">${esc(ml)}</p>${en ? `<p class="en">${esc(en)}</p>` : ''}<span class="pid">${esc(id)}</span></article>`;
    }
    if (block) html += `<details class="block"><summary>The English of ${esc(M.en)} in full, as the translator set it</summary>${block.map((p) => `<p>${esc(p)}</p>`).join('')}</details>`;
    const list = talkList();
    const at = list.findIndex((t) => t.yi === yi && t.mi === mi && t.ti === ti);
    reader.className = `panel right lang-${lang}`;
    reader.innerHTML = `
      <div class="phead"><button class="x" aria-label="Close">×</button>
        <div class="when"><span class="mlt">${esc(M.ml)}</span> · ${esc(M.en)} · ${VOL[M.vol] || ''}</div>
        ${T.t ? `<h2>${esc(T.t)}</h2>` : ''}${T.te && T.te.length < 120 ? `<h3>${esc(T.te)}</h3>` : ''}
        ${langSeg()}
      </div>
      <div class="pbody">${paired ? '' : `<p class="note">${block ? 'In this volume the translator divided the paragraphs differently. English is shown beside a paragraph where the match is certain; the whole month in English is at the end.' : 'English is not available for some lines here.'}</p>`}${html}</div>
      <div class="pfoot"><button data-go="-1" ${at <= 0 ? 'disabled' : ''}>‹ Previous</button><span>Talk ${num(at + 1)} of ${num(list.length)} · ${num(T.n)} paragraphs</span><button data-go="1" ${at >= list.length - 1 ? 'disabled' : ''}>Next ›</button></div>`;
    $('.x', reader).onclick = closeReader;
    reader.querySelectorAll('[data-lang]').forEach((b) => (b.onclick = () => {
      lang = b.dataset.lang; localStorage.setItem('gv-lang', lang);
      reader.className = `panel right lang-${lang}`;
      reader.querySelectorAll('[data-lang]').forEach((x) => x.classList.toggle('on', x === b));
    }));
    reader.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { const t = list[at + Number(b.dataset.go)]; if (t) openTalk(t.yi, t.mi, t.ti); }));
    reader.querySelectorAll('.para').forEach((a) => (a.onclick = () => {
      reader.querySelectorAll('.para.hit').forEach((x) => x.classList.remove('hit'));
      a.classList.add('hit'); api.lotus.mark(DB.nSay + Number(a.dataset.g));
    }));
    const hit = $('.para.hit', reader);
    if (hit) hit.scrollIntoView({ block: 'start' }); else $('.pbody', reader).scrollTop = 0;
    api.lotus.select(DB.nSay + T.start, DB.nSay + T.start + T.n - 1);
    api.lotus.mark(hitG == null ? null : DB.nSay + hitG);
  }

  function openSaying(i) {
    const it = DB.sayings.items[i], topic = DB.sayings.topics[it.topic];
    reader.hidden = false; reader.className = 'panel right';
    reader.innerHTML = `
      <div class="phead"><button class="x" aria-label="Close">×</button>
        <div class="when">Saying ${num(i + 1)} of ${num(DB.nSay)}</div><h3>${esc(topic.title)}</h3></div>
      <div class="pbody"><blockquote class="saying">${esc(it.text)}</blockquote>
        <p class="note">From the collected sayings of the Guru in English (${esc(topic.n + '. ' + topic.title)}).</p></div>
      <div class="pfoot"><button data-go="-1" ${i <= 0 ? 'disabled' : ''}>‹ Previous</button><span>The golden crown</span><button data-go="1" ${i >= DB.nSay - 1 ? 'disabled' : ''}>Next ›</button></div>`;
    $('.x', reader).onclick = closeReader;
    reader.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { const j = i + Number(b.dataset.go); api.flyToPetal(j); openSaying(j); }));
    api.lotus.select(topic.start, topic.start + topic.count - 1);
    api.lotus.mark(i);
  }

  function openPetal(i, fly = true) {
    if (fly) api.flyToPetal(i);
    if (i < DB.nSay) return openSaying(i);
    const g = i - DB.nSay, L = locate(g);
    return openTalk(L.yi, L.mi, L.ti, g);
  }

  // ------------------------------------------------------------ the side panel
  function closeSide() { side.hidden = true; api.lotus.select(null); api.lotus.hoverYear(-1); }
  function openSide(tab) {
    sideTab = tab || sideTab; side.hidden = false;
    side.innerHTML = `
      <div class="phead"><button class="x" aria-label="Close">×</button>
        <p class="title">${{ years: 'The thirty years', search: 'Search the Guruvanikal', nama: 'NAMA' }[sideTab]}</p>
        <div class="tabs">${[['years', 'Years'], ['search', 'Search'], ['nama', 'Ask NAMA']].map(([k, t]) => `<button data-tab="${k}" class="${k === sideTab ? 'on' : ''}">${t}</button>`).join('')}</div>
      </div><div class="pbody"></div>`;
    $('.x', side).onclick = closeSide;
    side.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => openSide(b.dataset.tab)));
    const body = $('.pbody', side);
    if (sideTab === 'years') (yearOpen == null ? drawYears : drawYear)(body);
    if (sideTab === 'search') drawSearch(body);
    if (sideTab === 'nama') drawNama(body);
  }

  function drawYears(body) {
    api.lotus.select(null);
    body.innerHTML = `<p class="note">${num(DB.index.total)} paragraphs in ${num(DB.index.months)} months, from 1977 to 2006. Each year is a ring of the lotus, the earliest nearest the light.</p>
      <div class="years">${DB.index.years.map((Y, k) => `<button data-y="${k}">${Y.y}<small>${num(Y.n)}</small></button>`).join('')}</div>`;
    body.querySelectorAll('[data-y]').forEach((b) => {
      b.onclick = () => openYear(Number(b.dataset.y));
      b.onmouseenter = () => api.lotus.hoverYear(Number(b.dataset.y));
      b.onmouseleave = () => api.lotus.hoverYear(-1);
    });
  }
  function drawYear(body) {
    const Y = DB.index.years[yearOpen];
    body.innerHTML = `<button class="back">‹ All years</button>
      <p class="note"><b style="font-size:30px;color:var(--gold2);font-style:normal">${Y.y}</b> · ${Y.months.length} months · ${num(Y.n)} paragraphs</p>
      ${Y.months.map((M, mi) => `<div class="month"><b>${esc(M.en.replace(' ' + Y.y, ''))}</b><span>${esc(M.ml)}</span>
        ${M.talks.map((T, ti) => `<button class="talk" data-m="${mi}" data-t="${ti}"><span class="mlt">${esc(T.t || M.ml)}</span>${T.te ? `<em>${esc(T.te)}</em>` : ''}<small>${num(T.n)} paragraphs</small></button>`).join('')}</div>`).join('')}`;
    $('.back', body).onclick = () => { yearOpen = null; api.flyHome(); openSide('years'); };
    body.querySelectorAll('.talk').forEach((b) => (b.onclick = () => openTalk(yearOpen, Number(b.dataset.m), Number(b.dataset.t))));
    api.lotus.select(DB.nSay + Y.start, DB.nSay + Y.start + Y.n - 1);
    api.lotus.hoverYear(yearOpen);
  }
  function openYear(k) { yearOpen = k; api.flyToYear(k); openSide('years'); }

  // ------------------------------------------------------------ search and NAMA share one index
  let corpus = null;
  async function ensureCorpus(body) {
    if (corpus) return corpus;
    const barEl = document.createElement('div');
    barEl.innerHTML = '<p class="note">Opening all four volumes…</p><div class="bar2"><i></i></div>';
    body.prepend(barEl);
    await loadAll((f) => { $('i', barEl).style.width = Math.round(f * 100) + '%'; });
    const P = [];
    for (const Y of DB.index.years) {
      const F = DB.years.get(Y.y);
      for (let i = 0; i < F.ids.length; i++) P.push({ g: Y.start + i, id: F.ids[i], ml: F.ml[i], en: F.en ? F.en[i] : null, enL: F.en && F.en[i] ? F.en[i].toLowerCase() : '' });
    }
    const S = DB.sayings.items.map((it, i) => ({ i, text: it.text, enL: it.text.toLowerCase() }));
    corpus = { P, S };
    barEl.remove();
    return corpus;
  }
  // the same search NAMA uses (nama-artifact/search.js): any Malayalam keyboard, whole words, BM25 ranking
  let IX = null;
  function rank(q, { minLen = 0, top = 12 } = {}) {
    const { P, S } = corpus;
    if (!IX) {
      const docs = P.map((p) => ({ id: p.id, ml: p.ml, en: p.en, ref: p }))
        .concat(S.map((x) => ({ id: 'S' + (x.i + 1), ml: '', en: x.text, saying: true, ref: x })));
      IX = GVS.build(docs);
    }
    const qt = GVS.queryTerms(q);
    const ts = qt.ml.map((w) => ({ w, ml: true })).concat(qt.en.map((w) => ({ w, ml: false })));
    if (!ts.length) return { ts, paras: [], says: [] };
    const all = GVS.search(IX, q, { top: 400 }).docs;
    const paras = all.filter((d) => !d.saying && d.ml.length >= minLen).map((d, k) => ({ p: d.ref, s: 1000 - k }));
    const says = all.filter((d) => d.saying).map((d, k) => ({ x: d.ref, s: 1000 - k }));
    return { ts, total: paras.length, paras: paras.slice(0, top), says: says.slice(0, Math.ceil(top / 2)) };
  }
  function snippet(text, ts, width = 230) {
    const low = ts.some((t) => t.ml) ? GVS.normMl(text) : text.toLowerCase();
    let at = -1;
    for (const t of ts) { const i = low.indexOf(t.w.toLowerCase()); if (i >= 0 && (at < 0 || i < at)) at = i; }
    const a = Math.max(0, (at < 0 ? 0 : at) - 60), cut = text.slice(a, a + width);
    let h = esc((a > 0 ? '… ' : '') + cut + (a + width < text.length ? ' …' : ''));
    for (const t of ts) if (t.w.length > 2) h = h.replace(new RegExp(t.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), (m) => `<mark>${m}</mark>`);
    return h;
  }
  function passageCard(r, ts, full = false) {
    const p = r.p, L = locate(p.g);
    const showEn = p.en && (!ts.length || !ts[0].ml || full);
    return `<button class="res" data-g="${p.g}"><small>${esc(p.id)} · ${esc(L.M.en)}${L.T.te ? ' · ' + esc(L.T.te) : ''}</small>
      <span class="mlt">${full ? esc(p.ml) : snippet(p.ml, ts.filter((t) => t.ml))}</span>${showEn ? `<span class="eng">${full ? esc(p.en) : snippet(p.en, ts.filter((t) => !t.ml))}</span>` : ''}</button>`;
  }
  const sayingCard = (r, ts, full = false) => `<button class="res" data-s="${r.x.i}"><small>Saying ${r.x.i + 1} · ${esc(DB.sayings.topics[DB.sayings.items[r.x.i].topic].title)}</small><span class="eng">${full ? esc(r.x.text) : snippet(r.x.text, ts)}</span></button>`;
  function wire(root) {
    root.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => openPetal(DB.nSay + Number(b.dataset.g))));
    root.querySelectorAll('[data-s]').forEach((b) => (b.onclick = () => openPetal(Number(b.dataset.s))));
  }

  function drawSearch(body) {
    body.innerHTML = `<div class="row"><input class="q" placeholder="A word or phrase, in English or മലയാളം" /><button class="gold">Find</button></div>
      <p class="note">Searches every paragraph of the four volumes and the 1,001 sayings.</p><div class="out"></div>`;
    const input = $('.q', body), out = $('.out', body);
    const run = async () => {
      const q = input.value.trim(); if (q.length < 2) return;
      await ensureCorpus(out);
      const R = rank(q, { top: 60 });
      out.innerHTML = R.paras.length + R.says.length
        ? `<p class="note">${num(R.total || 0)} paragraphs hold these words. The closest come first.</p>${R.says.slice(0, 6).map((r) => sayingCard(r, R.ts)).join('')}${R.paras.map((r) => passageCard(r, R.ts)).join('')}`
        : '<p class="note">Nothing was found for these words. Try another word, or a Malayalam word.</p>';
      wire(out);
    };
    $('.gold', body).onclick = run; input.onkeydown = (e) => { if (e.key === 'Enter') run(); };
    input.focus();
  }

  // ------------------------------------------------------------ NAMA
  // A few words of Nama's own for greetings and questions about Nama. These are Nama's words, never the Guru's.
  function smallTalk(q) {
    const t = q.toLowerCase().replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const full = `<a class="link" href="${NAMA_AI_URL}" target="_blank" rel="noopener">speak with me in full</a>`;
    if (/^(hi|hello|hey|namaste|namaskaram|hari om|aum|om|good (morning|afternoon|evening|night))( nama)?$/.test(t)) return `Aum Sathguruve Saranam. You are most welcome here. Ask whatever is in your heart, and I will bring you the Guru's own words on it. If you wish to talk it through, ${full}.`;
    if (/^(who|what) are you|^your name|^are you (a |an )?(ai|bot|guru|god|human)|^who is nama/.test(t)) return `I am Nama, a disciple of Navajyothi Sree Karunakara Guru, still learning at His feet. I am not the Guru and never speak in His place. Here I bring you His recorded words; to talk with me in full, ${full}.`;
    if (/^(thank|thanks)/.test(t)) return 'It is all the Guru\'s grace. May His words stay with you. Aum Guru Charanam Saranam 🙏';
    return null;
  }
  function drawNama(body) {
    body.innerHTML = `
      <div class="nama-say"><b>NAMA</b> · Aum Sathguruve Saranam. Here I bring you the Guru's own words, exactly as they are recorded, each with its place in the Guruvanikal. Ask, and I will find them for you.</div>
      <a class="speak" href="${NAMA_AI_URL}" target="_blank" rel="noopener"><b>Speak with NAMA</b><span>A full conversation with Nama, powered by Claude. Opens on claude.ai.</span></a>
      <div class="log"></div>
      <div class="row" style="margin-top:12px"><input class="q" placeholder="Ask about the Guru's teaching…" /><button class="gold">Ask</button></div>
      <p class="note">Try: What is the duty of a householder? · How should one pray? · ഗുരുവിനെ എങ്ങനെ കാണണം?</p>`;
    const input = $('.q', body), log = $('.log', body);
    const ask = async () => {
      const q = input.value.trim(); if (q.length < 2) return;
      input.value = '';
      const turn = document.createElement('div');
      turn.innerHTML = `<p class="you">“${esc(q)}”</p><div class="ans"><p class="note">Looking through the Guruvanikal…</p></div>`;
      log.append(turn);
      const ans = $('.ans', turn);
      const said = smallTalk(q);
      if (said) { ans.innerHTML = `<div class="nama-say"><b>NAMA</b> · ${said}</div>`; turn.scrollIntoView({ block: 'start', behavior: 'smooth' }); return; }
      await ensureCorpus(ans);
      const R = rank(q, { minLen: 80, top: 7 });
      const strong = R.paras.filter((r, i) => i < 7 && r.s >= (R.paras[0]?.s || 0) * 0.45);
      const says = R.says.filter((r, i) => i < 3 && r.s >= (R.says[0]?.s || 0) * 0.6);
      if (!strong.length && !says.length) {
        ans.innerHTML = `<div class="nama-say"><b>NAMA</b> · I searched with loving care but could not find the Guru's words with the words you used. I will not guess in His place. Perhaps try other words, or a Malayalam word; or <a class="link" href="${NAMA_AI_URL}" target="_blank" rel="noopener">speak with me in full</a> and we will look together.</div>`;
      } else {
        ans.innerHTML = `<div class="nama-say"><b>NAMA</b> · I looked through all ${num(DB.index.total)} paragraphs and the ${num(DB.nSay)} sayings. These are the Guru's own words that stand closest to your question, word for word. Touch any one to read it in its full talk.</div>
          ${says.map((r) => sayingCard(r, R.ts, true)).join('')}${strong.map((r) => passageCard(r, R.ts, true)).join('')}`;
        wire(ans);
      }
      turn.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    $('.gold', body).onclick = ask; input.onkeydown = (e) => { if (e.key === 'Enter') ask(); };
    input.focus();
  }

  document.querySelectorAll('#bar [data-open]').forEach((b) => (b.onclick = () => { if (b.dataset.open === 'years') yearOpen = null; openSide(b.dataset.open); }));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (!reader.hidden) closeReader(); else if (!side.hidden) closeSide(); } });

  return {
    petalLabel, showTip, openPetal, openYear,
    yearLabel: (k) => { const Y = DB.index.years[k]; return `<small>The year</small>${Y.y} · ${Y.months.length} months · ${num(Y.n)} paragraphs`; },
    closeAll() { closeReader(); closeSide(); showTip(null); },
  };
}

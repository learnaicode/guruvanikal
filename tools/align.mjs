// Lines up the English rendering of a volume with its Malayalam, paragraph by paragraph, when the
// two files do not have the same number of paragraphs (a translator joined or split some).
//
// Method: the Gale-Church sentence aligner, on paragraphs. A translation's length follows its
// source's length, so the cheapest path through the two lists that keeps lengths in proportion is
// the true pairing. Allowed steps: 1 to 1, 2 Malayalam to 1 English, 1 to 2, and a paragraph with
// no partner. Question / answer openings and year headings are used as extra anchors.

const isQ = (m) => /^ചോദ്യം/.test(m), isA = (m) => /^ഉത്തരം/.test(m);
const enQ = (e) => /^(Question|Q\s*[:.])/i.test(e), enA = (e) => /^(Answer|A\s*[:.])/i.test(e);
const years = (s) => s.match(/\b(19|20)\d\d\b/g) || [];

// probability-like cost that an English length e belongs to a Malayalam length m
function lenCost(m, e, c, s2) {
  if (m === 0 && e === 0) return 0;
  const mean = (m + e / c) / 2;
  const z = Math.abs((e - m * c) / Math.sqrt(mean * s2));
  // -log of the two-sided normal tail, with a floor so one odd paragraph cannot break the path
  const t = 1 / (1 + 0.2316419 * z);
  const tail = Math.exp(-z * z / 2) * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429)))) / 2.5066282746;
  return -Math.log(Math.max(2 * tail, 1e-12));
}

export function align(ml, en, c = 1.25, s2 = 40) {
  const n = ml.length, m = en.length, W = m + 1;
  const cost = new Float64Array((n + 1) * W).fill(Infinity), back = new Uint8Array((n + 1) * W);
  cost[0] = 0;
  const L = ml.map((t) => t.length), E = en.map((t) => t.length);
  const anchor = (i, j) => {
    const a = ml[i], b = en[j];
    let x = 0;
    if (isQ(a) !== enQ(b)) x += 7;
    if (isA(a) !== enA(b)) x += 7;
    if (a.length < 40) { const ys = years(a); if (ys.length) x += ys.every((y) => b.includes(y)) && b.length < 80 ? -6 : 9; }
    if ((a.length < 30) !== (b.length < 60)) x += 3;
    return x;
  };
  // In practice a translator rarely joins or splits paragraphs, but often drops a bare heading
  // line ("ഗുരുവാണി", a month and year). So: a short Malayalam line may stand alone cheaply; a long
  // paragraph may not; joining and splitting are costly and must earn their place by length.
  const STEPS = [[1, 1], [1, 0], [0, 1], [2, 1], [1, 2]];
  for (let i = 0; i <= n; i++) for (let j = 0; j <= m; j++) {
    const at = cost[i * W + j];
    if (at === Infinity) continue;
    STEPS.forEach(([di, dj], k) => {
      const i2 = i + di, j2 = j + dj;
      if (i2 > n || j2 > m) return;
      let cst = at;
      if (di === 1 && dj === 1) cst += lenCost(L[i], E[j], c, s2) + anchor(i, j);
      else if (di === 1 && dj === 0) cst += L[i] < 45 ? 3 : 14 + L[i] / 40;
      else if (di === 0 && dj === 1) cst += E[j] < 30 ? 4 : 14 + E[j] / 40;
      else if (di === 2) cst += 11 + lenCost(L[i] + L[i + 1], E[j], c, s2) + anchor(i, j);
      else cst += 11 + lenCost(L[i], E[j] + E[j + 1], c, s2) + anchor(i, j);
      if (cst < cost[i2 * W + j2]) { cost[i2 * W + j2] = cst; back[i2 * W + j2] = k + 1; }
    });
  }
  // walk back
  const out = new Array(n).fill(null), how = new Array(n).fill('none'), at = new Array(n + 1).fill(m);
  let i = n, j = m;
  const tally = { one: 0, mlJoined: 0, enJoined: 0, mlAlone: 0, enAlone: [] };
  while (i > 0 || j > 0) {
    const [di, dj] = STEPS[back[i * W + j] - 1];
    i -= di; j -= dj;
    for (let k = 0; k < di; k++) at[i + k] = j;   // where in the English this Malayalam paragraph stands
    if (di === 1 && dj === 1) { out[i] = en[j]; how[i] = 'one'; tally.one++; }
    else if (di === 2 && dj === 1) { out[i] = en[j]; how[i] = 'covers-next'; how[i + 1] = 'with-previous'; tally.mlJoined++; }
    else if (di === 1 && dj === 2) { out[i] = en[j] + ' ' + en[j + 1]; how[i] = 'one'; tally.enJoined++; }
    else if (di === 1) { tally.mlAlone++; }
    else tally.enAlone.push(j);
  }
  return { en: out, how, at, tally, cost: cost[n * W + m] };
}

// A single pair is trusted only if its length and its number of sentences both agree.
export function confident(m, e, c, s2) {
  const z = Math.abs(e.length - m.length * c) / Math.sqrt(((m.length + e.length / c) / 2) * s2);
  const a = (m.match(/[.?!](\s|$)/g) || []).length || 1, b = (e.match(/[.?!]["')]*(\s|$)/g) || []).length || 1;
  return z < 2.2 && Math.abs(a - b) <= Math.max(1, Math.round(Math.max(a, b) * 0.34));
}

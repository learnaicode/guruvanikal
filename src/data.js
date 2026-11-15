// The Guruvanikal as the page sees it. Texts are never altered here: they are shown exactly as
// tools/build-data.mjs wrote them from the canonical source.

export const DB = { index: null, sayings: null, years: new Map(), nSay: 0, all: false };
// The words are kept in their own repository (github.com/learnaicode/guruvanikal-data), pinned to one
// exact version, and served by the jsDelivr CDN. On localhost while developing, the local copy in public/data is used.
// After `npm run data`, push the new data there and put its commit here.
export const DATA_VERSION = '036599ee532ee81f53c759341f6f8cbd63c369e3';
const LOCAL = import.meta.env.DEV && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
const BASE = LOCAL ? new URL('data/', document.baseURI).href : `https://cdn.jsdelivr.net/gh/learnaicode/guruvanikal-data@${DATA_VERSION}/data/`;
const url = (p) => BASE + p;

export async function loadCore() {
  const [index, sayings] = await Promise.all([fetch(url('index.json')).then((r) => r.json()), fetch(url('sayings.json')).then((r) => r.json())]);
  DB.index = index; DB.sayings = sayings; DB.nSay = sayings.items.length;
  return DB;
}

const pending = new Map();
export function loadYear(y) {
  if (DB.years.has(y)) return Promise.resolve(DB.years.get(y));
  if (!pending.has(y)) pending.set(y, fetch(url(`y/${y}.json`)).then((r) => r.json()).then((d) => { DB.years.set(y, d); return d; }));
  return pending.get(y);
}

export async function loadAll(onProgress) {
  const ys = DB.index.years.map((Y) => Y.y);
  let done = 0;
  await Promise.all(ys.map((y) => loadYear(y).then(() => onProgress && onProgress(++done / ys.length))));
  DB.all = true;
}

// where a paragraph (numbered in book order) lives: its year, month and talk
export function locate(g) {
  const years = DB.index.years;
  let yi = years.findIndex((Y) => g < Y.start + Y.n);
  if (yi < 0) yi = years.length - 1;
  const Y = years[yi];
  let mi = Y.months.findIndex((m) => g < m.start + m.n);
  if (mi < 0) mi = Y.months.length - 1;
  const M = Y.months[mi];
  let ti = M.talks.findIndex((t) => g < t.start + t.n);
  if (ti < 0) ti = M.talks.length - 1;
  return { yi, Y, mi, M, ti, T: M.talks[ti] };
}

// every talk in book order, for previous / next
let flat = null;
export function talkList() {
  if (!flat) {
    flat = [];
    DB.index.years.forEach((Y, yi) => Y.months.forEach((M, mi) => M.talks.forEach((T, ti) => flat.push({ yi, mi, ti, Y, M, T }))));
  }
  return flat;
}

export const isMalayalam = (s) => /[ഀ-ൿ]/.test(s);

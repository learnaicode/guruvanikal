// Where the Sun, the Moon and the planets stand in the sky at a given moment.
//
// Planets: the Keplerian elements published by JPL (E. M. Standish, "Approximate Positions of the
// Planets", valid 1800 to 2050), good to a few minutes of arc. Moon: the main terms of the lunar
// theory as given by Jean Meeus, good to a few hundredths of a degree. Rahu and Ketu: the mean nodes
// of the Moon's orbit. All longitudes returned are on the ecliptic of J2000, the same frame as the
// star catalogue, so a graha sits among the stars exactly where it is seen tonight.
//
// The sidereal (nirayana) zodiac used in Indian astrology is fixed to the stars: 0° of Medam lies
// 180° from Chithira (Spica). That is the Lahiri ayanamsa, 23.853° at J2000.

const D = Math.PI / 180;
export const AYAN_J2000 = 23.85306;              // Lahiri ayanamsa at J2000, degrees
const PREC = 1.396971;                            // general precession in longitude, degrees per century
const norm = (x) => ((x % 360) + 360) % 360;

export const RASHIS = [
  ['Medam', 'മേടം', 'Aries'], ['Edavam', 'ഇടവം', 'Taurus'], ['Mithunam', 'മിഥുനം', 'Gemini'], ['Karkkadakam', 'കർക്കടകം', 'Cancer'],
  ['Chingam', 'ചിങ്ങം', 'Leo'], ['Kanni', 'കന്നി', 'Virgo'], ['Thulam', 'തുലാം', 'Libra'], ['Vrischikam', 'വൃശ്ചികം', 'Scorpio'],
  ['Dhanu', 'ധനു', 'Sagittarius'], ['Makaram', 'മകരം', 'Capricorn'], ['Kumbham', 'കുംഭം', 'Aquarius'], ['Meenam', 'മീനം', 'Pisces'],
];
// the twenty-seven nakshatras, each 13°20' of the sidereal zodiac
export const NAKSHATRAS = [
  ['Ashwathi', 'അശ്വതി'], ['Bharani', 'ഭരണി'], ['Karthika', 'കാർത്തിക'], ['Rohini', 'രോഹിണി'], ['Makayiram', 'മകയിരം'], ['Thiruvathira', 'തിരുവാതിര'],
  ['Punartham', 'പുണർതം'], ['Pooyam', 'പൂയം'], ['Ayilyam', 'ആയില്യം'], ['Makam', 'മകം'], ['Pooram', 'പൂരം'], ['Uthram', 'ഉത്രം'],
  ['Atham', 'അത്തം'], ['Chithira', 'ചിത്തിര'], ['Chothi', 'ചോതി'], ['Vishakham', 'വിശാഖം'], ['Anizham', 'അനിഴം'], ['Thrikketta', 'തൃക്കേട്ട'],
  ['Moolam', 'മൂലം'], ['Pooradam', 'പൂരാടം'], ['Uthradam', 'ഉത്രാടം'], ['Thiruvonam', 'തിരുവോണം'], ['Avittam', 'അവിട്ടം'], ['Chathayam', 'ചതയം'],
  ['Pooruruttathi', 'പൂരുരുട്ടാതി'], ['Uthrattathi', 'ഉത്രട്ടാതി'], ['Revathi', 'രേവതി'],
];

// a, e, I, L, long. of perihelion, long. of node; then their change per century
const EL = {
  mercury: [0.38709927, 0.20563593, 7.00497902, 252.2503235, 77.45779628, 48.33076593, 0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081],
  venus: [0.72333566, 0.00677672, 3.39467605, 181.9790995, 131.60246718, 76.67984255, 0.0000039, -0.00004107, -0.0007889, 58517.81538729, 0.00268329, -0.27769418],
  earth: [1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0, 0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0],
  mars: [1.52371034, 0.0933941, 1.84969142, -4.55343205, -23.94362959, 49.55953891, 0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343],
  jupiter: [5.202887, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909, -0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106],
  saturn: [9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448, -0.0012506, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794],
};
function helio(k, T) {
  const p = EL[k], a = p[0] + p[6] * T, e = p[1] + p[7] * T, I = (p[2] + p[8] * T) * D;
  const L = p[3] + p[9] * T, w = p[4] + p[10] * T, O = p[5] + p[11] * T;
  const M = norm(L - w) * D, om = (w - O) * D, Om = O * D;
  let E = M + e * Math.sin(M);
  for (let i = 0; i < 8; i++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const x = a * (Math.cos(E) - e), y = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const co = Math.cos(om), so = Math.sin(om), cO = Math.cos(Om), sO = Math.sin(Om), ci = Math.cos(I), si = Math.sin(I);
  return [(co * cO - so * sO * ci) * x + (-so * cO - co * sO * ci) * y, (co * sO + so * cO * ci) * x + (-so * sO + co * cO * ci) * y, so * si * x + co * si * y];
}
function moon(T) {
  const Lp = 218.3164477 + 481267.88123421 * T, Dm = (297.8501921 + 445267.1114034 * T) * D, M = (357.5291092 + 35999.0502909 * T) * D;
  const Mp = (134.9633964 + 477198.8675055 * T) * D, F = (93.272095 + 483202.0175233 * T) * D, s = Math.sin;
  const lon = Lp + 6.288774 * s(Mp) + 1.274027 * s(2 * Dm - Mp) + 0.658314 * s(2 * Dm) + 0.213618 * s(2 * Mp) - 0.185116 * s(M) - 0.114332 * s(2 * F)
    + 0.058793 * s(2 * Dm - 2 * Mp) + 0.057066 * s(2 * Dm - M - Mp) + 0.053322 * s(2 * Dm + Mp) + 0.045758 * s(2 * Dm - M) - 0.040923 * s(M - Mp)
    - 0.03472 * s(Dm) - 0.030383 * s(M + Mp) + 0.015327 * s(2 * Dm - 2 * F) - 0.012528 * s(Mp + 2 * F) + 0.01098 * s(Mp - 2 * F)
    + 0.010675 * s(4 * Dm - Mp) + 0.010034 * s(3 * Mp) + 0.008548 * s(4 * Dm - 2 * Mp);
  const lat = 5.128122 * s(F) + 0.280602 * s(Mp + F) + 0.277693 * s(Mp - F) + 0.173237 * s(2 * Dm - F) + 0.055413 * s(2 * Dm - Mp + F)
    + 0.046271 * s(2 * Dm - Mp - F) + 0.032573 * s(2 * Dm + F) + 0.017198 * s(2 * Mp + F);
  return [lon - PREC * T, lat];                   // from the ecliptic of the date to that of J2000
}

export const GRAHAS = [
  ['sun', 'Sun', 'സൂര്യൻ'], ['moon', 'Moon', 'ചന്ദ്രൻ'], ['mars', 'Mars', 'ചൊവ്വ'], ['mercury', 'Mercury', 'ബുധൻ'], ['jupiter', 'Jupiter', 'വ്യാഴം'],
  ['venus', 'Venus', 'ശുക്രൻ'], ['saturn', 'Saturn', 'ശനി'], ['rahu', 'Rahu', 'രാഹു'], ['ketu', 'Ketu', 'കേതു'],
];

// every graha at this moment: lon and lat on the J2000 ecliptic, sid = sidereal longitude
export function skyNow(date = new Date()) {
  const T = (date.getTime() / 86400000 + 2440587.5 - 2451545.0) / 36525;
  const E = helio('earth', T), out = {};
  const put = (k, lon, lat) => { const sid = norm(lon - AYAN_J2000); out[k] = { lon: norm(lon), lat, sid, rashi: Math.floor(sid / 30), deg: sid % 30, nak: Math.floor(sid / (360 / 27)) }; };
  put('sun', Math.atan2(-E[1], -E[0]) / D, Math.atan2(-E[2], Math.hypot(E[0], E[1])) / D);
  for (const k of ['mercury', 'venus', 'mars', 'jupiter', 'saturn']) {
    const P = helio(k, T), x = P[0] - E[0], y = P[1] - E[1], z = P[2] - E[2];
    put(k, Math.atan2(y, x) / D, Math.atan2(z, Math.hypot(x, y)) / D);
  }
  const m = moon(T); put('moon', m[0], m[1]);
  const node = 125.0445479 - 1934.1362891 * T - PREC * T;
  put('rahu', node, 0); put('ketu', node + 180, 0);
  out.ayanamsa = AYAN_J2000 + PREC * T;
  return out;
}

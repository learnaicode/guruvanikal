# Guruvanikal · ഗുരുവാണികൾ

The complete words of Navajyothi Sree Karunakara Guru, held in one lotus, for guruvanikal.com.
Built with three.js and Vite.

An offering by **Gurudath Sadanandan and NAMA**.

## Run

```bash
npm install
npm run dev
```

`npm run build` writes the finished static site to `dist/`.

Checking links: `?t=2.4` opens the outward journey stopped at that point (station 2, 40% through);
`?path=in&t=2.4` does the same on the inward journey; `?lotus` goes straight to the lotus.

## The journey

It begins at the Guruvanikal mark in 3D (`src/seed.js`): the crimson disc traced exactly from
`brand/guruvanikal-logo.png` by `tools/trace-logo.py`, with the Guru and the child as the space cut
out of it and light coming through. The mark is shown as a living cell. From it there are two ways
to the same Light, after Kees Boeke's *Cosmic View*:

| Outward, into the vast | Inward, into the subtle | Sound (binaural beat) |
|---|---|---|
| the mark | the mark | low beta, 14 Hz |
| Earth and its five layers of air | Cell | alpha, 10 Hz |
| Solar System | DNA | Earth resonance, 7.83 Hz |
| Milky Way | Atom (sodium) | theta, 6 Hz / 5 Hz |
| Universe | Nucleus | delta, 3.5 Hz / 1.5 Hz |
| Multiverse | | deep delta, 1.5 Hz |
| The Light: the lotus | The Light: the lotus | OM, 136.1 Hz |

There is no fade between worlds. The world being left is kept as a picture and closes like an iris
into the centre (outward) or opens from it (inward) while the next world is already behind it, inside
a tunnel of light in aurora colours (`PassageShader` in `src/gl.js`). The last passage ends in white:
the journey comes out of the light at the centre of the lotus and draws back until the whole lotus is
seen. The lotus rests in white space with no edge or horizon; seen from very near, its centre light
holds the stars.

The sound (`src/sound.js`) is made in the browser and tuned to OM at 136.1 Hz: a drone, two binaural
pairs (on OM and on its fifth), a slow surf of pink noise, and an A-U-M voice at the lotus. The beat
needs headphones. The button at the bottom left turns it on or off, sets the volume, and chooses
between Automatic (the table above) and one held state: gamma 40, beta 18, low beta 14, alpha 10,
Earth resonance 7.83, theta 6, deep theta 4.5, delta 2.5, deep delta 1, epsilon 0.5 Hz, or OM alone.
These are the commonly published brain-wave bands; Monroe's own Hemi-Sync mixes are proprietary and
are not copied. It is meant to soothe and makes no medical claim.

These worlds are a visual path only. They do not sort or interpret the Guru's words.

## What is in the lotus

| Part | Holds |
|---|---|
| The light at the centre | Where the Guru resides. Light only; no image is invented. |
| The golden crown | The 1,001 sayings (English) |
| The white petals | All 7,955 paragraphs of the four volumes, in book order, 1977 nearest the light |
| The 30 great petals | The 30 years, each opening its months and talks |

## The words: `npm run data`

`tools/build-data.mjs` reads the canonical extraction in
`../GURUVANIKAL_PORTABLE_COMPLETE_2026-07-12` and the English renderings in `../Guruvanikal English`,
and writes `public/data`. It stops with an error unless:

- all 7,955 paragraphs are written, each exactly once;
- the SHA-256 of every ID and text matches the source (nothing changed);
- the talks of each month cover the month with no gap.

English (from `../Guruvanikal English`):

- Volumes 1, 3 and 4 run line for line with the Malayalam. Each month is still tested (question
  against question, answer against answer, headings, lengths in proportion) before it is paired.
- Volume 2's English file is divided into paragraphs differently (1,831 lines against 1,533
  paragraphs). It is lined up by `tools/align.mjs`, a Gale-Church length aligner whose ratio is
  learned from Volume 1. A pair is shown beside its paragraph only if its length and sentence count
  agree; every Volume 2 month also carries its whole English at the end of the talk.
- Result: 7,697 of 7,955 paragraphs have English beside them, and all 251 months have their English.
- `english-text/` holds the complete English as plain text: one file per month and one per volume.

## NAMA

- In the site (`src/ui.js`): Ask NAMA finds the closest passages and shows them word for word. No AI
  writes anything.
- As a Claude artifact (`nama-artifact/index.html`, published privately at the address in
  `NAMA_AI_URL`): Claude reads only the retrieved passages and writes short pointing lines. The page
  prints every cited passage from the data itself, drops any line without a valid citation, and
  replaces any line that carries quoted words not found letter for letter in a cited passage.
  To update it, republish that file plus `public/data` as `data/`.

## Files

- `src/seed.js` the 3D mark · `src/realms.js` the nine worlds · `src/lotus.js` the lotus · `src/gl.js` shared shaders
- `src/ui.js` reader, years, search, NAMA · `src/data.js` loading · `src/sound.js` the drone

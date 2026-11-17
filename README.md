# Guruvanikal · ഗുരുവാണികൾ

The complete words of Navajyothi Sree Karunakara Guru, held in one lotus, for guruvanikal.com.
Built with three.js and Vite.

An offering by **Gurudath Sadanandan and NAMA**.

© 2026 Gurudath Sadanandan. All rights reserved. See [LICENSE](LICENSE).

## Run

```bash
npm install
npm run dev
```

`npm run build` writes the finished static site to `dist/`.

## Releasing: `npm run release`

guruvanikal.com is a small doorway page (repository `learnaicode/guruvanikal-site`, published once on
Bolt). Each time it opens it reads `version.txt` from the `live` branch of this repository and loads
the site built in the commit named there, through jsDelivr. `npm run release` builds the site, commits
the build to `live` and points `version.txt` at it. guruvanikal.com then shows the new version within
about five minutes. Nothing is imported or published by hand, and Bolt is not touched again.

Checking links: `?t=2.4` opens the outward journey stopped at that point (station 2, 40% through);
`?path=in&t=2.4` does the same on the inward journey (also `path=up` and `path=down`); `?lotus` goes
straight to the lotus.

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

To check for flicker, load `tools/flicker-test.js` in the running site (copy it into `public/`, then
`await import('/flicker-test.js')`) and call `__flicker('out', [0.88, 1.88])`: it plays each stretch frame by
frame and reports any jump in brightness and the share of pixels that flash on and off.

Between worlds the motion never stops. Going outward, the world being left keeps drawing back until it
is a point of light inside the greater world, which is itself drawing back into place; going inward the
world being left grows past and thins from the centre, where the finer world is already rising
(`PassageShader` in `src/gl.js`). No shape or edge is drawn. Every world is drawn once, unseen, while the
first screen shows, so nothing halts when it first appears. The aurora is walked through in depth, layer
behind layer, not painted on the sky. The last passage ends in white, and out of the white a closed lotus bud
glows among the stars, lit from within by the AUM. It opens as a lotus opens: the outer petals bend back first, the inner ones last, uncovering the AUM, while the view rises
until the whole flower is seen.

The sound (`src/sound.js`) is made in the browser and tuned to OM at 136.1 Hz: a drone, two binaural
pairs (on OM and on its fifth), a slow surf of pink noise, and an A-U-M voice at the lotus. The beat
needs headphones. The ☰ panel at the bottom left sets the volume and the frequencies (see below). The
states are: gamma 40, beta 18, low beta 14, alpha 10,
Earth resonance 7.83, theta 6, deep theta 4.5, delta 2.5, deep delta 1, epsilon 0.5 Hz, or OM alone.
These are the commonly published brain-wave bands; Monroe's own Hemi-Sync mixes are proprietary and
are not copied. It is meant to soothe and makes no medical claim.

There are two more journeys along the whole ladder of scale: **smallest to vastest** (Nucleus, Atom,
DNA, Cell, the mark, Earth ... Multiverse, the Light) and **vastest to smallest** (the same in reverse).

### Time, as a meditation

The traveller sets how long the journey takes: the natural pace (about two minutes), 3 to 60 minutes,
or any number of minutes up to 240. The time is shared equally among the worlds; the passages between
them stay a few seconds long. Pause and the time left are in the ☰ panel at the bottom left. In a long
sitting the sayings come and go many times.

### Frequencies

In the same panel: follow the journey (the table above), one frequency held throughout, several in
the traveller's own order (they share the time of the journey equally), or none at all, for a journey
of the eyes only. "Eyes closed" darkens the picture for a journey of sound only.

### The Prayer Song

A song to God and the Guru by Gurudath Sadanandan (`src/media/prayer-song.mp3`). It never plays by
itself: **♫ Prayer Song** in the top bar at the lotus, or the row in the ☰ panel, starts and pauses it.
While it plays the tones of the journey rest; they return when it ends or is paused.

### Consciousness: moving freely

**Move freely** (or the C key, or "As consciousness" on the first screen) frees the view from the path.
The pointer is where attention rests: scrolling moves toward it, dragging looks around; W A S D or the
arrow keys also move, Space rests. On a phone: drag to look, pinch or hold ▲ ▼ to move. The speed
slider sets how fast. Every world has a heart and an edge. Going into the heart enters the smaller
world within it (the Milky Way's small light is the Sun; the Solar System's blue planet is the Earth;
touching the Earth enters a living cell; the Guru's outline in the mark leads within; and so on down to
the nucleus, whose heart is the Light). Leaving a world far behind reaches the greater world that holds
it, up to the multiverse, beyond which is the Light. From the lotus, travelling into the centre light
enters the multiverse: everything is within it. C again returns to the path at the world one is in.

The controls rest after a few seconds of stillness and return at a touch; **Hide everything** (or H)
clears the screen completely.

These worlds are a visual path only. They do not sort or interpret the Guru's words.

## Around the lotus

The **✦ Cosmos / ☀ White space / ☾ Dark space** button chooses the space around the lotus (the choice is
remembered). Cosmos is the default: the lotus floats at the centre of the real night sky (`src/cosmos.js`).

- **The stars**: all 5,044 stars to magnitude 6, every star the eye can see, each in its true direction
  (J2000) with its true brightness and colour. Depth follows each star's measured distance (1 to 1,000
  parsecs, compressed), so the sky can be travelled through and the figures change shape as one moves.
- **The figures**: the lines of all 88 constellations, the twelve of the zodiac in gold.
- **The zodiac of Indian astrology**: the ecliptic is a ring around the lotus. On it are the twelve
  rashis (30° each, മേടം to മീനം) and the twenty-seven nakshatras (13°20' each), measured from the point
  opposite Chithira (Spica): the sidereal zodiac with the Lahiri ayanamsa (23.853° at J2000). Each
  nakshatra is named at its yogatara.
- **The grahas, now**: the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu stand where
  they are at this moment (`src/ephem.js`: JPL's Keplerian elements for the planets, Meeus's lunar terms
  for the Moon, the mean lunar nodes; checked against the eclipse of 8 April 2024 to a few hundredths of
  a degree). The ☰ panel lists each one's rashi, degree and nakshatra.

`src/sky.json` is built by `node tools/build-sky.mjs <folder>` from d3-celestial by Olaf Frohn (stars
and constellation lines, BSD 3-Clause) and the HYG database v4.0 by David Nash (distances, CC BY-SA 4.0).
The Milky Way and the faintest stars behind are drawn to look like the sky, not star by star.

The view turns slowly by itself; **⟳ Turning / ⟳ Still** stops or starts it, and it pauses while
someone reads. Now and then one of the 1,001 sayings rises quietly at the bottom of the screen.

## What is in the lotus

| Part | Holds |
|---|---|
| AUM at the centre | Where the Guru resides: the AUM in white light, in three dimensions (traced from `brand/aum.png` by `tools/trace-aum.py`). No image is invented. Every journey that leaves the lotus goes through it. **ॐ Meditate in AUM** carries the view inside it to rest and look out at the whole sky, turning slowly. |
| The golden crown | The 1,001 sayings (English) |
| The white petals | All 7,955 paragraphs of the four volumes, in book order, 1977 nearest the light |
| The great white petals | Four whorls of broad, overlapping petals, as on a white lotus. The 30 of the innermost whorl are the 30 years, each opening its months and talks |

## The words: `npm run data`

The data is not kept in this repository. It lives in
[learnaicode/guruvanikal-data](https://github.com/learnaicode/guruvanikal-data), pinned by commit in
`src/data.js` and served by jsDelivr; the plain-text English is there too, in `english-text/`. The
dev server uses the local `public/data` produced by `npm run data`.

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
  To update it, republish that file and `search.js`, plus `public/data` as `data/`.
- Two copies are kept. The main one, linked from the site, is https://claude.ai/artifact/BhSVVcssy2ATWacwJfMb7E
  (the namaarchive account). The first copy stays at https://claude.ai/artifact/61DJF7LcMHVP1kWuYi8No3
  (the other account). Both must be shared publicly from claude.ai for visitors to open them.

## Files

- `src/seed.js` the 3D mark · `src/realms.js` the nine worlds · `src/lotus.js` the lotus · `src/cosmos.js` the night sky around it · `src/ephem.js` the grahas now · `src/sky.json` the star catalogue · `src/gl.js` shared shaders
- `src/main.js` the journeys, their timing, free travel and the ☰ panel
- `src/ui.js` reader, years, search, NAMA · `src/data.js` loading · `src/sound.js` the drone

#!/bin/bash
# Puts the built site where guruvanikal.com reads it from.
#
# guruvanikal.com itself is only a small doorway page (repository learnaicode/guruvanikal-site, published
# once on Bolt). Each time it opens it reads live/version.txt from this repository, which names one
# commit of the `live` branch, and loads the site built in that commit through jsDelivr. So a release
# is: build, commit the build to `live`, point version.txt at it. The site follows within about five
# minutes, with nothing to import or publish anywhere.
#
#   npm run release
set -euo pipefail
cd "$(dirname "$0")/.."
REPO=$(git remote get-url origin)
npm run build
TMP=$(mktemp -d)
if git ls-remote --exit-code --heads origin live >/dev/null 2>&1; then
  git clone --quiet --depth 1 --branch live "$REPO" "$TMP"
else
  git init --quiet "$TMP"; git -C "$TMP" checkout --quiet -b live; git -C "$TMP" remote add origin "$REPO"
fi
find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$TMP"/
rm -rf "$TMP/data"                      # the words are served from learnaicode/guruvanikal-data
git -C "$TMP" add -A
git -C "$TMP" commit --quiet --allow-empty -m "Site built from $(git rev-parse --short HEAD)"
SHA=$(git -C "$TMP" rev-parse HEAD)
echo "$SHA" > "$TMP/version.txt"
git -C "$TMP" add version.txt
git -C "$TMP" commit --quiet -m "Live: $SHA"
git -C "$TMP" push --quiet origin live
rm -rf "$TMP"
echo "Released. guruvanikal.com will show build $SHA within about five minutes."

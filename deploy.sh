#!/usr/bin/env bash
set -e
npm run build
TMP=$(mktemp -d)/deploy
cp -R dist/. "$TMP"/
cd "$TMP"
git init -q
git add -A
git -c user.email="deploy@users.noreply.github.com" -c user.name="deploy" commit -qm "Deploy to GitHub Pages"
git push -qf "$(git remote get-url origin)" HEAD:gh-pages
echo "Deployed: https://lutluthfi.github.io/"

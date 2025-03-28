#!/bin/bash

rm -rf dist
# abort on errors
set -e
# build
bun run build

# navigate into the build output directory
cd dist

echo 'raidcalculator.bernini.dev' >CNAME

git init -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Bernini-dev/raid-calculator.git main:gh-pages
cd -
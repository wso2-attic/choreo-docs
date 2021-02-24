#!/usr/bin/env sh

# abort on errors
set -e

# build
sudo yarn run docs:build

# navigate into the build output directory
sudo chmod 777 -R src/.vuepress/dist
cd src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:wso2/choreo-docs.git  master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
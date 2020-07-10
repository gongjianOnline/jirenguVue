cnpm run build &&
git checkout dist &&
rm -rf build config src .babelrc .editorconfig .postcssrc.js *.html *.json *.md &&
mv dist/* ./ &&
git add . && 
git commit -m "update" &&
git push origin dist &&
git checkout - 
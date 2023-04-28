#!/bin/bash

VERSION=`echo "console.log(require('./package.json').version)" | node`

echo Building dist files for $VERSION...
mkdir -p dist
browserify -t browserify-shim src/L.Routing.TomTom.js >dist/lrm-tomtom.js
uglifyjs dist/lrm-tomtom.js >dist/lrm-tomtom.min.js
echo Done.

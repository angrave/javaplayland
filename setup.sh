#!/bin/bash

git submodule update --init --recursive

PKGMGR=""
if [ "$PLATFORM" = "Darwin" ]; then
    if command -v brew; then
        echo "Found the homebrew package manager."
        PKGMGR="brew install"
    fi
fi

if [ -n "$PKGMGR" ]; then
  $PKGMGR node
fi


#COFFEEC=$(npm bin)/coffee
COFFEEC=coffee

mkdir -p vendor
if [ ! -d vendor/doppio ]; then 
	git clone git://github.com/angrave/doppio.git vendor/doppio
	pushd .
	cd vendor/doppio
	./tools/setup.sh
	popd
fi

mkdir -p web/scripts/doppio/
mkdir -p web/browser


DOPPIO=$(cd vendor/doppio;pwd)
LISTINGS=$(cd web/browser;pwd)/listings.json

pushd .
cd $DOPPIO; 
make library
popd

# Copy doppio JVM
cp -r $DOPPIO/build/library/*compressed* web/scripts/doppio/

ln -sfn $(cd $DOPPIO/classes;pwd) web/classes
ln -sfn $(cd $DOPPIO/vendor;pwd) web/vendor

for src in $DOPPIO/vendor/ace/src-min/{ace.js,mode-java.js,theme-twilight.js} ; do \
	cat ${src}; \
	echo ";"; \
done > web/scripts/doppio/ace-combined.js

# listings contains a list of server-side runtime classes available for download
##Cannot just use Doppio's ln -sfn $(cd $DOPPIO/build/release/browser;pwd)/listings.json web/browser/listings.json

rm web/browser/listings.json
pushd .
cd web
$COFFEEC $DOPPIO/tools/gen_dir_listings.coffee > "$LISTINGS"
popd 

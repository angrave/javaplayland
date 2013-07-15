#!/bin/bash

if [ -f ./setup-per-developer-env.sh ] ; then
# setup-per-developer-env.sh is not tracked by git    
    source ./setup-developer-options.sh
fi

#Remove old soft links
rm -rf web/vendor
rm -rf web/classes

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



git submodule update --init --recursive
# remove zi (bad symlink upsets coffee compiler)
#rm -rf vendor/doppio/vendor/java_home/lib/zi

DOPPIO_SRC=$(cd vendor/doppio;pwd)
DOPPIO_WEB=$(cd web;pwd)/doppio-jvm

DOPPIO_JVM=$DOPPIO_WEB/scripts/jvm
DOPPIO_DEMO=$DOPPIO_WEB/scripts/demo
DOPPIO_CUSTOM=$DOPPIO_WEB/scripts/custom
DOPPIO_CLASSES=$DOPPIO_WEB/classes
DOPPIO_LISTINGS=$DOPPIO_WEB/listings.json

#Copy coffee.png
#cp "$DOPPIO_SRC/browser/coffee.png" web/browser/
#cp "$DOPPIO_SRC/browser/coffee.svg" web/browser/

pushd .
cd "$DOPPIO_SRC"; 
make library
popd

####mkdir -p "$DOPPIO_JVM" "$DOPPIO_CUSTOM" "$DOPPIO_DEMO"
####ln -sfn $(cd $DOPPIO_SRC/classes;pwd) "$DOPPIO_CLASSES"
####ln -sfn $(cd $DOPPIO_SRC/vendor;pwd) "$DOPPIO_WEB/vendor"

# Copy doppio JVM
cp -r $DOPPIO_SRC/build/library/*compressed* "$DOPPIO_JVM"

#Todo vendor stuff?

for src in $DOPPIO_SRC/vendor/ace/src-min/{ace.js,mode-java.js,theme-twilight.js} ; do \
	cat ${src}; \
	echo ";"; \
done > "$DOPPIO_DEMO/ace-combined.js"

pushd .
# compile relative to webroot so that maps are correct
cd web

coffee --compile --map $DEV_COFFEE_OPTIONS --output $(cd $DOPPIO_JVM/..;pwd) $(cd $DOPPIO_JVM/..;pwd)
# Doppio listing needs to be relative to Doppio root
cd "$DOPPIO_WEB"
####$COFFEEC "$DOPPIO_SRC/tools/gen_dir_listings.coffee" > "$DOPPIO_LISTINGS"
popd 

####cp "$DOPPIO_SRC/build/release/browser/mini-rt.tar" "$DOPPIO_DEMO"


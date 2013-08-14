#!/bin/bash
if [ ! -d web/ ] ; then
    echo "Wrong dir"
    exit 1
fi

if [ -f ./setup-per-developer-env.sh ] ; then
# setup-per-developer-env.sh is not tracked by git    
    source ./setup-developer-options.sh
fi


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


#git submodule update --init --recursive
# remove zi (bad symlink upsets coffee compiler)
#rm -rf vendor/doppio/vendor/java_home/lib/zi

DOPPIO_SRC=$(cd vendor/doppio;pwd)
DOPPIO_WEB=$(cd web;pwd)/doppio-jvm

DOPPIO_JVM=$DOPPIO_WEB/scripts/jvm
DOPPIO_DEMO=$DOPPIO_WEB/scripts/demo
DOPPIO_CUSTOM=$DOPPIO_WEB/scripts/custom
DOPPIO_CLASSES=$DOPPIO_WEB/classes
DOPPIO_LISTINGS=$DOPPIO_WEB/listings.json


pushd .
cd "$DOPPIO_SRC"; 
make library
popd

mkdir -p "$DOPPIO_JVM" "$DOPPIO_CUSTOM" "$DOPPIO_DEMO"

# Copy doppio JVM
cp -r $DOPPIO_SRC/build/library/*compressed* "$DOPPIO_JVM"

#No... we need our modified version cp $DOPPIO_SRC/vendor/browserfs/dist/browserfs.js "$DOPPIO_JVM"
cp vendor/browserfs/lib/browserfs.js "$DOPPIO_JVM"

#
#for src in $DOPPIO_SRC/vendor/ace/src-min/{ace.js,mode-java.js,theme-twilight.js} ; do \
#	cat ${src}; \
#	echo ";"; \
#done > "$DOPPIO_DEMO/ace-combined.js"


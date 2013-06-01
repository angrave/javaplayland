#!/bin/bash
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
DOPPIO=vendor/doppio
pushd .
cd $DOPPIO
make library
popd
# Copy doppio JVM
cp -r $DOPPIO/build/library/*compressed* web/scripts/doppio/
# listings contains a list of server-side runtime classes available for download
ln -sfn $(cd $DOPPIO/build/release/browser;pwd)/listings.json web/browser/listings.json



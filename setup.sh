#!/bin/bash
mkdir -p vendor
if [ ! -d vendor/doppio ]; then 
	git clone git://github.com/angrave/doppio.git vendor/doppio
	pushd
	cd vendor/doppio
	./tools/setup.sh
	popd
fi
cd vendor/doppio
make library
cd ../..
mkdir -p web/scripts/doppio/
cp -r vendor/doppio/build/library/*compressed* web/scripts/doppio/


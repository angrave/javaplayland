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
make test -j4
cd ../..


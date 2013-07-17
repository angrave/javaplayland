#!/bin/bash

TGT=web/scripts/ace
SRC=vendor/ace-builds


if [ ! -d ../javaplayland/$TGT ] ; then
    echo 'wrong dir'
    exit 1
fi

if [ ! -d $SRC ] ; then
    echo 'No source directory'
    exit 1
fi

FILES="ace.js ext-settings_menu.js mode-java.js"
BUILDS="src-min-noconflict src-min src src-noconflict"


for build in $BUILDS ; do
    mkdir -p $TGT/$build
for i in $FILES ; do
    rsync -a $SRC/src-min-noconflict/$i $TGT/$build
done
done
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

if [ true ] ; then
    echo "Just copying $FILES"
    for build in $BUILDS ; do
        rm -rf  $TGT/$build
        mkdir -p $TGT/$build
        for i in $FILES ; do
            echo $SRC/$build/$i
            cp -a $SRC/$build/$i $TGT/$build
        done
    done

else
    echo "Copying all ace files"
    for build in $BUILDS ; do
        rm -rf  $TGT/$build
        cp -a $SRC/$build $TGT
    done
fi
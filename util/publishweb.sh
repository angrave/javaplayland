#!/bin/bash
if [ ! -d ../javaplayland/web/doppio-jvm ] ; then
    echo 'wrong dir'
    exit 1
fi

if [ ! -d ../javaplayland-web ] ; then
    echo 'No web target directory'
    exit 1
fi

rsync --exclude '*.DS_Store'  --exclude '*.git'  -av web/ ../javaplayland-web

cp -pr gh-pages-config/ ../javaplayland-web/
#git add -A ../javaplayland-web
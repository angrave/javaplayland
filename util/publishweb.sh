#!/bin/bash
if [ ! -d ../javaplayland/web/doppio-jvm ] ; then
    echo 'wrong dir'
    exit 1
fi

if [ ! -d ../codemoo/ ] ; then
    echo 'No web target directory'
    exit 1
fi


rsync --exclude '*.DS_Store'  --exclude '*.git'  -av web/ ../codemoo
mv ../codemoo/index.html ../codemoo/index2.html 
perl -p -i -e "s/WebTrafficAnalyticsHere/script/g"  ../codemoo/index2.html

rsync -av LICENSE.txt ../codemoo/
cp -pr gh-pages-config/ ../codemoo/
rm ../codemoo/_*



( cd ../codemoo; coffee -c scripts )
( cd ../codemoo; coffee -c doppio-jvm/scripts/demo/ )


#( cd ../codemoo; git add -A . )
#( cd ../codemoo; git commit -m 'Publish' )
echo \( cd ../codemoo\; git push origin gh-pages \)
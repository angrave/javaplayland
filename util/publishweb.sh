#!/bin/bash
if [ ! -d ../javaplayland/web/doppio-jvm ] ; then
    echo 'wrong dir'
    exit 1
fi

TGT=../codemoo

if [ ! -d $TGT/ ] ; then
    echo 'No web target directory'
    exit 1
fi

CURRENTBRANCH=`git rev-parse --abbrev-ref HEAD`
EXPECTEDBRANCH='master'
if [ "$CURRENTBRANCH" != "$EXPECTEDBRANCH" ] ; then
    echo "Expected branch $EXPECTEDBRANCH , but found $CURRENTBRANCH"
    exit 2
fi

GITSTATUS=$(git status --porcelain)

if [ -n "$GITSTATUS" ]; then 
    echo "Commit your changes first:"
    echo $GITSTATUS
    exit 3
fi

rsync --delete --exclude '*.DS_Store'  --exclude '*.git'  -av web/ $TGT
mv $TGT/index.html $TGT/index2.html 
perl -p -i -e "s/WebTrafficAnalyticsHere/script/g"  $TGT/index2.html

rsync -av LICENSE.txt $TGT/
cp -pr gh-pages-config/ $TGT/
rm $TGT/_*


#Compile
( cd $TGT; coffee -c scripts )
( cd $TGT; coffee -c doppio-jvm/scripts/demo/ )
#Stamp

date >$TGT/publish-date.txt
git log -n 5 --oneline >$TGT/publish-recentcommits.txt



( cd $TGT; git add -A . )
( cd $TGT; git commit -m 'Publish' )

echo "Files commited. ->>> Unless you've also changed the JVM runtime .class's just copy-paste the following to publish the new build!"
echo \( cd $TGT\; git push origin gh-pages \)
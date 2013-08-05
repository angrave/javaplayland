#!/bin/bash
if [ ! -d web/doppio-jvm ] ; then
    echo 'wrong dir'
    exit 1
fi

BASE=`pwd`
TGT=web/doppio-jvm
DOPPIO=$BASE/vendor/doppio
COFFEEC=coffee

SOURCEPATH=$BASE/src/
CLASSPATH=$TGT/vendor/classes/

# Todo insert your javac here
# -g:none ; no debug info
javac -sourcepath $SOURCEPATH -classpath $CLASSPATH -d $CLASSPATH  $BASE/src/codemoo/Preload.java $BASE/src/codemoo/Run.java $BASE/src/codemoo/RunGame.java || exit 1

#Classes should be relative to $TGT/vengor/classes
# e.g. bsh.Interpreter.class is at $TGT/vengor/classes/bshInterpreter.class

(cd $TGT; coffee $DOPPIO/tools/gen_dir_listings.coffee > listings.json)

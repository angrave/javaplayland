#!/bin/bash
if [ ! -d web/doppio-jvm ] ; then
    echo 'wrong dir'
    exit 1
fi
if [ -h $TGT/vendor/ ] ; then
    echo "remove the $TGT/vendor link first"
    exit 1
fi
if [ -h $TGT/classes/ ] ; then
    echo "remove the $TGT/classes link first"
    exit 1
fi

BASE=`pwd`
TGT=web/doppio-jvm
DOPPIO=$BASE/vendor/doppio
COFFEEC=coffee

mkdir -p $TGT/classes
mkdir -p $TGT/vendor



if [ ! -f $TGT/vendor/classes/java/lang/Object.class ]; then
  DOWNLOAD_DIR=`mktemp -d jdk-download.XXX`
  cd $DOWNLOAD_DIR
    DEBS_DOMAIN="http://security.ubuntu.com/ubuntu/pool/main/o/openjdk-6"
    DEBS=("openjdk-6-jre-headless_6b27-1.12.5-0ubuntu0.12.04.1_i386.deb")
    for DEB in ${DEBS[@]}; do
      wget $DEBS_DOMAIN/$DEB
      ar p $DEB data.tar.gz | tar zx
    done
  cd ..
  JARS=("rt.jar" "resources.jar")
  for JAR in ${JARS[@]}; do
    JAR_PATH=`find $DOWNLOAD_DIR/usr -name $JAR | head -1`
    echo "Extracting the Java class library from $JAR_PATH"
    unzip -qq -o -d $TGT/classes/ "$JAR_PATH"
  done
  if [ ! -e java_home ]; then
    JH=$DOWNLOAD_DIR/usr/lib/jvm/java-6-openjdk-common/jre
    # a number of .properties files are symlinks to /etc; copy the targets over
    # so we do not need to depend on /etc's existence
    for LINK in `find $JH -type l`; do
      DEST=`readlink $LINK`
      if [ "`expr "$DEST" : '/etc'`" != "0" ]; then
        test -e "$DOWNLOAD_DIR/$DEST" && mv "$DOWNLOAD_DIR/$DEST" $LINK
      fi
    done
    mv $JH java_home
  fi
  rm -rf "$DOWNLOAD_DIR"
fi


# Download Beanshell 2
if [ ! -d $TGT/vendor/classes/bsh ]; then
    BSH2_JAR_URL="http://beanshell2.googlecode.com/files/bsh-2.1b5.jar"
    DOWNLOAD_DIR=`mktemp -d bsh-download.XXX`
    mkdir -p $DOWNLOAD_DIR
    wget -O p $DOWNLOAD_DIR/bsh2.jar $BSH2_JAR_URL
    unzip -qq -o -d $TGT/vendor/classes/ $DOWNLOAD_DIR/bsh2.jar
    rm -rf "$DOWNLOAD_DIR"
fi   

mkdir -p $TGT/vendor/classes/classes/doppio/
cp $DOPPIO/classes/doppio/*.class $TGT/vendor/classes/classes/doppio/

#Todo fix doppio filesystem (file listing entries are now relative to doppio-jvm/sys)
echo $DOPPIO
(cd $TGT; coffee $DOPPIO/tools/gen_dir_listings.coffee > listings.json)

echo "Creating mini-rt tarball..."; 

echo 'for(int i = 0;i<2;i++) classes.doppio.JavaScript.eval("");' > tmp.bsh
( cd $DOPPIO; ./doppio -Xlist-class-cache bsh/Interpreter  tmp.bsh) > $TGT/.preload-list
grep -v 'tmp.bsh'  $TGT/.preload-list > $TGT/.preload-list2; mv  $TGT/.preload-list2  $TGT/.preload-list
#Also remove Mac 'resource' files
grep -v '/._'  $TGT/.preload-list > $TGT/.preload-list2; mv  $TGT/.preload-list2  $TGT/.preload-list
cat  $TGT/.preload-list $BASE/util/preload-extras.txt | sort | uniq > $TGT/.preload-list2 ; mv  $TGT/.preload-list2  $TGT/.preload-list

if [ "$(uname)" == "Darwin" ] ; then
    echo "Prevent ._ resource files in Mac"
    TAROPT=--disable-copyfile
fi
(cd $TGT; tar -c $TAROPT -T .preload-list -f preload.tar )
#cat .preload-list
#tar -t -f preload.tar
rm tmp.bsh $TGT/.preload-list
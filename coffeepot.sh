#!/bin/bash

#Save the names of all the script and Doppio files.
#TODO figure out a way to only save the JavScript files
find web/scripts -name "*.js" ! -name "*ace*" -maxdepth 10 -type f -exec echo "{}">files.txt \;

echo "Compiling doppio-jvm scripts"
$(cd web; coffee --compile --map --lint doppio-jvm/scripts)
echo "Watching web/scripts"
cd web;
coffee --compile --map --lint --watch scripts

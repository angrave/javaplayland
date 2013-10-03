#!/bin/bash
echo "Compiling doppio-jvm scripts"
$(cd web; coffee --compile --map  doppio-jvm/scripts)
echo "Watching web/scripts"
cd web;
coffee --compile --map  --watch scripts

#!/bin/bash
echo "Compiling doppio-jvm scripts"
$(cd web; coffee --compile --lint doppio-jvm/scripts)
echo "Watching web/scripts"
cd web;
coffee --compile --lint --watch scripts

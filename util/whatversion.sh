#!/bin/bash

echo "Currently published:"
curl www.codemoo.com/publish-date.txt
curl www.codemoo.com/publish-recentcommits.txt
echo "Local commits:"
git log -n 5 --oneline 


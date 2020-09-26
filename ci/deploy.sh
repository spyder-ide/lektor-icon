#!/bin/bash -ex

cd example-site
lektor deploy ghpages --output-path website-lektor-icon-build
cd ..

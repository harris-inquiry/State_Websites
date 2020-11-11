#!/usr/bin/env sh

docker run -it -p 8000:8000 -v $(pwd)/src:/usr/src/site/src electionwebsite

#!/usr/bin/env sh

docker run \
  -it \
  --rm \
  --init \
  -p 8000:8000 \
  -v $(pwd)/src:/usr/src/site/src \
  --name StateElections \
  quarry/state_election

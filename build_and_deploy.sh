#!/usr/bin/env bash

set -e
echo "building ......"
docker build -t cost-manager .
echo "deploying"
docker-compose up -d
echo "Deployed ......"

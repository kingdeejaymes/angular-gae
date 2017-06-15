#!/usr/bin/env bash
function usage {
    cat << EOF

<Usage>: deploy.sh <environment> [version]

Deploys this appengine application to the designated environment (dev/qa/prod).

EOF
   exit 1
}

environment=$1

if [ $# -gt 2 ] || [ $# -lt 1 ]; then
    usage;
fi

gitHash=`git rev-parse --short HEAD`
version=$2

if [ "$environment" = "dev" ]; then
    projectId="acn-irvine-gift-tracking"
    nopromote=" --no-promote"
fi

if [ "$environment" = "qa" ]; then
    projectId="<INSERT-PROJECT-ID-HERE>"
    nopromote=""
    version="$version-$gitHash"
fi

if [ "$environment" = "staging" ]; then
    projectId="<INSERT-PROJECT-ID-HERE>"
    nopromote=""
    version="$version-$gitHash"
fi

if [ "$environment" = "prod" ]; then
    projectId="<INSERT-PROJECT-ID-HERE>"
    nopromote=" --no-promote"
    version="$version-$gitHash"
fi

cp src/config/$environment.txt src/app/config.js
grunt
(gcloud app deploy app.yaml --project=$projectId --version=$version $nopromote --verbosity=info)

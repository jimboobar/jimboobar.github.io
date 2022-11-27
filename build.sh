#!/usr/bin/env sh

(
    cd "$(dirname $0)"
    
    echo 'Installing dependencies...'
    npm i

    if [ -d dist ]; then
        echo 'Cleaning distribution directory...'
        rm -rf dist
    fi
    
    echo 'Creating distribution directory...'
    mkdir dist

    echo 'Copying content to distribution...'
    cp -R public/* dist/

    echo 'Building site:app...'
    npm run build:site:app
    
    echo 'Building site:background...'
    npm run build:site:background
    
    echo 'Building game:snake...'
    npm run build:game:snake
)

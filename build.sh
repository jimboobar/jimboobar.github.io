#!/usr/bin/env sh

(
    cd "$(dirname $0)"
    
    echo 'Installing dependencies...'
    npm i

    echo 'Creating distribution directory...'
    mkdir dist

    echo 'Copy content to distribution...'
    cp -R public/* dist/

    echo 'Build source...'
    npm run build
)

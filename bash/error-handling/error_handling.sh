#!/usr/bin/env bash

main() {
    if [[ $# -eq 1 ]] 
    then
         echo "Hello, $1"
         # 返回码为0 运行正常  
         exit 0
    else
        echo "Usage: error_handling.sh <person>"
        # 返回码非0 运行错误
        exit 1
    fi
}

main "$@"
#!/usr/bin/env bash

main(){
  a="$1"
  b="$2"

  # 必须有两个参数
  [ $# -ne 2 ] && echo 'Usage: hamming.sh <string1> <string2>' && exit 1
  # 两个参数的长度必须相等
  [ ${#a} -ne ${#b} ] && echo 'strands must be of equal length' && exit 1

  ans=0
  index=0
  length=${#a}
  while [ $index -lt $length ]; do
    if [ ${a:$index:1} != ${b:$index:1} ]; then
      ans=$((ans+1))
    fi
    index=$((index+1))
  done
  echo $ans
  exit 0
}

main "$@"
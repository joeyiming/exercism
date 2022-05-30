#!/usr/bin/env bash

main () {
  ans=''
  modThree=$(($1 % 3))
  modFive=$(($1 % 5))
  modSeven=$(($1 % 7))
  if [ $modThree -eq 0 ]; then
    ans+='Pling'
  fi
  if [ $modFive -eq 0 ]; then
    ans+='Plang'
  fi
  if [ $modSeven -eq 0 ]; then
    ans+='Plong'
  fi
  if [ -z $ans ]; then
    ans=$1
  fi
  echo $ans
}

main "$@"
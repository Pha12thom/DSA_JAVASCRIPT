#!/usr/bin/env bash
 make_and_enter() {
 mkdir -p "$1"
 cd "$1"
 touch newfile.txt 
 vi newfile.txt
 i
 echo "hello friends"
 

 
 }


 make_and_enter testfolders
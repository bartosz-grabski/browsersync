#!/bin/bash

cat process.pid | xargs pkill -TERM -P
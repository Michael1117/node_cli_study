#!/usr/bin/env  node
//console.log("Michael node")
const program = require('commander')

//program.version("1.0.0")
program.version(require('./package.json').version)
program.parse(process.argv)
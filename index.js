#!/usr/bin/env  node
//console.log("Michael node")
const program = require('commander')

//program.version("1.0.0")

// 查看版本号
program.version(require('./package.json').version)

// 增加自己的options
program.option('-m --mic', 'a mic cli')
program.option('-d --dest <dest>', 'a destination folder, 例如： -d /src/components' )
program.option('-d --framework <framework>', 'your framework' )

program.on('--help', function() {
    console.log("")
    console.log("Other:")
    console.log("other options~")
})


program.parse(process.argv)

console.log(program.dest)
#!/usr/bin/env  node
//console.log("Michael node")
const program = require('commander')

const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// 查看版本号
program.version(require('./package.json').version)

// 增加自己的options
/* program.option('-m --mic', 'a mic cli')
program.option('-d --dest <dest>', 'a destination folder, 例如： -d /src/components' )
program.option('-d --framework <framework>', 'your framework' )

program.on('--help', function() {
    console.log("")
    console.log("Other:")
    console.log("other options~")
})
 */

 // 帮助和可选信息
 helpOptions();


 // 创建其他指令

 createCommands();

program.parse(process.argv)

//console.log(program.dest)
const program = require('commander');
const { createProjectAction, addComponentAction, addPageAndRoute } = require('./actions')

const createCommands = () => {
    program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action(createProjectAction)

    program
    .command('addcpn <name>')
    .description('add vue component, 例如：mic addcpn HelloWorld -d src/components ')
    .action((name) => {
        addComponentAction(name, program.dest || 'src/components')
    })

    program
    .command("addpage <page>")
    .description('add vue page add router config, 例如：why addpage Home [-d src/pages]')
    .action((page) => {
        addPageAndRoute(page, program.dest || 'src/pages')
    })
}

module.exports = createCommands;
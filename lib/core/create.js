const { requiredOption } = require("commander");

const program = require('commander');

const createCommands = () => {
    program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action((project, others) => {
        console.log(project, others)
    })
}

module.exports = createCommands;
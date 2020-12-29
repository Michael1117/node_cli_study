const { requiredOption } = require("commander")

const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
// callback  -> promisify -> Promise -> async await
const createProjectAction = async (project) => {
    // 1. clone 项目
    /* download().then(res => {

    }).catch(err => { */

        await download(vueRepo, project, {clone: true})

   // })
    // 2. 执行npm install
    // 3. 运行  npm run serve
    // 4. 打开浏览器
}

module.exports = {
    createProjectAction
}
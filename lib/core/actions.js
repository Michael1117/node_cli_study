const { requiredOption } = require("commander");

const { promisify } = require("util");
const download = promisify(require("download-git-repo"));

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
// callback  -> promisify -> Promise -> async await
const createProjectAction = async (project) => {
  console.log("mic helps you create your project");
  // 1. clone 项目
  /* download().then(res => {

    }).catch(err => { */

  await download(vueRepo, project, { clone: true });

  // })
  // 2. 执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await commandSpawn(command, ["install"], { cwd: `./${project}` });
  // 3. 运行  npm run serve
  // 4. 打开浏览器
};

module.exports = {
  createProjectAction,
};

const { requiredOption } = require("commander");

const { promisify } = require("util");
const open = require('open')
const download = promisify(require("download-git-repo"));

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const { compile, writeToFile , createDirSync} = require("../utils/utils")

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
  //await commandSpawn(command, ["run", 'serve'], { cwd: `./${project}` });
  commandSpawn(command, ["run", 'serve'], { cwd: `./${project}` });
  // 4. 打开浏览器
  open("http://localhost:8000/")
};

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1. 有对应的ejs模块
  
  // 2. 编译ejs模板 result
  const result = await compile("vue-component.ejs", {name, lowerName: name.toLowerCase()})
  console.log(result)
  // 3. 将result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  writeToFile(path, result)
  // 4. 放到对应的文件夹中
}

// 添加组件和路由
const addPageAndRoute = async (name, dest) => {
  // 1. 编译ejs模板
  const pageResult = await compile('vue-component.ejs', {name: lowerName: name.toLowerCase()});

  const routeResult = await compile('vue-router.ejs', {name, lowerName: name.toLowerCase()});

  // 3 写入文件
  if (createDirSync(dest)) {
    const targetPagePath = path.resolve(dest, `${name}.vue`);
    const targetRoutePath = path.resolve(dest, 'route.js')

    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRoutePath, routeResult)
  }
}



module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRoute
};

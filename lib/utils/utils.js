const ejs = require('ejs');
const path = require('path')
const fs = require('fs')

//const renderFilePromise = promisify(ejs.renderFile)
const compile = (templateName, data) => {
    const templatePosition = `../templates/${templateName}`;
    const templatePath = path.resolve(__dirname, templatePosition)
    
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, {data}, {}, (err, result) => {
            if(err) {
                console.log(err);
                reject(err)
                return;
            }
            resolve(result)
        })
    })
    //console.log(templatePath)
}

// source/components/category
const createDirSync = (pathName) => {
    if (fs.existsSync(pathName)) {
        return true;
    } else {
       /*  if (fs.existsSync(path.dirname(path))) {
            fs.mkdirSync(path);
        } else {
            fs.existsSync(path.dirname(path.dirname(path))) {

            }
        } */
        if (createDirSync(path.dirname(pathName))) {
            fs.mkdirSync(pathName)
            return true;
        }
    }
}

const writeToFile = (path, result) => {
    // 判断path是否存在  如果不存在， 创建对应的文件夹

    return fs.promises.writeFile(path, content)
}

module.exports = {
    compile,
    writeToFile,
    createDirSync
}
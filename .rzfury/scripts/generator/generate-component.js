const fs = require('fs');
const { fromKebabTo } = require('./helper');

/**
 * @param {string[]} path 
 * @param {string[]} params
 */
module.exports = function generate(path, params = []) {
  const thisMs = Date.now();
  const fileName = path[path.length - 1];
  const fullPath = path.join('/');

  if(fs.existsSync(path)) {
    console.log(`Path "${path}" is already exists!`);
    return;
  }

  let prevPath = './src/components/';
  for(const _path of path) {
    prevPath += _path + '/';

    if(fs.existsSync(prevPath))
      continue;

    fs.mkdirSync(prevPath);
  }

  let pageTemp = fs.readFileSync(__dirname + '/templates/component/comp.tsx_temp').toString();
  pageTemp = pageTemp.replace(/RENAME_THIS/gi, fromKebabTo(fileName, 'pascal'));
  pageTemp = pageTemp.replace(/CSSMODULE_NAME/gi, fileName);

  if(params || !params.includes('--default')) {
    pageTemp = pageTemp.replace(/export\sdefault/gi, 'export');
  }

  fs.writeFileSync(`./src/components/${fullPath}/${fileName}.tsx`, pageTemp);
  fs.copyFileSync(__dirname + '/templates/component/comp.module.css_temp', `./src/components/${fullPath}/${fileName}.module.css`);

  console.log(`CREATED "src/components/${fullPath}.tsx"`);
  console.log(`CREATED "src/components/${fullPath}.module.css"`);
  console.log(`in ${Date.now() - thisMs}ms.`);
}

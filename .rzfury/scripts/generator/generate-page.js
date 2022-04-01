const fs = require('fs');
const { fromKebabTo } = require('./helper');

/**
 * @param {string[]} path 
 * @param {string[]} params
 */
module.exports = function generate(path, params) {
  const thisMs = Date.now();
  const fileName = path[path.length - 1];
  const fullPath = path.join('/');
  const pathOnly = path.filter(p => p !== fileName);

  if(fs.existsSync(path)) {
    console.log(`Path "${path}" is already exists!`);
    return;
  }

  let prevPath = './pages/';
  for(const _path of pathOnly) {
    prevPath += _path + '/';

    if(fs.existsSync(prevPath))
      continue;

    fs.mkdirSync(prevPath);
  }

  let pageTemp = fs.readFileSync(__dirname + '/templates/page.tsx_temp').toString();
  pageTemp = pageTemp.replace(/RENAME_THIS/gi, fromKebabTo(fileName, 'pascal'));

  fs.writeFileSync('./pages/' + fullPath + '.tsx', pageTemp);

  console.log(`CREATED "pages/${fullPath}.tsx"`, `${Date.now() - thisMs}ms.`);
}

const fs = require('fs');

/**
 * @param {string[]} path 
 * @param {string[]} params
 */
module.exports = function generate(path, params = []) {
  const thisMs = Date.now();
  const fileName = path[path.length - 1];
  const fullPath = path.join('/');
  const pathOnly = path.filter(p => p !== fileName);

  if(fs.existsSync(path)) {
    console.log(`Path "${path}" is already exists!`);
    return;
  }

  let prevPath = './pages/api/';
  for(const _path of pathOnly) {
    prevPath += _path + '/';

    if(fs.existsSync(prevPath))
      continue;

    fs.mkdirSync(prevPath);
  }

  fs.copyFileSync(__dirname + '/templates/api.ts_temp', './pages/api/' + fullPath + '.ts');
  console.log(`CREATED "pages/api/${fullPath}.ts"`, `${Date.now() - thisMs}ms.`)
}

const { printFromFile, isKebab } = require('./helper');
const pageGen = require('./generate-page');
const compGen = require('./generate-component');
const apiGen = require('./generate-api');

const app = () => {
  const arg1 = process.argv[2];
  const arg2 = process.argv.slice(3).join(' ');
  const cleanArg2 = arg2.replace(/(\-\-)\w+/g, '').trim();
  const params = arg2.match(/(\-\-)\w+/g);
  const path = cleanArg2.split('/');
  const fileName = path[path.length - 1];

  if(!isKebab(fileName)) {
    printFromFile(__dirname + '/help.txt');
    return;
  }

  switch (arg1) {
    case 'p':
    case 'page':
      pageGen(path);
      break;
    case 'c':
    case 'component':
      compGen(path, params ? params : []);
      break;
    case 'api':
      apiGen(path, params ? params : []);
      break;
    default:
      printFromFile(__dirname + '/help.txt');
      break;
  }
}

app();

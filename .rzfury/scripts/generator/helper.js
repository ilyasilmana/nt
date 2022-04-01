const fs = require('fs');
const kebabCaseRegex = (/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/);

module.exports = {
  /**
   * @param {string} path 
   */
  printFromFile(path) {
    if (fs.existsSync(path)) {
      console.log(fs.readFileSync(path).toString());
    }
  },
  /**
   * @param {string} str
   */
  isKebab(str) {
    return kebabCaseRegex.test(str);
  },
  /**
   * @param {string} _in 
   * @param {'pascal' | 'camel'} _to
   */
  fromKebabTo(_in, _to) {
    const replacer = (text) => text.replace(/-/, "").toUpperCase();
    if (kebabCaseRegex.test(_in)) {
      switch (_to) {
        case 'pascal':
          return _in.replace(/(^\w|-\w)/g, replacer);
        case 'camel':
          return _in.replace(/-\w/g, replacer);
        default:
          return _in;
      }
    }
    return _in;
  }
}
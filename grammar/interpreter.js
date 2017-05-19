const parser = require('./grammar.js');
// const helper = require('./translator.js');

const exec = code => {
  try {
    const r = parser.parse(code);
    return eval(r);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  exec
}

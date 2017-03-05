const transform = (str) => {
  return require('babel-core').transform(str, {
    plugins: ['./src']
  }).code;
};

const code = `import File from './Test'`;
transform(code);

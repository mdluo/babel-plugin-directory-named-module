import { expect } from 'chai'

const transform = str =>
  require('babel-core').transform(str, {
    plugins: ['./src'],
  }).code

describe('import transformer', () => {
  it('1st Works', () => {
    const code = `import first from './src/spec/first'`
    expect(transform(code)).to.equal(`import first from './src/spec/first/first.js';`)
  })
  it('2nd Works', () => {
    const code = `import second from './src/spec/second'`
    expect(transform(code)).to.equal(`import second from './src/spec/second';`)
  })
  it('3rd Works', () => {
    const code = `import third from './src/spec/third'`
    expect(transform(code)).to.equal(`import third from './src/spec/third/third.js';`)
  })
  it('4th Works', () => {
    const code = `import fourth from './src/spec/fourth'`
    expect(transform(code)).to.equal(`import fourth from './src/spec/fourth';`)
  })
})

describe('require transformer', () => {
  it('1st Works', () => {
    const code = `const first = require('./src/spec/first')`
    expect(transform(code)).to.equal(`const first = require('./src/spec/first/first.js');`)
  })
  it('2nd Works', () => {
    const code = `const second = require('./src/spec/second')`
    expect(transform(code)).to.equal(`const second = require('./src/spec/second');`)
  })
  it('3rd Works', () => {
    const code = `const third = require('./src/spec/third')`
    expect(transform(code)).to.equal(`const third = require('./src/spec/third/third.js');`)
  })
  it('4th Works', () => {
    const code = `const fourth = require('./src/spec/fourth')`
    expect(transform(code)).to.equal(`const fourth = require('./src/spec/fourth');`)
  })
})

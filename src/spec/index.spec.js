import { expect } from 'chai'

const transform = str =>
  require('babel-core').transform(str, {
    plugins: ['./src'],
  }).code

describe('Plugin', () => {
  it('1st Works', () => {
    const code = `import first from './src/spec/first'`
    expect(transform(code)).to.equal(`import first from './src/spec/first/first.js';`)
  })
  it('2nd Works', () => {
    const code = `import foo from './src/spec/second'`
    expect(transform(code)).to.equal(`import foo from './src/spec/second';`)
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

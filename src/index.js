import path from 'path'

import transformRequireCall from './transformers/require'
import transformImportCall from './transformers/import'

export const defaultExtensions = ['.js', '.jsx', '.es', '.es6']

function resolvable(p) {
  try {
    return !!require.resolve(path.join(process.cwd(), p)).length
  } catch (e) {
    return false
  }
}

export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression({ node }) {
        transformRequireCall(t, node)
      },
      ImportDeclaration({ node }) {
        transformImportCall(t, node)
      },
    },
  }
}

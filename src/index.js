import path from 'path'

const defaultExtensions = ['.js', '.jsx', '.es', '.es6']

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
      ImportDeclaration({ node }) {
        const soursePath = node.source.value
        const basename = path.basename(soursePath)
        if (!resolvable(soursePath)) {
          for (let i = 0; i < defaultExtensions.length; i++) {
            const newPath = soursePath + path.sep + basename + defaultExtensions[i]
            if (resolvable(newPath)) {
              node.source.value = newPath
            }
          }
        }
      },
    },
  }
}

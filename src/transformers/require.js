import resolve from '../resolve'

export default function transformRequireCall(t, node) {
  if (t.isIdentifier(node.callee, { name: 'require' })) {
    node.arguments[0] = t.stringLiteral(resolve(node.arguments[0].value))
  }
}

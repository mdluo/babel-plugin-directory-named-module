import resolve from '../resolve'

export default function transformImportCall(t, node) {
  node.source = t.stringLiteral(resolve(node.source.value))
}

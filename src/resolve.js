import path from 'path'

import { defaultExtensions } from './index'

export function resolvable(p) {
  try {
    return !!require.resolve(path.join(process.cwd(), p)).length
  } catch (e) {
    return false
  }
}

export default function resolve(soursePath) {
  const basename = path.basename(soursePath)
  if (!resolvable(soursePath)) {
    for (let i = 0; i < defaultExtensions.length; i++) {
      const modulePath = soursePath + path.sep + basename + defaultExtensions[i]
      if (resolvable(modulePath)) {
        return modulePath
      }
    }
  }
  return soursePath
}

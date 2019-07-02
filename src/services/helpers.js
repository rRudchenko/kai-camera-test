// import { withPrefix, navigate } from 'gatsby'

export function isExternal(path) {
  return (
    /^http[s]?:\/\//g.test(path)
    || path.startsWith('mailto:')
    || path.startsWith('tel:')
  )
}

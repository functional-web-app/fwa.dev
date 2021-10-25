let styles = require('./styles')
let fwa = 'The Functional Web App'

module.exports = function layout (props) {
  let { lang, title = '', description, body, path = '' } = props
  title = title ? `${title} | ${fwa}` : fwa
  description = description ? `<meta description="${description}">` : ''

  let isIndex = path === '/'
  let file = isIndex
    ? 'index'
    : path.replace('/', '')
  let backLink = isIndex ? '' : `<a href="/"><h3>The Functional Web App</h3></a>`
  let editLink = path ? `<a href="https://github.com/functional-web-app/fwa.dev/blob/main/src/views/content/${lang}/${file}.md">Edit or translate this page</a>` : ''

  return `<!doctype html>
<html>
<head>
  <title>${title}</title>
  ${description}
  <meta name=viewport content=width=device-width,initial-scale=1>
  <style>${styles(props)}</style>
</head>
<body>
  <main>
    ${backLink}
    ${body}
  </main>
  <footer>
    ${editLink}
  </footer>
</body>
</html>`
}

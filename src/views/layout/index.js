let styles = require('./styles')
let fwa = 'The Functional Web App'

module.exports = function layout (props) {
  let { title = '', description, body, path = '' } = props
  title = title ? `${title} | ${fwa}` : fwa
  description = description ? `<meta description="${description}">` : ''

  let file = path === '/'
    ? 'index'
    : path.replace('/', '')
  let editLink = path ? `<a href="https://github.com/functional-web-app/fwa.dev/blob/main/src/views/md/${file}.md">Edit or translate this page</a>` : ''
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
    ${body}
  </main>
  <footer>
    ${editLink}
  </footer>
</body>
</html>`
}

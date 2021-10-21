let styles = require('./styles')

module.exports = function layout (props) {
  let { title, body, path = '' } = props
  let file = path === '/'
    ? 'index'
    : path.replace('/', '')
  let editLink = path ? `<a href="https://github.com/functional-web-app/fwa.dev/blob/main/src/views/md/${file}.md">Edit or translate this page</a>` : ''
  return `<!doctype html>
<html>
<head>
  <meta name=viewport content=width=device-width,initial-scale=1>
  <title>${title || 'The Functional Web App'}</title>
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

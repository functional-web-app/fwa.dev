let nav = require('./nav')
let styles = require('./styles')

module.exports = function layout (props) {
  return `<!doctype html>
<html>
<head>
  <meta name=viewport content=width=device-width,initial-scale=1>
  <title>${props.title || 'Functional Web App'}</title>
  <style>${styles(props)}</style>
</head>
<body>${nav(props)}<main>${props.body}</main></body>
</html>`
}

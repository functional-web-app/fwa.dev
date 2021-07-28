module.exports = function notFound (path) {
  return {
    code: 404,
    html: `<!doctype html>
<html>
<body><h1>${path} not found!</h1></body>
</html>`
  }
}

module.exports = function fail(err) {
  return {
    code: 500,
    html: `<!doctype html>
<html>
<body><h1>${ err.message }</h1><pre>${ err.stack }</pre></body>
</html>`
  }
}

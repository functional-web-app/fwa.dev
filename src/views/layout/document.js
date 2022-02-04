const Head = require('./head.js')
const Symbols = require('./symbols.js')

module.exports = function wrap (content) {
  return `
  <!DOCTYPE html>
  <html
    lang="en"
    class="bg-primary"
  >
    ${Head()}
    ${Symbols()}
    <body
      class="
        font-custom
      "
    >
    ${ content }
    <script type="module" src="/_static/index.js"></script>
  </body>
</html>
  `
}

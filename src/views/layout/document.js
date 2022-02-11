const Head = require('./head.js')
const Symbols = require('./symbols.js')
const GoogleAnalytics = require('./ga.js')

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
    ${content}
    ${GoogleAnalytics()}
  </body>
</html>
  `
}

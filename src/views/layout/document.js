const Head = require('./head.js')
const Symbols = require('./symbols.js')

module.exports = {
  top: function (state) {
    const { lang = 'en' } = state
    return `
  <!DOCTYPE html>
  <html
    lang="${lang}"
    class="bg-primary"
  >
    ${Head()}
    ${Symbols()}
    <body
      class="
        font-custom
      "
    >

    `
  },
  bottom: `
  </body>
</html>
  `
}

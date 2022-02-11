const Head = require('./head.js')
const Symbols = require('./symbols.js')
const GoogleAnalytics = require('./ga.js')

module.exports = function wrap (content, scriptNonce) {
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
    <script type="module">
    /* inline from public */
(function (){
  const navToggle = document.getElementById('nav-toggle')
  const navUL = document.getElementById('main-nav')

  navToggle.addEventListener('click', () => {
    navUL.classList.toggle('hidden')
    navUL.classList.toggle('mobile-nav-open')
  })

  document.addEventListener('click', (e) => {
    if (!navUL.classList.contains('hidden') && !navToggle.contains(e.target)) {
      navUL.classList.add('hidden')
      navUL.classList.remove('mobile-nav-open')
    }
  })
})()

    </script>
    ${GoogleAnalytics(scriptNonce)}
  </body>
</html>
  `
}

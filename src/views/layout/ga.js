module.exports = function GoogleAnalytics () {
  let env = process.env.NODE_ENV
  let production = 'production'
  let productionId = `G-6LMC9G6LLK`
  let stagingId = `G-9H7H4C703E`

  function snippet (env) {
    return `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${env}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${env}');
    </script>
        `
  }

  return snippet(env == production ? productionId : stagingId)

}

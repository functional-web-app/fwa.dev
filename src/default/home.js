const html = require('@enhance/ssr')()
const fail = require('@architect/views/errors/500')
const { top, bottom } = require('@architect/views/layout/document')
const languages = [ 'en' ]

module.exports = async function handle (request) {
  try {
    const { path } = request
    const lang = languages.includes(path.split('/')[1])
      ? path.split('/')[1]
      : languages[0]

    // TODO: use an actual router for sub-pages
    let page = 'page'
    if (path.split('/')[1] === 'subpage') page = 'subpage'

    return {
      statusCode: 200,
      headers: {
        'content-type': 'text/html'
      },
      body: html`
${top({ lang })}
  <fwa-${page}/>
${bottom}
        `
    }
  }
  catch (e) {
    return fail(e)
  }
}

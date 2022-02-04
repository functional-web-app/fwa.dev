const arc = require('@architect/functions')
const html = require('@enhance/ssr')()
const fail = require('@architect/views/errors/500')
const doc = require('@architect/views/layout/document')

exports.handler = async function fn () {
  try {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'text/html'
      },
      body: doc(html`<fwa-page-how></fwa-page-how>`)
    }
  }
  catch (e) {
    return fail(e)
  }
}

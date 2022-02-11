const arc = require('@architect/functions')
const html = require('@enhance/ssr')()
const fail = require('@architect/views/errors/500')
const doc = require('@architect/views/layout/document')
const nonce = require('@architect/shared/nonce')

exports.handler = arc.http.async(fn)

async function fn () {
  try {
    return {
      html: doc(html`<fwa-page-resources></fwa-page-resources>`, nonce)
    }
  }
  catch (e) {
    return fail(e)
  }
}

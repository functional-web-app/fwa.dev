const arc = require('@architect/functions')
const html = require('@enhance/ssr')()
const fail = require('@architect/views/errors/500')
const doc = require('@architect/views/layout/document')

exports.handler = arc.http.async(fn)

async function fn (req) {
  try {
    return {
      html: doc(html`<fwa-page success="${req.query?.signup === 'true'}"></fwa-page>`)
    }
  }
  catch (e) {
    return fail(e)
  }
}

const arc = require('@architect/functions')
const html = require('@enhance/ssr')()
const fail = require('@architect/views/errors/500')
const doc = require('@architect/views/layout/document')

exports.handler = arc.http.async(fn)

async function fn (req) {
  let headers = {}
  let env = process.env.NODE_ENV || process.env.ARC_ENV
  if (env && (env === 'staging' || env === 'production')) {
    headers['Strict-Transport-Security'] = 'max-age=0'
    headers['X-Content-Type-Options'] = 'nosniff'
    headers['X-Frame-Options'] = 'DENY'
    headers['Content-Security-Policy'] = "default-src 'unsafe-inline' 'self' fonts.googleapis.com fonts.gstatic.com googletagmanager.com; img-src 'self' data:;"
    headers['X-XSS-Protection'] = '1'
    headers['Cache-Control'] = 'max-age=60'
  }
  try {
    return {
      headers,
      html: doc(html`<fwa-page success="${req.query && req.query.signup === 'true'}"></fwa-page>`)
    }
  }
  catch (e) {
    return fail(e)
  }
}

const arc = require('@architect/functions')

async function handler () {
  let env = process.env.ARC_ENV

  if (env === 'production') {
    return {
      headers: {
        'content-type': 'text/plain; charset=utf8'
      },
      body:
`User-agent: *
Disallow: `
    }
  }
  else {
    return {
      headers: {
        'content-type': 'text/plain; charset=utf8'
      },
      body:
`User-agent: *
Disallow: /`
    }
  }
}

exports.handler = arc.http.async(handler)

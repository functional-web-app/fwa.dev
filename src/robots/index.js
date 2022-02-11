const arc = require('@architect/functions')

async function handler () {
  let env = process.env.NODE_ENV || process.env.ARC_ENV
  return { 
    text: `User-agent: *
Disallow: ${ env === 'production'? '' : '/' }`
  }
}

exports.handler = arc.http.async(handler)

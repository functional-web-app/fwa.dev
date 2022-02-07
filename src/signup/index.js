const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = arc.http.async(fn)

async function fn (req) {
  let success = true
  try {
    await data.set({
      table: 'newsletter',
      email: req.body.email,
      ts: new Date(Date.now()).toISOString()
    })
  }
  catch (e) {
    success = false
    console.log(e)
  }
  return {
    location: `/?signup=${success}`
  }
}

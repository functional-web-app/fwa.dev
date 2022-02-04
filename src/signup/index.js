const arc = require('@architect/functions')

exports.handler = arc.http.async(fn)

async function fn (req) {
  let success = true
  try {
    let email = req.body.email
    let data = await arc.tables()
    let result = await data.newsletter.put({
      email,
      ts: new Date(Date.now()).toISOString()
    })
    console.log(result)
  }
  catch (e) {
    success = false
    console.log(e)
  }
  return {
    location: `/?signup=${success}`
  }
}

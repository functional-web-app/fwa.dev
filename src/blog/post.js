let fail = require('@architect/shared/errors/500')
let render = require('@architect/views/render')
let path = require('path')

/** render a blog post */
module.exports = async function post (request) {
  let base = path.join(__dirname, 'node_modules', '@architect', 'views', 'md')
  try {
    let pathToFile = path.join(base, `${request.path.replace('/', '')}.md`)
    return render(pathToFile)
  }
  catch (e) {
    return fail(e)
  }
}

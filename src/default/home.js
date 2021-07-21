let fail = require('@architect/shared/errors/500')
let render = require('@architect/views/render')
let path = require('path')

module.exports = async function handle (request) {
  try {
    let base = path.join(__dirname, 'node_modules', '@architect', 'views', 'md')

    // get the path to the markdown file
    let pathToFile = request.path === '/'
      ? path.join(base, 'index.md')
      : path.join(base, `${request.path.replace('/', '')}.md`)
   
    return render(pathToFile)
  }
  catch (e) {
    return fail(e)
  }
}

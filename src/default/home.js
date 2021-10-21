let fail = require('@architect/views/errors/500')
let render = require('@architect/views/render')
let { join } = require('path')

module.exports = async function handle (request) {
  try {
    let { path } = request
    let base = join(__dirname, 'node_modules', '@architect', 'views', 'md')

    // get the path to the markdown file
    let pathToFile = path === '/'
      ? join(base, 'index.md')
      : join(base, `${path.replace('/', '')}.md`)

    return render({ pathToFile, path })
  }
  catch (e) {
    return fail(e)
  }
}

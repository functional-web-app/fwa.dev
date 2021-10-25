let fail = require('@architect/views/errors/500')
let render = require('@architect/views/render')
let { join } = require('path')
let languages = [ 'en' ]

module.exports = async function handle (request) {
  try {
    let { path } = request
    let base = join(__dirname, 'node_modules', '@architect', 'views', 'content')
    let lang = languages.includes(path.split('/')[1])
      ? path.split('/')[1]
      : languages[0]

    // get the path to the markdown file
    let pathToFile = path === '/' || path === `/${lang}`
      ? join(base, lang, 'index.md')
      : join(base, lang, `${path.replace('/', '')}.md`)

    return render({ lang, pathToFile, path })
  }
  catch (e) {
    return fail(e)
  }
}

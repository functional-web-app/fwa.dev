let layout = require('./layout')
let md = require('markdown-it')({ html: true })
let notFound = require('../shared/errors/404')
let cache = {}

/** render markdown for given path w layout */
module.exports = function render (pathToFile) { 

  // cache html between invocations
  if (!cache[pathToFile]) {

    // early return if not found
    if (fs.existsSync(pathToFile) === false) {
      return notFound(pathToFile) 
    }

    // otherwise warm the cache
    let raw = fs.readFileSync(pathToFile).toString()
    cache[pathToFile] = layout({ body: md.render(raw) })
  }

  // respond w the cached html
  return { html: cache[pathToFile] }
}

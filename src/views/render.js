let layout = require('./layout')
let footnote = require('markdown-it-footnote')
let md = require('markdown-it')().use(footnote)
let notFound = require('../views/errors/404')
let fs = require('fs')

let cache = {}

/** render markdown for given path w layout */
module.exports = function render ({ pathToFile, path }) {

  // cache html between invocations
  if (!cache[pathToFile]) {

    // early return if not found
    if (fs.existsSync(pathToFile) === false) {
      let html = layout({
        body: notFound(path),
        title: '404 / not found',
      })
      return { status: 404, html }
    }

    // otherwise warm the cache
    let raw = fs.readFileSync(pathToFile).toString()
    cache[pathToFile] = layout({
      body: md.render(raw),
      path,
    })
  }

  // respond w the cached html
  return { html: cache[pathToFile] }
}

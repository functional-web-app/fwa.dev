let layout = require('./layout')
let footnote = require('markdown-it-footnote')
let meta = require('markdown-it-meta')
let md = require('markdown-it')({ html: true })
  .use(footnote)
  .use(meta)
let notFound = require('../views/errors/404')
let fs = require('fs')

let cache = {}

/** render markdown for given path w layout */
module.exports = function render ({ lang, pathToFile, path }) {

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
    let body = md.render(raw)
    cache[pathToFile] = layout({
      body,
      lang,
      path,
      ...md.meta,
    })
  }

  // respond w the cached html
  return { html: cache[pathToFile] }
}

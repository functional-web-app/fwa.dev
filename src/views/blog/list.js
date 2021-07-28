let layout = require('../layout')

function cleanup (p) {
  let date = p.substring(0, 10)
  let name = p.substring(10, p.length).replace(/\-/g, ' ').replace('.md', '').trim()
  let first = name[0].toUpperCase()
  let rest = name.slice(1)
  return `${first + rest} (${date})`
}

function post (p) {
  return `<li><a href=/blog/${p.replace('.md', '')}>${cleanup(p)}</a></li>`
}

module.exports = function list (posts) {
  return { html: layout({ body: `<ul>${posts.map(post).join('')}</ul>` }) }
}


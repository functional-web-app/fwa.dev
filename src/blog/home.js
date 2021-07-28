let list = require('@architect/views/blog/list')
let fail = require('@architect/views/errors/500')
let fs = require('fs')
let path = require('path')

/** render the blog post list if no post is in URL */
module.exports = async function home (request) {
  try {
    if (request.params.proxy === '') {
      let base = path.join(__dirname, 'node_modules', '@architect', 'views', 'md')
      let pathToPosts = path.join(base, 'blog')
      let posts = fs.readdirSync(pathToPosts)
      return list(posts)
    }
  }
  catch (e) {
    return fail(e)
  }
}

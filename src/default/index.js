let arc = require('@architect/functions')
let blog = require('./blog-redirect')
let home = require('./home')

exports.handler = arc.http.async(blog, home)

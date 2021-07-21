let arc = require('@architect/functions')
let home = require('./home')
let post = require('./post')

exports.handler = arc.http.async(home, post)

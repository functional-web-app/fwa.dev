const crypto = require('crypto')

module.exports = function nonce () {
  return crypto.randomBytes(16).toString('base64')
}



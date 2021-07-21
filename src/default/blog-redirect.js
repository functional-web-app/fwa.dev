/** fixes api gateway quirk by adding trailing slash */
module.exports = async function blog(request) {
  if (request.path.startsWith('/blog')) {
    return { location: '/blog/' }
  }
}

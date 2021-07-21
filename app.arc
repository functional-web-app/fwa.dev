@app
fwa

@http
# cloud function for rendering the blog
/blog/*
  method any
  src src/blog

# cloud function for rendering other pages
/*
  method any
  src src/default

# cloud function for url shortener

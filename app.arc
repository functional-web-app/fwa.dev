@app
fwa

@http
/robots.txt
  src src/robots
  method get

/how-to-build
  src src/how-to-build
  method get

/before-and-after
  src src/before-and-after
  method get

/resources
  src src/resources
  method get

/*
  src src/default
  method any

/signup
  src src/signup
  method post

@tables
newsletter
  email *String

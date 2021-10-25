module.exports = function styles (/* props */) {
  return `
    body {
      padding: 0 1rem;
      margin: 0.75rem auto;
      max-width: 50rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    blockquote {
      margin: 0;
      background: #eaeaea;
      font-style: italic;
      border-left: 10px solid lightgrey;
      padding-left: 10px;
    }
    nav a {
      margin-right: 10px;
    }

    ol {
      padding: 0 10px;
    }

    li {
      margin: 0;
      padding: 0 10px;
    }

    h2 {
      margin-top: 2.5rem;
    }

    h4 {
      font-weight: 600;
    }

    #num {
      min-width: 1rem;
      display: inline-block;
    }

    #list h3, h4 {
      margin: 0;
    }

    #list h4 {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }

    hr {
      margin: 2rem 0;
    }

  `.replace(/\s+/g, ' ').trim()
}

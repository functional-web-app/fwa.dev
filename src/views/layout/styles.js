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

    h4 {
      font-weight: 600;
    }

  `.replace(/\s+/g, ' ').trim()
}

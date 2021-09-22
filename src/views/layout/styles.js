module.exports = function styles (/* props */) {
  return `
    body {
      padding: 0 1rem;
      margin: 10px auto;
      max-width: 666px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      line-height: 1.6;
    }

    blockquote {
      margin: 0;
      background: #eaeaea;
      font-style: italic;
      border-left: 10px solid lightgrey;
      padding-left: 10px;
    }

    ul {
      padding: 0;
    }

    li {
      margin: 0 10px;
      padding: 0 10px;
      list-style-type: "✔";
    }
    li.anti-pattern {
      margin: 0 12px;
      padding: 0 8px;
      list-style-type: "ⓧ";
    }

    details {
      cursor: pointer;
    }

  `.replace(/\s+/g, ' ').trim()
}

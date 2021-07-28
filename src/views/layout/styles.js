module.exports = function styles (props) {
  return `
    body {
      margin: 10px auto;
      max-width: 666px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      line-height: 1.6;
    }

    ul {
      padding: 0;
    }

    li {
      margin: 0 10px;
      padding: 0 10px;
      list-style-type: "✔";
    }

    details {
      cursor: pointer;
    }

  `.replace(/\s+/g, ' ').trim()
}

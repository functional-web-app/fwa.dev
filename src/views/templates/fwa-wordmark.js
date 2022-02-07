module.exports = function Wordmark (state, html) {
  return html`
<a
  aria-label="FWA"
  href="/"
  class="
    inline-block
    cursor-pointer
    wordmark
    text-light
  "
>
  <svg>
    <use xlink:href="#wordmark"></use>
  </svg>
</a>
  `
}

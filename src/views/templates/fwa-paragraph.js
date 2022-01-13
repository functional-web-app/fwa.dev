module.exports = function Paragraph (state = {}, html) {
  return html`
<p
  class="
    leading4
  "
>
  <slot></slot>
</p>
  `
}

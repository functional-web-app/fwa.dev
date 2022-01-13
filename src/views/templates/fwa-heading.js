module.exports = function Heading (state = {}, html) {
  return html`
<h2
  class="
    font-light
    text2
    text10-lg
    leading1
  "
>
  <slot></slot>
</h2>
  `
}

module.exports = function Heading(state={}, html) {
  return html`
<h2
  class="
    font-light
    text1
    text2-lg
    leading1
  "
>
  <slot></slot>
</h2>
  `
}
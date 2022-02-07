module.exports = function SubHeading (state = {}, html) {
  return html`
<h3
  class="
    font-semibold
    text1
    text5-lg
    leading1
  "
>
  <slot></slot>
</h3>
  `
}

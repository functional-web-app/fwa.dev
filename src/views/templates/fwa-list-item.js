module.exports = function ListItem(state={}, html) {
  return html`
<li
  class="
    mb0
    mb1-lg
    text1-lg
  "
>
  <slot></slot>
</li>
  `
}
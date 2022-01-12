module.exports = function ListItem(state={}, html) {
  return html`
<li
  class="
    mb0
    mb1-lg
    text-2
    text2-lg
    leading4
  "
>
  <slot></slot>
</li>
  `
}
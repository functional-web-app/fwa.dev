module.exports = function Icon(state={}, html) {
  const { href='' } = state
  return html`
<div
  class="
    icon
    icon-lg
  "
>
  <svg>
    <use xlink:href="#${href}"></use>
  </svg>
</div>
  `
}
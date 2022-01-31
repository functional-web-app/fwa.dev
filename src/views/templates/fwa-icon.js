module.exports = function Icon (state = {}, html) {
  const { href = '', sizes = false } = state
  return html`
<div
  class="
    icon
    icon-lg
    ${sizes || ''}
  "
>
  <svg>
    <use xlink:href="#${href}"></use>
  </svg>
</div>
  `
}

module.exports = function Icon (state = {}, html) {
  const { href = '', size = false } = state
  return html`
<div
  class="
    icon
    icon-lg
    ${size ? `icon-${size}` : ''}
  "
>
  <svg>
    <use xlink:href="#${href}"></use>
  </svg>
</div>
  `
}

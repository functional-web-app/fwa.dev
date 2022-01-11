module.exports = function HeadingAccent(state={}, html) {
  return html`
<span class="font-semibold">
  <slot></slot>
</span>
  `
}
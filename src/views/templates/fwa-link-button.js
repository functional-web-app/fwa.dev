module.exports = function LinkButton(state={}, html) {
  const { href='' } = state
  return html`
<a
  class="
    max-width-full
    max-width-370-lg
    flex
    justify-center
    p0
    text-light
    border-current
    border-solid
    border2
    border-hover-light
    bg-hover-light
    text-hover-accent-dark
  "
  href="${href}"
  rel="noopener noreferrer"
  target="_blank"
>
  <slot></slot>
</a>
  `
}
module.exports = function ContainerFull (state = {}, html) {
  return html`
<div
  class="
    max-width-full-lg
    m-auto
  "
>
  <slot></slot>
</div>

  `
}

module.exports = function Header(state={}, html) {
  return html`
<header
  class="
    pt0
    pr0
    pr1-lg
    pl0
    pl1-lg
  "
>
  <slot></slot>
</header>
 `
}
module.exports = function SectionMid(state={}, html) {
  return html`
<section
  class="
    pt11
    pt13-lg
    pr1
    pl1
    pb12
    pb16-lg
    text-light
    bg-dark
  "
>
  <slot></slot>
</section>
  `
}
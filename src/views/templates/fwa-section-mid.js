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
    text-dark
    bg-mid
  "
>
  <slot></slot>
</section>
  `
}
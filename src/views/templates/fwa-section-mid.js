module.exports = function SectionMid(state={}, html) {
  return html`
<section
  class="
    pt3
    pr0
    pl0
    pb3
    text-dark
    bg-mid
  "
>
  <slot></slot>
</section>
  `
}
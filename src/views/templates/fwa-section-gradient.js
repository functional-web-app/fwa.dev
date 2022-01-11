module.exports = function SectionLight(state={}, html) {
  return html`
<section
  class="
    pt3
    pr0
    pl0
    pb4
    text-dark
    bg-gradient
  "
>
  <slot></slot>
</section>
  `
}
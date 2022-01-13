module.exports = function SectionLight (state = {}, html) {
  return html`
<section
  class="
    pt11
    pr0
    pl0
    pb12
    text-light
    bg-gradient
  "
>
  <slot></slot>
</section>
  `
}

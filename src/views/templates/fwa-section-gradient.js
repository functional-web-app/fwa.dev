module.exports = function SectionLight (state = {}, html) {
  return html`
<section
  class="
    pt10
    pr0
    pl0
    pb10
    text-light
    bg-gradient
  "
>
  <slot></slot>
</section>
  `
}

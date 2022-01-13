module.exports = function SectionMid (state = {}, html) {
  return html`
<section
  class="
    pt11
    pt18-lg
    pr1
    pl1
    pb12
    pb18-lg
    text-dark
    bg-mid
  "
>
  <slot></slot>
</section>
  `
}

module.exports = function SectionLight (state = {}, html) {
  return html`
<section
  class="
    pt1
    pt10-lg
    pr1
    pl1
    pb10
    pb18-lg
    text-dark
    bg-light
  "
>
  <slot></slot>
</section>
  `
}

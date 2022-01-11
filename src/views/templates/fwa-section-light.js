module.exports = function SectionLight(state={}, html) {
  return html`
<section
  class="
    pt3
    pr0
    pl0
    pb3
    text-dark
    bg-light
  "
>
  <div
    class="
      max-width-1200-lg
      flex-lg
      items-center
      justify-between
      m-auto
    "
  >
    <slot></slot>
  </div>
</section>
  `
}
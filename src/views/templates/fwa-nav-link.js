module.exports = function ListItem (state = {}, html) {
  const { href } = state
  return html`
<a
  href="${href}"
  class="
    block
    pt-4
    pr-1
    pb-4
    pl-1
    mt-3
    mt-none-lg
    mr0
    mb-2
    mb-none-lg
    ml-3
    ml-none-lg
    font-medium
    text-center
    text-p5
    text-h0
    text-light
    uppercase
    no-underline
    bg-p10
    inline-block-lg
  "
>
  <slot></slot>
</a>
  `
}

module.exports = function Circle() {
  return `
<div
  class="
    inline-flex
    align-center
    justify-center
    circle-size
    pt-6
    pt-4-lg
    border-current
    border-solid
    border2
    radius-100
  "
>
  <slot></slot>
</div>
  `
}
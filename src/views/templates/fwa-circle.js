module.exports = function Circle() {
  return `
<div
  class="
    inline-flex
    items-center
    justify-center
    mr-6
    mr-3
    circle-size
    text-5
    text1-lg
    border-current
    border-solid
    border1
    radius-100
  "
>
  <slot></slot>
</div>
  `
}
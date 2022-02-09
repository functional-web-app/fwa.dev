module.exports = function Flash (state = {}, html) {
  return html`
    <style>
    @keyframes fade {
      from { opacity: 1; }
      to   { opacity: 0; width: 0; height: 0; }
    }
    </style>
<section
  onanimationend="this.style.display = 'none';"
  style="animation: fade 7s;" 
  class="
    bg-mid
    absolute
    t0
    right0
    left0
    ${ state.success? '' : 'hidden' }
    pt13
    pt16-lg
    pr0
    pl0
    pb15
    pb17-lg
    text-dark
  "
>
  <fwa-container-full>
    <h1
      class="
        mb2
        mb3-lg
        font-semibold
        text6
        text-center
        text10-lg
        leading1
        leading0-lg
      "
    >
      Thanks, successfully signed up!
    </h1>
  </fwa-container-full>
</section>`
}

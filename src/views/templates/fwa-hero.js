module.exports = function Hero(state={}, html) {
  return html`
<section
  class="
    pt3
    pr0
    pl0
    pb4
    text-light
    text-center
  "
>
  <h1
    class="
      mb2
      font-semibold
      text2
      text4-lg
      bg-clip-text
      bg-gradient
    "
  >
    Functional </br>
    Web Apps
  </h1>
  <p
    class="
      m-auto
      max-width-275
      max-width-575-lg
      text1-lg
    "
  >
    Functional Web Apps are the best way to build dynamic, full-stack, auto-scaling web applications and APIs.
  </p>
</section>
  `
}
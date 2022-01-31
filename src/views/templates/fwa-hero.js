module.exports = function Hero (state = {}, html) {
  return html`
<section
  class="
    pt13
    pt16-lg
    pr0
    pl0
    pb15
    pb17-lg
    text-light
    text-center
  "
>
  <h1
    class="
      mb4
      mb8-lg
      font-semibold
      text7
      text16-lg
      leading1
      leading0-lg
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
      text-1
      text2-lg
      leading3
    "
  >
    Functional Web Apps are the best way to build dynamic, full-stack, auto-scaling web applications and APIs.
  </p>
</section>
  `
}

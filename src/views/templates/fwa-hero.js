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
  "
>
  <fwa-container-full>
    <h1
      class="
        mb2
        mb3-lg
        font-semibold
        text6
        text12-lg
        leading1
        leading0-lg
      "
    >
      Functional Web App
    </h1>

    <p
      class="
        text-1
        text2-lg
        leading3
      "
    >
      Functional Web App ( FWA ) are an architectural pattern for building web applications and APIs. It empowers developers with the flexibility of dynamic, <fwa-heading-accent>full-stack applications</fwa-heading-accent> paired with the <fwa-heading-accent>ease of scaling</fwa-heading-accent> a static website.
    </p>
  </fwa-container-full>
</section>
  `
}

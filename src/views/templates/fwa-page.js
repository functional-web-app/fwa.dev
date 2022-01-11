module.exports = function HomePage(state={}, html, store) {
  return html`
<fwa-header
  class="
    block
    pt0
    pr0
    pr1-lg
    pl0
    pl1-lg
  "
></fwa-header>
<fwa-hero></fwa-hero>
<fwa-section-light>
  <fwa-heading
    class="
      block
      mb1
      max-width-450-lg
    "
  >
    Today's <fwa-heading-accent>web applications</fwa-heading-accent> are built either by
  </fwa-heading>
  <ol
    class="
      max-width-450-lg
      mb-none-lg
      list-none
    "
  >
    <fwa-list-item>
      <fwa-circle>1</fwa-circle> load-balancing a fleet of servers
    </fwa-list-item>
    <fwa-list-item>
      <fwa-circle>2</fwa-circle> deploying static pages that call out to an assortment of third-party services
    </fwa-list-item>
  </ol>


</fwa-section-light>

<fwa-section-mid>
  <div
    class="
      max-width-1200-lg
      m-auto
    "
  >
    <fwa-heading
      class="
        max-width-650-lg
        block
        mb1
      "
    >
      The trade-offs <fwa-heading-accent>of these two approaches</fwa-heading-accent> are well known
    </fwa-heading>

    <div
      class="
        flex-lg
      "
    >

      <p
        class="
          text-left
          max-width-450-lg
          m-auto
          mb2
        "
      >
        Load-balanced server fleets require deep domain expertise, and are challenging and time-consuming to provision, maintain, and scale.
      </p>

      <p
        class="
          text-left
          max-width-450-lg
          m-auto
          mb2
        "
      >
        Static-centric architectures (like SPAs and the JAMstack) move dynamic functionality behind loading screens, as customer web browsers are not a secure environment for backend business logic.
      </p>

    </div>

      <p
        class="
          m-auto
          font-semibold
        "
      >
        Functional Web App (FWA) are an architectural pattern for building web applications and APIs without these tradeoffs. It offers developers the flexibility of dynamic, full-stack applications paired with the ease of scaling a static website.
      </p>

  </div>
</fwa-section-mid>
  `
}
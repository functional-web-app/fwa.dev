module.exports = function SubPage (state = {}, html) {
  return html`
<fwa-header></fwa-header>

<fwa-hero /></fwa-hero>

<fwa-section-light>
  <div
    class="
      max-width-full-lg
      m-auto
      grid
      gap1
      gap3-lg
      flow-col-lg
      items-center
    "
  >
    <fwa-heading
      class="
        block
        mb1
        max-width-508-lg
      "
    >
      Today's <fwa-heading-accent>web applications</fwa-heading-accent> are built either by
    </fwa-heading>
    <div
      class="
        max-width-508-lg
        grid
        grid-icon-list
        gap-2
        gap1-lg
        mb-none-lg
      "
    >
      <fwa-circle
        class="
          flex
          justify-end
        "
      >
        1
      </fwa-circle>
      <div
        class="
          flex
          justify-start
          text-2
          text2-lg
          leading4
        "
      >
        Load-balancing a fleet of servers
      </div>
      <fwa-circle
        class="
          flex
          justify-end
        "
      >
        2
      </fwa-circle>
      <div
        class="
          flex
          justify-start
          text-2
          text2-lg
          leading4
        "
      >
        Deploying static pages that call out to an assortment of third-party services
      </div>
    </div>
  </div>
</fwa-section-light>

<fwa-section-mid>
  <fwa-container-full>
    <fwa-heading
      class="
        max-width-810-lg
        block
        mb7
      "
    >
      The trade-offs <fwa-heading-accent>of these two approaches</fwa-heading-accent> are well known
    </fwa-heading>

    <div
      class="
        grid
        gap3
        flow-col-lg
      "
    >
      <div>
        <h2
          class="
            mb0
            text-1
            text4-lg
            font-semibold
          "
        >
          Your servers, your problem
        </h2>
        <p
          class="
            text-2
            text0-lg
            text-left
            max-width-450-lg
            mb2
            leading4
          "
        >
          Load-balanced server fleets require deep domain expertise, and are challenging and time-consuming to provision, maintain, and scale.
        </p>
      </div>

      <div>
        <h2
          class="
            mb0
            text-1
            text4-lg
            font-semibold
          "
        >
          Loading spinners
        </h2>
        <p
          class="
            text-2
            text0-lg
            text-left
            max-width-450-lg
            mb2
            leading4
          "
        >
          Static-centric architectures (like SPAs and the JAMstack) move dynamic functionality behind loading screens, as customer web browsers are not a secure environment for backend business logic.
        </p>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-mid>

<fwa-section-gradient>
  <fwa-container-full>
    <h2
      class="
        mb9-lg
        text2
        text10-lg
      "
    >
      Functional <fwa-heading-accent>Web App</fwa-heading-accent>
    </h2>
  </fwa-container-full>

  <div
    class="
      flex
      flex-col
      max-width-full-lg
      m-auto
    "
  >
    <fwa-diagram-mobile class="hidden-lg"></fwa-diagram-mobile>
    <fwa-diagram-desktop class="hidden block-lg"></fwa-diagram-desktop>
  </div>
</fwa-section-gradient>

<fwa-section-mid>
  <fwa-container-full>
    <div
      class="
        grid
        gap5
        flow-col-lg
      "
    >
      <div>
        <h2
          class="
            text2
            text10-lg
            leading2
            mb3
          "
        >
          What makes Functional Web Apps <fwa-heading-accent>different</fwa-heading-accent>
        </h2>

        <p
          class="
            text-2
            text1-lg
            leading4
          "
        >
          The two dominant paradigms for web development today offer a choice between building a highly flexible but difficult to scale server-based architecture, or a far more scalable, but limited, client-centric application.
        </p>

        <p
          class="
            mt2
            text-2
            text1-lg
            leading4
          "
        >
          Functional Web Apps offer a best of both worlds alternative, without the tradeoffs.
        </p>
      </div>

      <div
        class="
          grid
          grid-icon-list
          gap3
        "
      >
        <fwa-icon class="mr-12" href="fundamentally-dynamic"></fwa-icon>
        <div>
          <h2
            class="
              mb-6
              text-1
              text1-lg
              font-semibold
            "
          >
            Fundamentally dynamic
          </h2>

          <p
            class="
              text-2
              text-1-lg
              leading4
            "
          >
            FWAs are fundamentally dynamic, yet also fully abstract cloud infrastructure, enabling developers to more directly invest their time in servicing customer needs.
          </p>
        </div>

        <fwa-icon class="mr-12" href="inactive-and-inert"></fwa-icon>
        <div>
          <h2
            class="
              mb-6
              text-1
              text1-lg
              font-semibold
            "
          >
            Simple to debug
          </h2>

          <p
            class="
              text-2
              text-1-lg
              leading4
            "
          >
            FWA compute processes are inactive and inert by default. By statelessly activating upon invocation, FWAs are scalable, secure, and simple to debug.
          </p>
        </div>

        <fwa-icon class="mr-12" href="easier-to-maintain"></fwa-icon>
        <div>
          <h2
            class="
              mb-6
              text-1
              text1-lg
              font-semibold
            "
          >
            Easier to maintain
          </h2>
          <p
            class="
              text-2
              text-1-lg
              leading4
            "
          >
            FWAs are inherently trivial to update, facilitating rapid change instead of laborious refactors. FWA deployment is measured in seconds, not minutes or hours.
          </p>
        </div>

        <fwa-icon class="mr-12" href="reproducible"></fwa-icon>
        <div>
          <h2
            class="
              mb-6
              text-1
              text1-lg
              font-semibold
            "
          >
            Reproducible
          </h2>
          <p
            class="
              text-2
              text-1-lg
              leading4
            "
          >
            FWA infrastructure is explicitly defined and identically reproducible every time; this results in highly reliable delivery with low total cost of ownership, and faster issue resolution.
          </p>
        </div>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-mid>

<fwa-section-light>
  <fwa-container-full>
    <h2
      class="
        text2
        text10-lg
        mb7
        mb3-lg
      "
    >
      Additional <fwa-heading-accent>resources</fwa-heading-accent>
    </h2>

    <div
      class="
        grid
        gap7
        gap3-lg
        flow-col-lg
      "
    >
      <div>
        <h3
          class="
            mb2
            text0
            font-semibold
            text4-lg
          "
        >
          Coniderations & trade-offs
        </h3>

        <p
          class="
            mb2
            text-2
            text1-lg
            leading4
          "
        >
          Learn more about the considerations & trade-offs to be taken into account when building a Functional Web App.
        </p>

        <a
          class="
            flex
            items-center
            font-semibold
            text0
          "
        >
          <div>Learn more</div>
          <fwa-icon class="ml-1" sizes="icon-30-lg" href="arrow-new-tab"></fwa-icon>
        </a>
      </div>

      <div>
        <h3
          class="
            mb2
            text0
            font-semibold
            text4-lg
          "
        >
          2-tier, 3-tier, & FWA architectures
        </h3>

        <p
          class="
            mb2
            text-2
            text1-lg
            leading4
          "
        >
          A deep-dive comparing 2-tier, 3-tier, & FWA architectures.
        </p>

        <a
          class="
            flex
            items-center
            font-semibold
            text0
          "
        >
          <div>Learn more</div>
          <fwa-icon class="ml-1" sizes="icon-30-lg" href="arrow-new-tab"></fwa-icon>
        </a>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-light>

<fwa-footer></fwa-footer>
  `
}

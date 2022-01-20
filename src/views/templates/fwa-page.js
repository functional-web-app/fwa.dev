module.exports = function HomePage (state = {}, html) {
  return html`
<fwa-header>
  <fwa-container-full>
    <h2
      class="
        text-light
        font-black
        text3
      "
    >
      fwa.dev
    </h2>
  </fwa-container-full>
</fwa-header>

<fwa-hero></fwa-hero>

<fwa-section-light>
  <div
    class="
      max-width-full-lg
      m-auto
      grid
      gap3
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
    <ol
      class="
        max-width-508-lg
        mb-none-lg
        list-none
      "
    >
      <fwa-list-item>
        <fwa-circle>1</fwa-circle> load-balancing a fleet of servers
      </fwa-list-item>
      <fwa-list-item>
        <fwa-circle>2</fwa-circle> <span>deploying static pages that call out to an assortment of third-party services</span></fwa-list-item>
    </ol>
  </div>
</fwa-section-light>

<fwa-section-mid>
  <fwa-container-full>
    <fwa-heading
      class="
        max-width-810-lg
        block
        mb2
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
    <fwa-paragraph class="text1-lg">
      <fwa-heading-accent>Functional Web Apps (FWA)</fwa-heading-accent> are an architectural pattern for building web applications and APIs <fwa-heading-accent>without these tradeoffs</fwa-heading-accent>. It offers developers the flexibility of dynamic, <fwa-heading-accent>full-stack applications</fwa-heading-accent> paired with the <fwa-heading-accent>ease of scaling</fwa-heading-accent> a static website.
    </fwa-paragraph>
  </fwa-container-full>
</fwa-section-gradient>

<fwa-section-light>
  <fwa-container-full>
    <fwa-heading
      class="
        max-width-650-lg
        block
        mb2
      "
    >
      <fwa-heading-accent>The three facets</fwa-heading-accent> </br> of the Functional Web App
    </fwa-heading>

    <ul
      class="
        mt10
        list-none
        grid
        gap3
        flow-col-lg
      "
    >
      <li
        class="
          p1
          bg-mid
        "
      >
      <fwa-icon class="" href="cloud-functions"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Cloud functions
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          Apps are primarily composed of single-responsibility cloud functions
        </p>
      </li>

      <li
        class="
          p1
          bg-mid
        "
      >
        <fwa-icon class="" href="managed-database"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Managed database
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          Persistence is securely maintained with a fully-managed database
        </p>
      </li>

      <li
        class="
          p1
          bg-mid
        "
      >
        <fwa-icon class="" href="deterministic-deployment"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Deterministic deployment
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          Infrastructure dependencies are explicitly defined and deterministically deployed
        </p>
      </li>
    </ul>
  </fwa-container-full>
</fwa-section-light>

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

  <div class="flex flex-col">
    <fwa-diagram-mobile class="hidden-lg"></fwa-diagram-mobile>
    <fwa-diagram-desktop class="hidden block-lg"></fwa-diagram-mobile>
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

      <ul
        class="
          list-none
          grid
          gap3
        "
      >
        <li
          class="
            bg-mid
          "
        >
          <div
            class="
              flex
              items-center
            "
          >
            <fwa-icon class="mr-12" href="gears"></fwa-icon>
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
          </div>

          <p
            class="
              text-2
              text-1-lg
              leading4
            "
          >
            FWAs are fundamentally dynamic, yet also fully abstract cloud infrastructure, enabling developers to more directly invest their time in servicing customer needs.
          </p>
        </li>

        <li
          class="
            bg-mid
          "
        >
          <div
            class="
              flex
              items-center
            "
          >
            <fwa-icon class="mr-12" href="check"></fwa-icon>
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
          </div>

          <p
            class="
              text-2
              text-1-lg
              leading4
            "
          >
            FWA compute processes are inactive and inert by default. By statelessly activating upon invocation, FWAs are scalable, secure, and simple to debug.
          </p>
        </li>

        <li
          class="
            bg-mid
          "
        >
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
        </li>

        <li
          class="
            bg-mid
          "
        >
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
        </li>
      </ul>
    </div>
  </fwa-container-full>
</fwa-section-mid>

<fwa-section-light>
  <fwa-container-full>
    <h2
      class="
        text2
        text10-lg
        mb3
      "
    >
      <fwa-heading-accent>Why build</fwa-heading-accent> a Functional Web App?
    </h2>

    <p
      class="
        max-width-810-lg
        mb3
        mb11-lg
        text-2
        text1-lg
        leading4
      "
    >
      The Functional Web App approach offers unique characteristics that may be desirable for evolving your existing application or building your next:
    </p>

    <ul
      class="
        list-none
        grid
        gap3
        flow-row-lg
        row-2
        col-6-lg
      "
    >
      <li
        class="
          p1
          bg-mid
          col-span-2-lg
        "
      >
        <fwa-icon class="" href="power"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Power and flexibility
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          FWAs combine the power and flexibility of dynamic, full-stack web applications with the ease and simplicity of scaling a static website.
        </p>
      </li>

      <li
        class="
          p1
          bg-mid
          col-span-2-lg
        "
      >
        <fwa-icon class="" href="code-circle"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Code runs in isolation
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          FWA code runs in isolation, ensuring unrelated code is never run in the same process, thereby reducing bug surface area and potential security issues.
        </p>
      </li>

      <li
        class="
          p1
          bg-mid
          col-span-2-lg
        "
      >
        <fwa-icon class="" href="data"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Easier to develop
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          FWAs are easier to develop, maintain, debug, and deliver than traditional dynamic full-stack web applications, giving them a significantly lower overall total cost of ownership.
        </p>
      </li>

      <li
        class="
          p1
          bg-mid
          col-span-2-lg
          col-start-2-lg
        "
      >
        <fwa-icon class="" href="cloud-remove"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Work locally
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          FWAs can run locally and offline without complicated developer environments, improving velocity and reducing time to bug resolution.
        </p>
      </li>

      <li
        class="
          p1
          bg-mid
          col-span-2-lg
        "
      >
        <fwa-icon class="" href="people"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Anyone can build
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          FWAs do not require any specific domain expertise or specialization to build or manage. Anyone with a basic understanding of web development is capable of creating a fully-realized FWA.
        </p>
      </li>
    </ul>
  </fwa-container-full>
</fwa-section-light>

<fwa-section-gradient>
  <fwa-container-full>
    <div
      class="
        grid
        gap5
        col-2
      "
    >
      <div>
        <h2
          class="
            text2
            text10-lg
            mb3
          "
        >
          Get <fwa-heading-accent>involved</fwa-heading-accent>
        </h2>

        <p
          class="
            text-2
            text1-lg
            leading4
          "
        >
          Any choice in application architecture has trade-offs and considerations
        </p>
        <p
          class="
            mt2
            text-2
            text1-lg
            leading4
          "
        >
          Learn more about the considerations & trade-offs to be taken into account when building a Functional Web App
        </p>
      </div>

      <div
        class="
          grid
          gap1
        "
      >
        <fwa-link-button
          href="https://fwa.dev/examples"
        >
          Try it out
        </fwa-link-button>

        <fwa-link-button
          href="https://discord.gg/jtb2CK5E"
        >
          Join Discord
        </fwa-link-button>

        <fwa-link-button
          href="https://fwa.dev/"
        >
          Join the mailing list
        </fwa-link-button>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-gradient>

<fwa-section-light>
  <fwa-container-full>
    <h2
      class="
        text2
        text10-lg
        mb3
      "
    >
      Additional <fwa-heading-accent>resources</fwa-heading-accent>
    </h2>

    <div
      class="
        grid
        gap3
        flow-col-lg
      "
    >
      <div>
        <h3
          class="
            mb2
            text4
          "
        >
          Coniderations & trade-offs
        </h3>

        <p
          class="
            mb2
            leading4
          "
        >
          Learn more about the considerations & trade-offs to be taken into account when building a Functional Web App.
        </p>

        <a
          class="
            block
            font-semibold
            text0
          "
        >
          Learn more
        </a>
      </div>

      <div>
        <h3
          class="
            mb2
            text4
          "
        >
          2-tier, 3-tier, & FWA architectures
        </h3>

        <p
          class="
            mb2
            leading4
          "
        >
          A deep-dive comparing 2-tier, 3-tier, & FWA architectures.
        </p>

        <a
          class="
            block
            font-semibold
            text0
          "
        >
          Learn more
        </a>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-light>

<fwa-section-dark>
  <fwa-container-full>
    <div
      class="
        grid
        gap3
        col-2
      "
    >
      <div>
        <h1
          class="
            text7
            font-black
          "
        >
          fwa.dev
        </h1>
      </div>

      <div
        class="
          max-width-575-lg
        "
      >
        <h2
            class="
              text2
              text7-lg
              mb3
            "
          >
          <fwa-heading-accent>Acknowledgments</fwa-heading-accent>
        </h2>

        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          Written by Brian LeRoux & Ryan Block from Begin, with help from Frances Berriman, Kristofer Joseph, James Lindenbaum, & Dana Oshiro
        </p>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-dark>
  `
}

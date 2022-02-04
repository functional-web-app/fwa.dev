module.exports = function HomePage (state = {}, html) {
  return html`
<fwa-nav></fwa-nav>

<fwa-section-light>
  <fwa-container-full>
    <fwa-heading
      class="
        max-width-650-lg
        block
      "
    >
      Resources
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
          grid
          grid-col
          p4
          bg-mid
        "
      >
        <fwa-icon class="mb1 mb3-lg" sizes="icon-41 icon-58-lg" href="cloud-functions"></fwa-icon>
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
          grid
          grid-col
          p4
          bg-mid
        "
      >
        <fwa-icon class="mb1 mb3-lg" sizes="icon-41 icon-58-lg" href="managed-database"></fwa-icon>
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
          grid
          grid-col
          p4
          bg-mid
        "
      >
        <fwa-icon class="mb1 mb3-lg" sizes="icon-41 icon-58-lg" href="deterministic-deployment"></fwa-icon>
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
          p4
          bg-mid
          col-span-2-lg
          grid
          grid-col
        "
      >
        <fwa-icon class="mb1" href="power-and-flexibility"></fwa-icon>
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
          p4
          bg-mid
          col-span-2-lg
          grid
          grid-col
        "
      >
        <fwa-icon class="mb1" href="code-runs-in-isolation"></fwa-icon>
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
          p4
          bg-mid
          col-span-2-lg
          grid
          grid-col
        "
      >
        <fwa-icon class="mb1" href="easier-to-develop"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Focus on your code
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
          p4
          col-span-2-lg
          col-start-2-lg
          bg-mid
          grid
          grid-col
        "
      >
        <fwa-icon class="mb1" href="run-locally-and-offline"></fwa-icon>
        <h2
          class="
            mb-6
            text-1
            text1-lg
            font-semibold
          "
        >
          Reliable and reproducable
        </h2>
        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          FWAs logical architecture is identical to the deployed physical architecture without complicated developer environments, improving velocity and reducing time to bug resolution.
        </p>
      </li>

      <li
        class="
          p4
          bg-mid
          col-span-2-lg
          grid
          grid-col
        "
      >
        <fwa-icon class="mb1" href="specific-expertise"></fwa-icon>
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
        pt12-lg
        pb12-lg
        grid
        gap5
        gap17-lg
        col-2-lg
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

<fwa-footer></fwa-footer>
  `
}

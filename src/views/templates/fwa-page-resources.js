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

    <h3>Articles</h3>
    <ul>
      <li><a href="https://www.bbc.co.uk/blogs/internet/entries/41db1cb0-8948-40a9-b2be-22c9494078f6">BBC</a></li>
      <li><a href="https://medium.com/lego-engineering/accelerating-with-serverless-625da076964b">Lego</a></li>
      <li><a href="https://siliconangle.com/2017/08/15/a-cloud-guru-uses-lambda-and-api-gateway-to-build-serverless-company-awssummit">A Cloud Guru</a></li>
      <li><a href="https://aws.amazon.com/solutions/case-studies/bustle">Bustle</a></li>
    </ul>

    <h3>Vendors</h3>
    <ul>
      <li><a href="https://aws.amazon.com">AWS</a></li>
      <li><a href="https://azure.microsoft.com">Azure</a></li>
      <li><a href="https://begin.com">Begin</a></li>
      <li><a href="https://deno.com/deploy">Deno Deploy</a></li>
      <li><a href="https://fastly.com">Fastly</a></li>
      <li><a href="https://cloud.google.com/functions">GCP</a></li>
      <li><a href="https://www.cloudflare.com">Cloudflare</a></li>
      <li><a href="https://fauna.com">FaunaDB</a></li>
      <li><a href="https://www.planetscale.com">PlanetscaleDB</a></li>
    </ul>

    <h3>Open source</h3>
    <ul>
      <li><a href="https://arc.codes">Architect</a></li>
      <li><a href="https://github.com/Azure/bicep">Bicep</a></li>
      <li><a href="https://aws.amazon.com/serverless/sam">SAM</a></li>
      <li><a href="https://www.serverless.com/open-source">Serverless</a></li>
      <li><a href="https://www.terraform.io">Terraform</a></li>
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

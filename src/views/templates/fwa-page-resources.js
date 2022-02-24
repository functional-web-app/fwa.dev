module.exports = function HomePage (state = {}, html) {
  return html`
<fwa-nav></fwa-nav>

<fwa-section-light>
  <fwa-container-full>
    <fwa-heading
      class="
        block
        max-width-650-lg
        mb6
      "
    >
      Resources
    </fwa-heading>

    <fwa-sub-heading class="block mb1">
      Articles
    </fwa-sub-heading>
    <ul class="mb4 leading2 list-none">
      <li><a href="https://www.bbc.co.uk/blogs/internet/entries/41db1cb0-8948-40a9-b2be-22c9494078f6">Optimising serverless for BBC Online</a> - BBC</li>
      <li><a href="https://medium.com/lego-engineering/accelerating-with-serverless-625da076964b">Accelerating with Serverless!</a> - Lego</li>
      <li><a href="https://siliconangle.com/2017/08/15/a-cloud-guru-uses-lambda-and-api-gateway-to-build-serverless-company-awssummit">A Cloud Guru uses Lambda and API Gateway to build serverless company</a> - A Cloud Guru</li>
      <li><a href="https://aws.amazon.com/solutions/case-studies/bustle">Bustle Case Study</a> - Bustle</li>
    </ul>

    <fwa-sub-heading class="block mb1">
      Vendors
    </fwa-sub-heading>
    <ul class="mb4 leading2 list-none">
      <li><a href="https://aws.amazon.com">AWS</a></li>
      <li><a href="https://azure.microsoft.com">Azure</a></li>
      <li><a href="https://begin.com">Begin</a></li>
      <li><a href="https://www.cloudflare.com">Cloudflare</a></li>
      <li><a href="https://deno.com/deploy">Deno Deploy</a></li>
      <li><a href="https://fastly.com">Fastly</a></li>
      <li><a href="https://fauna.com">FaunaDB</a></li>
      <li><a href="https://cloud.google.com/functions">GCP</a></li>
      <li><a href="https://www.mongodb.com/">MongoDB</a></li>
      <li><a href="https://www.planetscale.com">PlanetscaleDB</a></li>
      <li><a href="https://redis.io/">Redis</a></li>
    </ul>

    <fwa-sub-heading class="block mb1">
      Open source
    </fwa-sub-heading>
    <ul class="mb4 leading2 list-none">
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
          Something <fwa-heading-accent>missing?</fwa-heading-accent>
        </h2>

        <p
          class="
            mt2
            text-2
            text1-lg
            leading4
          "
        >
          Send a PR or share your thoughts on Twitter
        </p>
      </div>

      <div
        class="
          grid
          gap1
        "
      >
        <fwa-link-button
          href="https://github.com/functional-web-app"
        >
         Fork on Github
        </fwa-link-button>


        <fwa-link-button href="https://twitter.com/intent/tweet?button_hashtag=FunctionalWebApp&ref_src=twsrc%5Etfw">Tweet about #FWA</fwa-link-button>

      </div>
    </div>
  </fwa-container-full>
</fwa-section-gradient>

<fwa-footer></fwa-footer>
  `
}

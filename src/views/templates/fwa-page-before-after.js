module.exports = function HomePage (state = {}, html) {
  return html`
<fwa-nav></fwa-nav>

<fwa-section-gradient>
  <fwa-container-full>
    <fwa-heading class="max-width-650-lg block">Before &amp; after</fwa-heading>

    <p class="mt3 text-2 text1-lg leading4">Contrasting proven architecture patterns, and their tradeoffs, to the Functional Web App.</p>
  </fwa-container-full>
</fwa-section-gradient>
<fwa-section-light>
  <fwa-container-full>
    <fwa-sub-heading class="block mb3">
      Two-tier vs three tier
    </fwa-sub-heading>

    <p class="mb3 text-2 text1-lg leading4">Early computers were really expensive so we shared them, in the era of time-sharing many programmers would work from a personal terminal client talking to a server, hence the term <em>client/server</em>. Two-tier architecture is still pervasive in many systems today, notably, client/server two-tier architectures would influence the design for the web itself by Tim Berners Lee. </p>

    <p class="mb3 text-2 text1-lg leading4">Another technique is to further separate concerns into three tiers. This is often called MVC for model/view/controller. In a three-tier architecture the presentation logic is separated from the business application logic which itself is separated from the data access layer (or persistence layer). In this way, the UI can change independently of the business domain which tends to change less often. The data access layer hides the implementation details of the database, and caching, from the application layer also enabling it to independently scale with time.</p>

    <fwa-sub-heading class="block mb3">
      Logical architecture vs physical architecture
    </fwa-sub-heading>
    <p class="mb6 text-2 text1-lg leading4">Logical architecture is the shape of the system source code. Physical architecture is the shape of the cloud infrastructure running the source code. The distinction is authortime vs runtime. The ideal would be there is no distinction between the code we author and the code that runs. This is not the case with server centric MVC applications on the cloud. In order to achieve high availability, and remain fault tolerant, at a minimum, the logical architecture of a traditional server based application runs on three physical web servers, behind a load balancer, which itself is ideally behind a CDN, all talking to one or more database servers. Sometimes the physical infrastructure definition lives separately from the code which is a mistake because it ultimately means the system is not consistently reproducible, which makes bug resolution extremely slow at best, and impossible at worst. Today most MVC systems have evolved to define infrastructure alongside the code that depends on it (often called Infrastructure as Code or IaC) but regardless the physical architecture and the logical architecture are often at odds sacificing efficiency (server capacity utilization) for availablity.</p>

    <fwa-sub-heading class="block mb3">
      JAMstack architecture
    </fwa-sub-heading>
    <p class="mb6 text-2 text1-lg leading4">One way to deal with three-tier complexity is to return to a two-tier architecture. JAMstack is a modern “thick client” version of two-tier architecture. Pre-rendered markup for the presentation layer, and browser JavaScript for business logic make up the client. APIs act as the server. Like all architectures JAMstack comes with tradeoffs. Dynamic data and personalization functionality will be trapped behind a loading spinner instead of being immediately available because the application logic relies on the browser client JavaScript. Another issue is that most implementations of the JAMstack physical architecture fall prey to the same mistake made in the early days of MVC on the cloud. Even if the application logic is immutably deployed none of the API service infrastructure is determinstically reproducible. The JAMstack physical architecture relys on outsourcing to third party API providers for dynamic functionality. As a result, key infrastructure becomes spread across services making deterministic deployment, and governance an error prone manual process.</p>

    <fwa-sub-heading class="block mb3">
      FWA architecture
    </fwa-sub-heading>
    <p class="mt3 text-2 text1-lg leading4">A different way to solve all this manual complexity is to move up the cloud stack. A Functional Web App (FWA) is authored completely as single-responsibility cloud functions that can render HTML-first dynamically, incorporating the full-stack such as a managed database. The FWA moves presentation and application logic into the backend with pure cloud functions. These cloud functions talk to a managed database in the same network. The application is deterministically deployed with Infrastructure as Code to guarantee the <em>entire app</em> is always completely reproducible to any version at any time. The resulting logical architecture of an FWA is identical to the physical architecture eliminating many delivery and maintenance headaches. The code you write is the same as the code that is deployed achieving high availability with perfect 100% utilization.</p>

  </fwa-container-full>
</fwa-section-light>

<fwa-footer></fwa-footer>
  `
}

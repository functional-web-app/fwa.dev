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
     Before &amp; after
    </fwa-heading>

    <p class="mt3 text-2 text1-lg leading4">In the early days of compute, many systems were two-tier architectures. Also called client/server. Early computers were really expensive so we shared them. In the era of time-sharing many programmers would work from a personal terminal client talking to a single server hence the term client/server. Two-tier architecture is still pervasive in many systems today. Two-tier architectures would influence the design for the web itself by Tim Berners Lee. </p>

    <p class="mt3 text-2 text1-lg leading4">Another technique is to further separate concerns into three tiers. This is often called MVC for model/view/controller. In a three-tier architecture the presentation logic is separated from the business application logic which itself is separated from the data access layer (or persistence layer). In this way, the UI can change independently of the business domain which tends to change less often. The data access layer hides the implementation details of the database, and caching, from the application layer also enabling it to independently scale with time.</p>

    <p class="mt3 text-2 text1-lg leading4">The logical architecture of a system is the authortime composition of the source code. Ruby on Rails is probably one of the crispest implementation of MVC logical architecture. ActiveRecord is Model code. ActionView is View code. ActionController is controller logic which composes view code with model code. But while Rails boasts a very clean logical architecture it unfortunately never translated cleanly to the ultimate <em>physical architecture</em> running the application code.</p>

    <h2 class="mt3">Logical architecture vs physical architecture</h2>
    <p class="mt3 text-2 text1-lg leading4">Logical architecture is the shape of the system source code. Physical architecture is the shape of the compute infrastructure running the source code. The distinction is authortime vs runtime. The ideal would be there is no distinction between the code we author and the code that runs. This definitely was not the case in the early days of running MVC applications on the cloud. In order to meet demand and remain fault tolerant at a minimum the logical architecture runs on three physical web servers, behind a load balancer, which itself is ideally behind a CDN, all talking to a database server and, likely a caching server. Often the infrastructure definition would live separate from the code. This was a mistake because ultimately means the system isn’t easily and consistently reproducible which makes bug resolution extremely slow at best and impossible at worst. Today most MVC systems have evolved to define infrastructure alongside the code that depends on it (often called Infra-as-Code or IaC). </p>

  <h2 class="mt3">JAMstack architecture</h2>
  <p class="mt3 text-2 text1-lg leading4">One way to deal with all this complexity is to return to a two-tier architecture. JAMstack is a modern “thick client” version of two tier architecture. Pre-rendered markup for the presentation layer, and JavaScript for application logic make up the client. APIs act as the server. Like all architectures, JAMstack comes with tradeoffs. Dynamic data and functionality is always behind a loading spinner instead of being immediately available because the application logic relies on the browser client JavaScript. Another issue is that most implementations of the JAMstack physical architecture fall prey to the same mistake made in the early days of MVC on the cloud. Even if the application logic is immutably deployed none of the API service infrastructure is determinstically reproducible. The JAMstack physical architecture relys on outsource to specialist third party API providers for dynamic functionality. Key infrastructure becomes spread across services making deployment and governance more complex.  


  <h2 class="mt3">FWA architecture</h2>
  <p class="mt3 text-2 text1-lg leading4">A different way to solve this is to move up the cloud stack. A Functional Web App (FWA) is authored completely as cloud functions that can render HTML-first dynamically, incorporating the full-stack such as a managed database. The FWA moves presentation and application logic into the backend into cloud functions. These cloud functions talk to a managed database in the same network. The application is deployed declaratively with Infra-as-Code to guarantee the <em>entire app</em> is always completely reproducible to any version at any time. The logical architecture of an FWA is identical to the physical architecture eliminating many delivery and maintenance headaches. The code you write is the same as the code that is deployed.</p>

    <p class="mt3 text-2 text1-lg leading4">In an FWA everything is behind a CDN. Static assets remain static. The biggest difference: application logic happens at runtime, not build time, in a trusted compute process so dynamic content can be rendered immediately. Browser client JavaScript is recommended to be progressively enhancing HTML-first behavior for the best web consumer experience.</p> 

  </fwa-container-full>
</fwa-section-light>

<fwa-section-gradient>
</fwa-section-gradient>

<fwa-footer></fwa-footer>
  `
}

module.exports = function HomePage (state = {}, html) {
  return html`
<fwa-nav></fwa-nav>

<fwa-section-gradient>
  <fwa-container-full>
    <fwa-heading class="max-width-650-lg block">How to build</fwa-heading>

    <p class="mt3 text-2 text1-lg leading4">An FWA is composed of <strong>cloud functions</strong>, talking to a <strong>managed database</strong>, that are <strong>deterministically deployed</strong>.</p>
  </fwa-container-full>
</fwa-section-gradient>

<fwa-section-light>
  <fwa-container-full>
    <fwa-heading class="mt4 max-width-650-lg block" id="cloud-functions">Cloud functions</fwa-heading>

    <p class="mt3 text-2 text1-lg leading4">Dynamic web applications require a trusted compute process<a id="fnref1" href="#fn1">[1]</a> to execute business logic. Cloud functions<a id="fnref2" href="#fn2">[2]</a> are the purest unit of encapsulation for stateless, auto-scaling trusted compute. Each time a Functional Web App endpoint is requested, or background task is invoked, a discretely isolated, single-responsibility cloud function spins up, providing safe, secure, trusted compute process. Each process executes in a secure sandbox totally isolated from noisy (and nosy) concurrent neighbor processes. Because of their size, statelessness, and isolation, cloud functions have inherently high concurrency, enabling FWAs to achieve the horizontal scalability necessary to meet any level of demand without developer intervention.</p>

    <p class="mt3 text-2 text1-lg leading4">The physical architecture of an FWA is identical to the logical architecture where everything is modeled as single-responsibility functions. The function source being authored is the literal cloud function that is deployed. This results in a more far more straightforward mental model for debugging and maintenance. In the FWA developer experience, errors trace to specific known cloud functions, each with its own isolated logs. Cloud functions can also be pure, always returning the same response from the same set of arguments. This means cloud functions are referentially transparent: each is trivial to replace with another that meets the same contract. FWAs enable web developers to author functions in any mainstream programming language, trivially upgrading, moving, or removing them at any time.</p>

    <a id="managed-database">
    <fwa-heading class="mt4 max-width-650-lg block">Managed database</fwa-heading>
    </a>
    <p class="mt3 text-2 text1-lg leading4">Dynamic web applications require a primary database. Traditionally, databases are often the most complicated part of an application to manage, and are an ongoing challenge to scale and update throughout their service life. It is the business of a managed database provider to keep your database fast, stable, and secure. A managed database frees FWA developers to create and maintain the business logic for reading and writing data, outsourcing mundane and complicated database administration tasks to a specialist vendor.</p>

    <p class="mt3 text-2 text1-lg leading4">Functional Web Apps should be able to rely on their persistence layer to automatically scale up (and down) to meet demand in real-time, to never require scheduled maintenance for updates. A managed database provider is responsible of provisioning, monitoring, security patching, and running regular backups. Functional Web Apps expect managed databases to transparently auto-scale, meaning application code does not require special logic for scaling concerns. Database performance is always crucial, so a FWA's primary managed database should meet any level of demand, no matter how much data is stored, or how many clients are trying to access it, while retaining low-latency performance.</p>

    <fwa-heading class="mt4 max-width-650-lg block" id="deterministic-deployment">Deterministic deployment</fwa-heading>

    <p class="mt3 text-2 text1-lg leading4">Cloud infrastructure<a id="fnref3" href="#fn3">[3]</a> is an application dependency. As with source code dependencies, applications should explicitly define cloud infra dependencies to ensure safe, reliable software delivery and operation. Functional Web Apps achieve deterministic deployment by explicitly defining cloud infrastructure dependencies in version control alongside the code that depends on it. This is often called Infrastructure-as-Code (IaC). By versioning cloud infrastructure, FWAs gain a consistent history that can be reliably deployed. Keeping infrastructure in version control also means an immutable audit trail of every change that made to the application environment. </p>

    <p class="mt3 text-2 text1-lg leading4">In dynamic web applications, environment drift – differences between development and production environments – make reproducing and fixing bugs difficult and time-consuming. Similarly, defining cloud infrastructure by hand in various cloud vendor web consoles introduces serious reliability and maintainability issues. To ensure a fully deterministic and reproducible application environment, store all the instructions necessary for provisioning, hosting, and delivering a Functional Web App in the source repository. This ensures FWAs reproduce precisely as intended every single time. </p>


    <ol style="border-top:1px solid black;" class="ml3 mt2 pt2">
    <li id="fn1" class="mb3"><p>A trusted compute process is an execution environment that you fully control and own. For example: an environment in which a secret key can reside. By this measure, a server or cloud function executes your business logic in a trusted compute process, but a user's web browser does not execute your business logic in a trusted compute process. <a href="#fnref1" class="">↩︎</a></p></li>
    <li id="fn2" class="mb3"><p>Today there exists numerous cloud function vendors; currently FWAs most often rely on AWS Lambda <a href="#fnref2" class="">↩︎</a></p></li>

    <li id="fn3" class="mb3"><p>Cloud infrastructure refers to the various services and systems that compose a cloud-hosted app. These may range from cloud functions and managed databases to API gateways, identity / access management services, event buses, and other systems working together to ensure an app's operation. <a href="#fnref3" class="">↩︎</a></p></li>
  </ol>
  </fwa-container-full>
</fwa-section-light>

<fwa-footer></fwa-footer>
  `
}

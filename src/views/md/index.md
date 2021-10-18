# Functional Web App

> An architectural pattern for web devs building dynamic full-stack web apps and APIs

Today many dynamic web applications are built by either load balancing a fleet of servers or deploying a completely static app backed by a fleet of third-party services. 

These approaches come with tradeoffs. Load balancing fleets of web servers is challenging to provision, maintain and scale. Static-centric architectures, like the SPAs and JAMstack, move dynamic functionality behind loading spinners and skeleton screens because code running in a web browser cannot guarantee a secure process for business logic.

The Functional Web App is a different way to build dynamic full-stack web applications and APIs without these tradeoffs.

## The three facets of the Functional Web App

1. Backend business logic is executed by single-responsibility <a href=#cloud-functions>cloud functions</a>
2. Persistence is maintained with a <a href=#managed-database>managed database</a>
3. Explicitly defined infrastructure dependencies to guarantee <a href=#deterministic-deployment>deterministic deployment</a>

<h3 id=cloud-functions>Cloud Functions</h3>

Dynamic web applications require a trusted compute process. The compute process should be stateless so it can scale horizontally to meet any level of demand. Each process should execute in a completely isolated sandbox secure from noisy or nosy, concurrent neighbor processes. Dynamic functionality requires a trusted process for accessing sensitive API keys and the primary application database. The process should be least-privilege with only the permissions it needs and nothing more. A cloud function is the perfect encapsulation unit for a stateless, secure, and auto-scaling compute process. Taken to the logical conclusion, cloud functions become single-responsibility, wherein each function is a tiny slice of unique value—a perfectly isolated, discreet, and unique expression of required essential complexity.

Cloud functions can be pure: always returning the same response from the same set of arguments. Purity means cloud functions support referential transparency: any cloud function is trivial to replace with another function that meets the same contract. Web developers can author cloud functions in any mainstream programming language, trivially upgrading or removing them at any time.

The Functional Web App physical architecture enjoys perfect symmetry with its logical architecture. With cloud functions, the code we author is identical to the code that gets deployed—this symmetry results in a more straightforward debugging and maintenance developer experience.

Dynamic content needs to be immediately available and interactive to web consumers. Cloud functions provide the trusted context to render HTML-first and progressively enhance for specialized client-side interactivity. The FWA can be made interactive to the largest possible audience immediately without waiting for client JS to load, parse and, finally render the user interface. Providing the fastest contentful "paint"and avoiding layout shifts altogether. Forms and links are instantly functional, bringing first-input-delay near zero.  This approach also creates a better experience for disabled web consumers on devices without a visual interface. Progressive enhancement is ultimately the most resilient rendering technique for all web consumers because even when client-side JavaScript occasionally fails, the application will continue to function.


<h3 id=managed-database>Managed Database</h3>

Dynamic web applications require a primary database. Databases are complicated to provision, costly to monitor, challenging to scale and update. The sole focus of a managed database provider is to keep your database stable and secure.

A managed database takes care of provisioning, monitoring, security patching, and running regular backups. Modern managed databases are transparently auto-scaling, so application code does not require special logic for sharding concerns. Database performance is always crucial, so most managed databases can meet any level of demand, no matter how much data is stored or how many clients are trying to access it, while retaining low-latency performance.

A managed database frees developers to create and maintain the business logic for reading and writing data, outsourcing the mundane and complicated database administration tasks to a specialist vendor.

<h3 id=deterministic-deployment>Deterministic Deployment</h3>

Cloud infrastructure is a code dependency, and we always want to make sure dependencies are explicitly defined. Differences between development and production environments make reproducing and fixing bugs very difficult.

Deterministic deployment is achieved by explicitly defining infrastructure dependencies in version control alongside the code that depends on it. By versioning infrastructure, we gain an explicit history that can be deployed consistently and reliably. Keeping infrastructure in version control also means an immutable audit trail of every change that goes into the environment.

Instead of clicking around a web console to build your infrastructure by hand, hoping everything comes out just right, all the instructions are stored in the source repository. This ensures the app reproduces precisely the way you want every single time.



# Functional Web App

> An architectural pattern for web devs building dynamic full-stack web apps and APIs

Today many dynamic web applications are built by either load balancing a fleet of servers or deploying a completely static app backed by a fleet of third-party services. 

These approaches come with tradeoffs. Load balancing fleets of web servers is challenging to provision, maintain and scale. Static-centric architectures, like the SPAs and JAMstack, move dynamic functionality behind loading spinners and skeleton screens because code running in a web browser cannot guarantee a secure process for business logic.

The Functional Web App is a different way to build dynamic full-stack web applications and APIs without these tradeoffs.

The three facets of the Functional Web App

1. Backend business logic is executed by single-responsibility <a href=/cloud-functions>cloud functions</a>
2. Persistence is maintained with a <a href=/managed-database>managed database</a>
3. Explicitly defined infrastructure dependencies to guarantee <a href=/deterministic-deployment>deterministic deployment</a>


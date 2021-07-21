# Why build an FWA?

Traditional web servers are notoriously difficult to scale, so it is common to pre-render HTML and fetch dynamic data after a webpage initially loads. However, pre-rendering has two significant drawbacks. First, pre-rendering HTML grows slower as the app grows in size. Secondly, without a backend, any dynamic end-user functionality will always be waiting behind a spinner. Developers are frustrated by slow builds, and end-users suffer increasingly poor experiences waiting for content to load. These compromises for performance are no longer necessary.

FWAs allow front-end developers to write their apps without worrying about awkward build pipelines or gluing a bunch of third-party code. FWAs are full-stack, deploy reliably, autoscale to meet demand and, following recommended practices, will deliver the best web consumer experience by default.

## FWA benefits

- Focus: on pure business logic without complexity introduced by vendor boilerplate
- Full-stack: build with everything you need in one place without brittle third party complexity. database, queues, events, cron, etc.
- Reliability: pure functions are deterministic and and cloud functions recommended to be deployed utilizing Infra as Code solution ensuring safe and predictable deployments
- A11y: HTML first and progressively enhanced end-user experience

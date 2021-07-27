# Why build an FWA?

Traditional web servers are notoriously difficult to scale, so it is increasingly common to pre-render HTML and fetch dynamic data after a webpage initially loads. However, pre-rendering has two significant drawbacks. First, pre-rendering HTML grows slower as the app grows in size. Secondly, without a backend, any dynamic end-user functionality will always be waiting behind a spinner. Developers are frustrated by slow builds, and end-users suffer increasingly poor experiences waiting for content to load. These compromises for performance are not longer necessary.

FWAs allow front-end developers to write their apps without worrying about awkward build pipelines or gluing a bunch of third-party code. FWAs are full-stack, deploy reliably, autoscale to meet demand and deliver the best web consumer experience by default.

## Benefits

- Focus on pure business logic without complexity introduced by infra concerns and vendor boilerplate.
- Build with everything you need in one place without tying together brittle third party complexity. Functional Web Apps are full-stack: database, queues, events, cron, etc.
- Reliability: pure functions are deterministic and declarative deployment provides safe and predictable delivery.
- A11y: HTML-first progressively enhanced ensures the most inclusive web consumer experience . 

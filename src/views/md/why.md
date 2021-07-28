# Why build an FWA?

Traditional web servers are notoriously difficult to scale, so it is increasingly common to pre-render HTML and fetch dynamic data after a webpage initially loads. However, pre-rendering has two significant drawbacks. First, pre-rendering HTML grows slower as the app grows in size subsequently stalling developer velocity. Secondly, without a backend, any dynamic end-user functionality will always be waiting behind a spinner. Developers are frustrated by slow builds, and end-users suffer increasingly poor experiences waiting for content to load. These compromises for performance are not necessary.

FWAs allow front-end developers to write apps without worrying about awkward build pipelines or gluing together a bunch of brittle third-party code. FWAs are full-stack, deploy reliably, autoscale to meet demand, and deliver the best web consumer experience by default.

## Benefits

- Focus on pure business logic without complexity introduced by infra concerns and vendor boilerplate.
- Build with everything you need in one place without tying together third party tools. Functional Web Apps are full-stack inclusive of cloud infra such as databases, queues, events, cron, and so on.
- Functions are a trusted backend process, discreet, reliable and deterministic; declarative deployment provides safe and predictable delivery.
- HTML-first progressively enhanced content delivery ensures the most inclusive and accessible web consumer experience. 

---
title: Considerations & trade-offs
description: Like any pattern, the Functional Web App has its own considerations & trade-offs
---
# Considerations & trade-offs

Any choice in application architecture has trade-offs and considerations. The trade-offs of load-balanced server fleets (challenging and time-consuming to provision, maintain, and scale) and static-centric architectures (dynamic functionality is behind loading spinners and skeleton screens) are well-known.

Functional Web Apps have their own considerations and trade-offs to take into account when building your app.


### Ramp-up

The Functional Web Apps approach is a relatively novel way to develop dynamic web apps, and experienced web development practitioners may require some time to get familiar with this paradigm.

FWAs eschew traditional architectural metaphors, most notably the concept of a *server* and *database server*, in favor of [cloud functions](/cloud-functions) and a [managed database](/managed-database). Moving past the server metaphor in a dynamic full-stack application may feel foreign.

While the server metaphor may indeed be familiar, it's also by no means a necessary abstraction for modeling unique business logic, or delivering fast, reliable full-stack web applications.


### Coldstarts & fat cloud functions

Functional Web Apps rely on [cloud functions](/cloud-functions) for compute, and the amount of time necessary for a cloud function to spin up upon invocation is known as *coldstart*. Coldstart time is most directly correlated to the code payload size – in other words, how much code (and how many dependencies) must be loaded to start the function.

The larger the code payload, the longer it will take to spin up an invoked cloud function. Large cloud functions are sometimes called *fat functions*, and they are often symptomatic of a function taking on too many responsibilities (or worse, doing something a managed service will do better[^1]).

A good rule of thumb is to keep cloud function payloads under 5 MB, which usually ensures sub 100-200ms coldstarts. In practice, 5 MB is a very generous budget[^2] for code when divvying up an application into discrete, single-responsibility cloud functions.

Some cloud function operations outside critical, user-facing paths may not have such sensitive performance requirements. Examples include asynchronous background tasks, or scheduled jobs. In such cases, running fatter cloud functions is an accepted practice.


### Limited pre-rendering

Like every web application architecture, Functional Web Apps have affordances for delivering static and pre-rendered assets quickly and efficiently. However, the FWA approach strongly biases towards server-side rendering of HTML and API responses.

Pre-rendered web apps force users to see loading spinners and skeleton screens before external resources can be loaded by the client (assuming they are available)[^3]. This also has second-order effects for users with accessibility needs, or who are on older devices or slower connections.

Functional Web Apps are assumed to be dynamic by default, rendering personalized responses per-request, and progressively enhancing in the client where appropriate.


### Portability

Much has been said about [lock-in](https://martinfowler.com/articles/oss-lockin.html) and cloud portability as a consideration for application development. Because each platform has its own services, APIs, and requirements, the ideal of cloud portability largely remains a myth, even for supposedly portable workloads performed in containers.

As the cloud has evolved, arguments for cloud portability are no longer rooted in valid concerns, and as such should not be a key objective of web application development. Shifting focus away from portability enables us to take full advantage of the powerful managed cloud infrastructure now available[^4].

The practice of using managed cloud services does imply abdicating some level of control to the upstream cloud vendor. As such, choice of your primary cloud vendor should always be done with care and intention.


### Specialized databases

The FWA approach is to outsource the management of the primary application database to a [managed database](/managed-database) vendor. Today, many managed databases do not enjoy the same level of familiarity or status as de facto standard as do some SQL-based systems (like Postgres).

Decreased familiarity with such databases can result in increased ramp-up time for developers. Fortunately, there is an increasing number of fully-managed SQL-based database vendors.

While it may be technically possible to use an unmanaged database with an FWA (and some developers do today), unmanaged databases are an ongoing distraction with many hidden costs. Unmanaged databases require domain expertise and unending undifferentiated work to maintain, and within the context of FWAs, they can potentially expose your app to scalability issues.


### Web console provisioning

A common practice today, especially static-centric web applications, is manually provisioning and managing critical application services by way of various vendors' web consoles.

Humans are notoriously error-prone, and relying on checklists, internal documentation, and other manual processes for a key application dependency infrastructure is poor practice. Defining cloud infrastructure by hand introduces serious reliability and maintainability issues.

Functional Web Apps instead rely on [deterministic deployment](/deterministic-deployment), a practice that includes treating your application's cloud infrastructure as an explicitly declared dependency, not unlike libraries / packages.


[^1]: A common fat function example is mounting a web server inside a cloud function that responds to all traffic. Cloud functions themselves should be capable of receiving and responding to events, FWAs rely on API gateways to be responsible for marshaling HTTP, not locally-running web servers.
[^2]: If 1 MB is 500 pages of text, then 5 MB equates to roughly 2,500 pages of text per cloud function.
[^3]: While it is broadly assumed that JS will successfully load and requests to external APIs will complete in a timely manner, that is not a safe assumption. Network failures occur, bad builds go out, and external services go down. Fast, accessible web experiences assume fully-functional HTML that is later progressively enhanced. [Read more](https://technology.blog.gov.uk/2016/09/19/why-we-use-progressive-enhancement-to-build-gov-uk/).
[^4]: [Cloud functions](/cloud-functions) are a good example of vendor-specific managed services that unlock new development patterns, such as Functional Web Apps. And while there is variation in vendor offerings, cloud functions do have at least one de facto and stable category leader.

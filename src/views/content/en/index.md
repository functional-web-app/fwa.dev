---
title: The Functional Web App (FWA)
description: An architectural pattern for building dynamic, full-stack web applications and APIs
---
# The Functional Web App

> An architectural pattern for building dynamic, full-stack web applications and APIs

Today, almost all dynamic web applications are built either by load-balancing a fleet of servers, or deploying static pages that call out to an assortment of third-party services.

The trade-offs of these two approaches are well-known. Load-balanced server fleets require deep domain expertise, and are challenging and time-consuming to provision, maintain, and scale. Static-centric architectures (like SPAs and the JAMstack) move dynamic functionality behind loading spinners and skeleton screens because customer web browsers are not a secure environment for backend business logic.

#### The Functional Web App (FWA) is a different way to build dynamic full-stack web applications and APIs without these tradeoffs. It offers developers the flexibility of dynamic, full-stack applications paired with the ease of scaling a static website.


## The three facets of the Functional Web App

### 1. [Cloud functions](/cloud-functions)
#### Apps are primarily composed of single-responsibility [cloud functions](/cloud-functions)

### 2. [Managed database](/managed-database)
#### Persistence is securely maintained with a [fully-managed database](/managed-database)

### 3. [Deterministic deployment](/deterministic-deployment)
#### Infrastructure dependencies are explicitly defined and [deterministically deployed](/deterministic-deployment)


## How Functional Web Apps are different

The two dominant paradigms for web development today offer a choice between building a highly flexible but difficult to scale server-based architecture, or a far more scalable, but limited, client-centric application. Functional Web Apps offer a powerful and flexible alternative approach to web app development.

- FWAs are fundamentally dynamic, yet also fully abstract cloud infrastructure, enabling developers to more directly invest their time in servicing customer needs.
- FWA compute processes are by default inactive and inert. By statelessly activating via invocation, FWAs ensure a high degree of both scalability and security.
- FWAs are trivial to update, facilitating rapid change instead of laborious refactors. FWA deployment is measured in seconds, not minutes or hours.
- FWA infrastructure is explicitly defined and identically reproducible every time; this results in highly reliable delivery with low total cost of ownership, and faster mean time to issue resolution.


## Why build a Functional Web App?

The Functional Web App approach offers unique characteristics that may be desirable for evolving your existing application, or building your next:

- FWAs combine the power and flexibility of dynamic, full-stack web applications with the ease and simplicity of scaling a static website.
- FWA code runs in isolation, ensuring unrelated code is never run in the same process, thereby reducing bug surface area and potential security issues.
- FWAs are easier to develop, maintain, debug, and deliver than traditional dynamic full-stack web applications, giving them a significantly lower overall total cost of ownership.
- FWAs can run locally and offline without complicated developer environments, improving developer velocity and reducing time to bug resolution.
- FWAs do not require any specific domain expertise or specialization to build or manage. Anyone with a basic understanding of web development is capable of creating a fully-realized FWA.


## Functional Web App goals

When building a Functional Web App, it can be helpful to consider a goal state. The following are key objectives for FWA developers:

- Author and maintain only unique business logic as pure cloud functions.
- Persistence, eventing, and other full-stack or backend affordances should be first-class managed services.
- Code _and_ infra dependencies are to be minimized, while ensuring both are explicity declared.
- Build accessible and inclusive applications by default by rendering responses.

---

### Acknowledgments

Written by Brian LeRoux & Ryan Block from [Begin](https://begin.com), with help from Kristofer Joseph, James Lindenbaum, & Dana Oshiro

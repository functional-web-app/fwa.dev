---
title: Cloud functions
description: Functional Web Apps are primarily composed of cloud functions, which are responsible for executing business logic.
---

# Cloud functions

> Dynamic web applications require a trusted compute process to execute business logic. Functional Web Apps are primarily composed of cloud functions, which are responsible for that trusted compute.

Dynamic web applications require a trusted compute process[^1] to execute business logic, and cloud functions[^2] are the purest unit of encapsulation for stateless, secure, auto-scaling trusted compute.

Each time a Functional Web App's page or endpoint is requested, or background task is invoked, a discrete, single-responsibility cloud function spins up, providing safe, secure, trusted compute.


### Stateless

Functional Web App operations execute in discrete cloud function processes. Each cloud function process spins up in milliseconds, runs to completion, and spins down, providing a fully stateless execution environment.

Each process executes in a secure sandbox totally isolated from noisy (and nosy) concurrent neighbor processes. Because of their size, statelessness, and isolation, cloud functions have inherently high concurrency, enabling FWAs to achieve the horizontal scalability necessary to meet any level of demand.

Traditional dynamic applications rely on long-lived stateful processes that require significant consideration to scale vertically and horizontally; such applications run on servers that take minutes or hours to spin up. In contrast, FWAs both scale transparently and are not affected by classes of bugs that affect long-lived processes, like slow memory leaks.


### Secure

Dynamic functionality and server-side rendering may require access to sensitive information, such as API keys, and data stored in the [primary application database](/managed-database). Thus, cloud function processes must be highly secure.

Functional Web Apps ensure each cloud function adheres to the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege), having only the permissions and authority necessary to operate, and nothing more.


### Fast

A hallmark of Functional Web Apps is single-responsibility cloud functions. While it is technically possible to load your entire application (and all of its dependencies) into a single cloud function, this would be similar to writing your entire application in a single file, instead of [separating your concerns into discrete modules](https://en.wikipedia.org/wiki/Modular_programming).

Functional Web Apps utilize many small, minimal cloud functions, each responsible for a single, discrete task. With less code and fewer dependencies to load and run, responses are faster – and faster responses equate to better user experiences.


### Flexible & replaceable

In a Functional Web App, each cloud function represents an isolated and unique expression of essential complexity. Cloud functions can also be pure, always returning the same response from the same set of arguments.

This means cloud functions are [referentially transparent](https://en.wikipedia.org/wiki/Referential_transparency): each is trivial to replace with another that meets the same contract. As such, FWAs enable web developers to author functions in any mainstream programming language, trivially upgrading, moving, or removing them at any time.

The physical architecture of FWAs is also perfectly symmetrical with its logical architecture. Each deployed cloud function is represented identically in the codebase. This results in a more straightforward debugging and maintenance developer experience, wherein errors are traced to specific known cloud functions, each with its own isolated logs.


## Accessible

Client-side JavaScript occasionally fails, which is why progressive enhancement is ultimately the most resilient rendering technique for all web consumers. Cloud functions render HTML-first and progressively enhance, ensuring dynamic content is immediately available and interactive to web consumers.

The Functional Web App delivers the fastest-possible contentful "paint", enabling instantly functional forms and links without layout shifts or waiting for clientside JS to load and render an interface. This approach brings first-input-delay close to zero, while creating a better experience for web consumers with accessibility needs.


[^1]: A trusted compute process is an execution environment that you fully control and own. For example: an environment in which a secret key can reside. By this measure, a server or cloud function execute your business logic in a trusted compute process, but a user's web browser do not execute your business logic is a trusted compute process.
[^2]: Today there exists numerous cloud function vendors; currently FWAs most often rely on AWS Lambda

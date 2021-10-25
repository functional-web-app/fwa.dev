---
title: Deterministic deployment
description: Cloud infrastructure is an application dependency that must always be explicitly defined to ensure safe, reliable software delivery and operation.
---
# Deterministic deployment

Cloud infrastructure[^1] is an application dependency. As with libraries / packages, applications must explicitly define dependencies to ensure safe, reliable software delivery and operation.

Functional Web Apps achieve deterministic deployment by explicitly defining cloud infrastructure dependencies in version control alongside the code that depends on it.


### Infrastructure dependencies

Every aspect of the cloud systems required to deliver a Functional Web App should be quantifiable and reproducible, ideally by way of a declarative manifest[^2], not unlike those used with libraries and packages. The format of the manifest is less important than the act of explicitly defining infrastructure dependencies.

By versioning cloud infrastructure, FWAs gain a consistent history that can be reliably deployed. Keeping infrastructure in version control also means an immutable audit trail of every change that made to the application environment.


### Determinism

In dynamic web applications, environment drift – differences between development and production environments – make reproducing and fixing bugs difficult and time-consuming. Similarly, defining cloud infrastructure by hand in various cloud vendor web consoles introduces serious reliability and maintainability issues.

To ensure a fully deterministic and reproducible application environment, store all the instructions necessary for provisioning, hosting, and delivering a Functional Web App in the source repository. This ensures FWAs reproduce precisely as intended every single time.


### Format

A variety of project manifest formats exist to ensure the deterministic deployment of Functional Web Apps. FWA authors should use systems that utilize declarative over imperative manifests, and that require little to no domain-specific knowledge of underlying cloud infrastructure.


[^1]: Cloud infrastructure refers to the various services and systems that compose a cloud-hosted app. These may range from [cloud functions](/cloud-functions) and [managed databases](/managed-database) to API gateways, identity / access management services, event buses, and other systems working together to ensure an app's operation.
[^2]: The process of enumerating cloud infrastructure dependencies in declarative manifests is also referred to as [Infrastructure as code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code).

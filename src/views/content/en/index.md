---
title: The Functional Web App (FWA)
description: An architectural pattern for building dynamic, full-stack web applications and APIs
---
# The Functional Web App

> An architectural pattern for building dynamic, full-stack web applications and APIs

Today, almost all dynamic web applications are built either by load-balancing a fleet of servers, or deploying static pages that call out to an assortment of third-party services.

The tradeoffs of these two approaches are well-known. Load-balanced server fleets require deep domain expertise, and are challenging and time-consuming to provision, maintain, and scale. Static-centric architectures (like SPAs and the JAMstack) move dynamic functionality behind loading spinners and skeleton screens because customer web browsers are not a secure environment for backend business logic.

#### The Functional Web App is a different way to build dynamic full-stack web applications and APIs without these tradeoffs. It offers developers the flexibility of dynamic, full-stack applications paired with the ease of scaling a static website.


## The three facets of the Functional Web App

### 1. [Cloud functions](/cloud-functions)
#### Apps are primarily composed of single-responsibility [cloud functions](/cloud-functions)

### 2. [Managed database](/managed-database)
#### Persistence is securely maintained with a [fully-managed database](/managed-database)

### 3. [Deterministic deployment](/deterministic-deployment)
#### Infrastructure dependencies are explicitly defined and [deterministically deployed](/deterministic-deployment)


## How Functional Web Apps are different

TKTK


## Why build a Functional Web App?

The two dominant paradigms for web development today offer a choice between building a highly flexible but difficult to scale server-based architecture, or a far more scalable, but limited, client-centric application.

Functional Web Apps offer an alternative approach to web app development, combining the power and flexibility of dynamic, full-stack web applications with the ease and simplicity of scaling a static website.

Functional Web Apps do not require any specific domain expertise or specialization to develop, manage, and maintain. Anyone with a basic understanding of web development is capable of creating a fully realized FWA.

---

### Acknowledgments

Written by Brian LeRoux & Ryan Block from [Begin](https://begin.com), with help from Kristofer Joseph, James Lindenbaum, & Dana Oshiro

# Functional Web App

Functional Web Apps (FWA) are a different way to build dynamic full-stack web apps.

## Principles

<details>
  <summary>Single-responsibility <i>pure</i> functions all the way down</summary>
  <p>Functional Web Apps are a cloud function centered development model. No servers to scale or patch frees developers to focus on unique business logic as pure functions. Spanning the full-stack from front-end to back-end an entire application can be modelled as pure functions with singular purpose. Functions are easier to reason about and test, they coldstart faster and offer more granularity for least-priviledge security.</p>
</details>
<details>
  <summary>Dynamically render HTML and JSON on-demand</summary>
  <p>Instead of forcing web consumers to wait for the content they came for behind an obnoxious loading spinner everything can be rendered immediately on-demand. Functional Web Apps employ modern managed database that scales to meet demand, without manual sharding, while boasting consistent low-latency performance no matter how much data is being stored.</p>
</details>
<details>
  <summary>Progressive enhance for interactivity</summary>
  <p>Functional Web Apps recognize that HTML loads first and JavaScript isn't always available for a variety of reasons. This ensures web consumers get the fastest and most accessible content by default.</p>
</details>
<details>
  <summary>Declarative deployment</summary>
  <p>Cloud infra is an explicitly defined immutable dependency that lives in version control beside the code that depends on it.</p>
</details>

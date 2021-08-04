# Functional Web App

Functional Web Apps (FWA) are a different way to build dynamic full-stack web apps.


## Principles

<details>
  <summary>Accessible by default</summary>
  <p>Functional Web Apps employ progressive enhancement for interactivity, recognizing that HTML loads first and JavaScript isn't always available for various reasons. FWAs ensure web consumers get the fastest and most accessible experience by default. </p>
</details>
<details>
  <summary>Pure functions</summary>
  <p>Functional Web Apps are a cloud function-centered development model freeing web devs to focus on unique business logic as pure single-responsibility functions with no infra to scale or patch. Spanning the full-stack, an entire application modeled as cloud functions – each with a singular purpose. Functions can utilize any programming language, and a Functional Web App can even leverage different runtimes in the same app for their respective strengths. Single-responsibility functions are interchangeable, replaceable, easily added or removed, and test; they coldstart faster and offer more granularity for least-privilege security.</p>
</details>
<details>
  <summary>Dynamic first</summary>
  <p>Functional Web Apps employ a modern managed database that scales to meet demand without manual sharding while boasting consistent low-latency performance no matter how much data is stored. Instead of forcing web consumers to wait for an obnoxious loading spinner all HTML content is rendered on-demand immediately. </p>
</details>
<details>
  <summary>Declarative deployment</summary>
  <p>Functional Web Apps deploy quickly, consistently, and reliably. Cloud infra is an explicitly defined dependency that lives in version control beside the code that depends on it.</p>
</details>

## Practices

- Cloud functions centered development model
- Modern low-latency autoscaling database
- Progressive enhancement for behavior
- Infra-as-Code for reliable deployment

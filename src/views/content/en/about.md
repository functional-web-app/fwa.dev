# About

TKTK

# Goals

- Accessible and inclusive by default.
- Author and maintain only unique business logic as pure cloud functions.
- Full-stack persistence, eventing and other backend affordances are built-in first-class autoscaling managed services.
- Minimize code _and_ infra dependencies while ensuring both are explicity declared.

# Non-goals

<ul>
  <li class=anti-pattern> Cloud vendor portability</li>
  <li class=anti-pattern> Legacy systems familiarity</li>
</ul>

# Trade-offs

<details>
  <summary>Portability</summary>
  <p>Having a preference for managed services means abdicating some level of control to the upstream vendor. Cloud functions are very early technology and as such are very vendor specific; but cloud functions do have at least one defacto and stable leader today. This is perhaps the most important dependency for the Functional Web App so <a href=/examples>choose your primary cloud vendor with care and intention</a>.</p>
</details>
<details>
  <summary>Familiarity</summary>
  <p>This is a different way to approach building dynamic web apps. Functional Web Apps eschew traditional architectural metaphors but most notably the concept of a 'server' and 'database server'. This will feel a little weird. But only because having a server is familiar not because it is a necessary abstraction for modelling unique business logic. Traditional database systems cannot cope with the auto-scaling nature of cloud functions which leads to stability issues managing connections. Managed database scale up to meet demand without these challenges.</p>
</details>
<details>
  <summary>Coldstart</summary>
  <p>Coldstart is directly corelated to function payload size. The larger the function the longer it will take to boot up cold. The rule of thumb is to keep function payloads under 5mb to coldstart sub-second. In practice divvying up an application into single-responsbility discreet functions this upper bound is a generous amount of room. If 1mb is 500 pages of text then this means you have rougly 2500 pages of text to work with _per cloud function_!</p>
</details>

# Code smells

Common stumbling blocks to avoid when building a Functional Web App.

<details>
  <summary>Fat functions</summary>
  <p>Big functions suffer a worse coldstart and are harder to secure to least-priviledge. Fat functions are often a symptom of the function doing too much, or worse, doing somethign a managed service will do better. A common example is mounting a web server inside a Lambda function that responds to all traffic.</p>
</details>
<details>
  <summary>Pre-rendering</summary>
  <p>Functional Web Apps are dynamic not static. Pre-rendering inert or unchanging content is perfectly acceptable but not appropriate for personalized content or dynamic application functionality. Pre-rendering an app is a nice way of saying most users will see a janky loading spinner before the HTML shifts into the viewport.</p>
</details>
<details>
  <summary>Bundling backend code</summary>
  <p>FWAs are inclusive of all dynamic languages but this practice is only something inherited from front-end JavaScript. Node has two module systems and Deno has one. It is not neccessary to bundle a userland module system for these runtimes and it is undesirable for debugging. Meaningful stack traces with line numbers is crucial for resolving bugs. While it can be possible to get sourcemaps working with backend JS runtimes this will trade-off performance for functionality that is already present by default. Sometimes this can even be cited as a performance boost but the better solution, which does not sacifice debugging, is to author small single-responsbility functions.</p>
</details>
<details>
  <summary>Web console provisioning</summary>
  <p>Humans are notoriously error-prone so relying on manual checklists for provisioning infrastructure is considered poor practice. Instead choose a declarative cloud native deployment tool such as CloudFormation.</p>
</details>
<details>
  <summary>Hardcoded runtime resource discovery</summary>
  <p>FWAs will have cloud infrastructure dependencies to discover at runtime. Examples include database table names, or perhaps an S3 bucket name. If you hardcode these resources the application is no longer determinstic or reproducable.</p>
</details>
<details>
  <summary>Deployment scripts (aka infra as no-code!)</summary>
  <p>While better than clicking around manually in a web console this can lead to non-determinism which means it will be difficult to reproduce and resolve bugs.</p>
</details>

<!--
Tradeoffs. Common objections to Functional Web Apps and how to fix them.

## Coldstart

Functional Web Apps encourage small single-responsbility functions. In practice this means functions should be under 5mb in order to coldstart sub-second. As a final resort most cloud function providers also allow pre-provisioning capacity.

## Infa as Code (IaC) complexity

Very large declarative manifests can grow unweildly and difficult to test in larger applications. Infrastructure provisioned by imperative languages can be non-determinsitic especially when userland can introduce breaking changes. As with most large complexity problems the solution is to break the problem down into smaller pieces.

## Specialized database

Managed databases do not always enjoy the standardization, defacto or otherwise, of older systems. This can lead to increased time for developers to ramp up.

## Vendor lock-in

The two primary concerns for vendor lock-in are: unplanned work due to breaking changes, and the vendor raising prices. These are probably not valid concerns for the leading cloud providers but absolutely a realistic concern for smaller niche players.

-->

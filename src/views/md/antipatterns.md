# Antipatterns

Patterns and practices to avoid when building a Functional Web App. 

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

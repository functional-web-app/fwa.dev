# Tradeoffs

Common objections to Functional Web Apps and how to fix them.

## Coldstart

Functional Web Apps encourage small single-responsbility functions. In practice this means functions should be under 5mb in order to coldstart sub-second. As a final resort most cloud function providers also allow pre-provisioning capacity. 

## Infa as Code (IaC) complexity

Very large declarative manifests can grow unweildly and difficult to test in larger applications. Infrastructure provisioned by imperative languages can be non-determinsitic especially when userland can introduce breaking changes. As with most large complexity problems the solution is to break the problem down into smaller pieces. 

## Specialized database

Managed databases do not always enjoy the standardization, defacto or otherwise, of older systems. This can lead to increased time for developers to ramp up.

## Vendor lock-in

The two primary concerns for vendor lock-in are: unplanned work due to breaking changes, and the vendor raising prices. These are probably not valid concerns for the leading cloud providers but absolutely a realistic concern for smaller niche players.

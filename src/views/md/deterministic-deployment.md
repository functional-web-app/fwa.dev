# Deterministic Deployment

Cloud infrastructure is a code dependency, and we always want to make sure dependencies are explicitly defined. Differences between development and production environments make reproducing and fixing bugs very difficult.

Deterministic deployment is achieved by explicitly defining infrastructure dependencies in version control alongside the code that depends on it. By versioning infrastructure, we gain an explicit history that can be deployed consistently and reliably. Keeping infrastructure in version control also means an immutable audit trail of every change that goes into the environment.

Instead of clicking around a web console to build your infrastructure by hand, hoping everything comes out just right, all the instructions are stored in the source repository. This ensures the app reproduces precisely the way you want every single time.

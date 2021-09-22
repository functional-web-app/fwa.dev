module.exports = function sidebar (/* props */) {
  return `
    <nav>
      <a href=/>Home</a>
      <a href=/cloud-functions>Cloud functions</a>
      <a href=/managed-database>Managed database</a>
      <a href=/deterministic-deployment>Deterministic deployment</a>
      <a href=/examples>Examples</a>
    </nav>
  `
}


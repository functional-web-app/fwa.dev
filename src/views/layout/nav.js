module.exports = function sidebar (/* props */) {
  return `
    <nav>
      <a href=/>Home</a>
      <a href=/why>Why</a>
      <a href=/goals>Goals</a>
      <!--
      <a href=/tradeoffs>Tradeoffs</a>
      <a href=/antipatterns>Antipatterns</a>
      -->
      <a href=/examples>Examples</a>
      <a href=/blog/>Blog</a>
      <a href=/community>Community</a>
    </nav>
  `
}


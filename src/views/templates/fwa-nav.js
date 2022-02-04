module.exports = function Heading (state = {}, html) {
  return html`
<header
  class="
    flex
    justify-between
    bg-primary
    pt0
    pr1
    pb0
    pl1
  "
>
  <div
    class="
      flex
      w-full
    "
  >
    <a
      aria-label="FWA"
      href="/"
      class="
        mr2
        cursor-pointer
      "
    >
      <fwa-wordmark></fwa-wordmark>
    </a>

    <nav
      id="main-nav"
      class="
        bg-primary
        flex-lg
        justify-end-lg
        flex-grow-lg
        mb-none-lg
        hidden
      "
    >
      <fwa-nav-link href="/how-it-works">How it works</fwa-nav-link>
      <fwa-nav-link href="/before-and-after">Before &amp; after</fwa-nav-link>
      <fwa-nav-link href="/resources">Resources</fwa-nav-link>
    </nav>
  </div>

  <button
    aria-label="Menu"
    id="nav-toggle"
    class="
      hidden-lg
      text-light
      cursor-pointer
    "
  >
    <fwa-icon href="hamburger"></fwa-icon>
  </button>
</header>
  `
}

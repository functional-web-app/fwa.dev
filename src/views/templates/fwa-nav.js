module.exports = function Heading (state = {}, html) {
  return html`
<header
  class="
    flex
    items-center
    justify-between
    pt0
    pb0
    overflow-hidden
  "
>
  <div
    class="
      flex
      items-center
      justify-between
      w-full
      pr1
      pl1
    "
  >
    <a
      aria-label="FWA"
      href="/"
      class="
        mr2
        items-center
        cursor-pointer
      "
    >
      <fwa-wordmark></fwa-wordmark>
    </a>

    <nav
      id="main-nav"
      class="
        list-none
        hidden
        flex-lg
        justify-end-lg
        flex-grow-lg
        mb-none-lg
      "
    >
      <fwa-nav-link href="/subpage">Subpage</fwa-nav-link>
      <fwa-nav-link href="/subpage">Subpage 2</fwa-nav-link>
      <fwa-nav-link href="/subpage">Subpage 3</fwa-nav-link>
    </nav>
  </div>

  <div
    class="
      flex
      items-center
      justify-between
      hidden-lg
    "
  >
    <button
      aria-label="Menu"
      id="nav-toggle"
      class="
        pr1
        text-light
        cursor-pointer
      "
    >
      H
    </button>
  </div>
</header>
  `
}

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
      <fwa-nav-link href="/how-to-build">How to build</fwa-nav-link>
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

<script type=module>
class FwaNav extends HTMLElement {
  constructor () {
    super()
    this.navToggle = document.getElementById('nav-toggle')
    this.navUL = document.getElementById('main-nav')
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleClickOutsideMenu = this.handleClickOutsideMenu.bind(this)
    this.navToggle.addEventListener('click', this.toggleMenu)
    document.addEventListener('click', this.handleClickOutsideMenu)
  }
  disconnectedCallback () {
    document.removeEventListener(this.handleClickOutsideMenu)
  }
  toggleMenu (e) {
    this.navUL.classList.toggle('hidden')
    this.navUL.classList.toggle('mobile-nav-open')
  }
  handleClickOutsideMenu (e) {
    if (this.navUL.classList.contains('mobile-nav-open') && !this.navToggle.contains(e.target)) {
      this.navUL.classList.remove('mobile-nav-open')
      this.navUL.classList.add('hidden')
    }
  }
}
customElements.define('fwa-nav', FwaNav)
</script>
`
}

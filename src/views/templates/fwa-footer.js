module.exports = function Header (state = {}, html) {
  return html`
<fwa-section-dark>
  <fwa-container-full>
    <div
      class="
        grid
        gap3
        col-2-lg
      "
    >
      <fwa-wordmark></fwa-wordmark>

      <div
        class="
          max-width-575-lg
        "
      >
        <h2
            class="
              text2
              text7-lg
              mb3
            "
          >
          <fwa-heading-accent>Acknowledgments</fwa-heading-accent>
        </h2>

        <p
          class="
            text-2
            text-1-lg
            leading4
          "
        >
          Written by Brian LeRoux & Ryan Block from Begin, with help from Frances Berriman, Kristofer Joseph, James Lindenbaum, & Dana Oshiro
        </p>
      </div>
    </div>
  </fwa-container-full>
</fwa-section-dark>
  `
}

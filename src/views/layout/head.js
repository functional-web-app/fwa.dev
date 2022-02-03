module.exports = function Head (state = {}) {
  const { description = '', title = '' } = state
  return `
<head>
  <title>${title}</title>
  ${description}
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/_static/styles.css">
  <style>
    svg {
      width: 100%;
      height: 100%;
    }
    .icon {
      width: 1.666rem;
      height: 1.666rem;
    }
    .icon-41 {
      width: 2.281rem;
      height: 2.281rem;
    }
    .font-custom {
      font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    .bg-primary {
      background: var(--primary)
    }
    .bg-gradient {
      background-image: var(--bg-gradient)
    }
    .bg-light {
      background: var(--light)
    }
    .bg-mid {
      background: var(--grey1)
    }
    .text-light {
      color: var(--light)
    }
    .text-dark {
      color: var(--dark)
    }
    .border-current {
      border-color: currentColor;
    }
    .circle-size {
      width: 0.888rem;
      height: 0.888rem;
    }

    .max-width-275 {
      max-width: 15.27rem;
    }
    .border-hover-light:active,
    .border-hover-light:hover {
      border-color: var(--light)
    }
    .bg-hover-light:active,
    .bg-hover-light:hover {
      background: var(--light)
    }
    .text-hover-accent-dark:active,
    .text-hover-accent-dark:hover {
      color: var(--accent-dark)
    }

    .grid-icon-list {
      grid-template-columns: 2rem auto;
      grid-row-gap: 1.7rem;
    }

    @media only screen and (min-width:48em) {
      .icon-lg {
        width: 2.777rem;
        height: 2.777rem;
      }
      .icon-30-lg {
        width: 1.67rem;
        height: 1.67rem;
      }
      .icon-58-lg {
        width: 3.247rem;
        height: 3.247rem;
      }
      .circle-size {
        width: 2rem;
        height: 2rem;
      }
      .max-width-208-lg {
        max-width: 11.556rem;
      }
      .max-width-370-lg {
        max-width: 20.555rem;
      }
      .max-width-508-lg {
        max-width: 28rem;
      }
      .max-width-575-lg {
        max-width: 31.95rem;
      }
      .max-width-810-lg {
        max-width: 45rem;
      }
      .max-width-full-lg {
        max-width: 65rem;
      }
    }
  </style>
</head>
  `
}

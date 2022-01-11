module.exports = function Head(state={}) {
  const { description='', title='' } = state
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
      width: 1.25rem;
      height: 1.25rem;
    }

    .max-width-275 {
      max-width: 15.27rem;
    }

    @media only screen and (min-width:48em) {
      .circle-size {
        width: 2rem;
        height: 2rem;
      }
      .max-width-450-lg {
        max-width: 25rem;
      }
      .max-width-575-lg {
        max-width: 31.95rem;
      }
      .max-width-650-lg {
        max-width: 36.111rem;
      }
      .max-width-1200-lg {
        max-width: 66.666rem;
      }
    }
  </style>

</head>
  `
}
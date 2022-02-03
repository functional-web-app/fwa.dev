/* eslint-env browser */
(function (){
  const navToggle = document.getElementById('nav-toggle')
  const navUL = document.getElementById('main-nav')

  navToggle.addEventListener('click', () => {
    navUL.classList.toggle('hidden')
  })

  document.addEventListener('click', (e) => {
    if (!navUL.classList.contains('hidden') && !navToggle.contains(e.target)) {
      navUL.classList.add('hidden')
    }
  })
})()

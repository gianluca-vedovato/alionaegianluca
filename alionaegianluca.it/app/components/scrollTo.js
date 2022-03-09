export default ({ scroller }) => {
  const scrollTo = document.querySelectorAll('.scroll-to')

  scrollTo
    .forEach(el => {
      el.addEventListener('click', () => {
        scroller.scrollTo(el.getAttribute('data-target'), { duration: 1200 })
      })
    })
}
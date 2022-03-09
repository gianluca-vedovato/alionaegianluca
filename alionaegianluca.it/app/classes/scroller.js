import LocomotiveScroll from 'locomotive-scroll'

export default class Scroller {
  constructor () {
    this.init ()
  }

  init () {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })

    this.update()
  }

  start () {
    this.scroll.start()
  }
  
  stop () {
    this.scroll.stop()
  }

  scrollTo (target, options) {
    this.scroll.scrollTo(target, options)
  }

  onScroll (fn) {
    if (typeof fn !== 'function') return
    this.scroll.on('scroll', (args) => fn(args))
  }

  update () {
    const interval = setInterval(() => {
      this.scroll.update()
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
    }, 2000)
  }
}
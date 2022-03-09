import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default class LinesReveal {
  constructor (el) {
    this.el = el
    this.init()
  }

  init () {
    const lines = new SplitText(this.el, { type: 'lines', linesClass: 'line' })
    this.lines = lines.lines

    this.lines.forEach((line, i) => {
      line.classList.add('opacity-0')
      line.classList.add('transform')
      line.classList.add('translate-y-16')
      line.style.setProperty('--delay', `${i * 0.18}s`)
    })
    this.el.setAttribute('data-scroll', '')
    this.el.setAttribute('data-scroll-offset', '10%, 10%')
  }
}
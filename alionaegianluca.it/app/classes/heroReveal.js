import { gsap } from 'gsap'

export class heroReveal {
  constructor () {
    this.heroWrapper = document.querySelector('.hero__bg-wrapper')
    this.heroBg = document.querySelector('.hero__bg')
    this.heroDec = document.querySelector('.hero__bg__dec')
    this.heroDate = document.querySelector('.hero__date')
    this.heroMain = document.querySelector('.hero__main')

    this.timeline = gsap.timeline({ paused: true })

    this.initTimeline()
  }

  initTimeline() {
    const clipPathValue = window.innerWidth > 1024
      ? '5rem'
      : '1.5rem'
    
    const clipPath = `inset(${clipPathValue} ${clipPathValue} ${clipPathValue} ${clipPathValue})`

    gsap.set(this.heroWrapper, { clipPath: 'inset(0rem 0rem 0rem 0rem)' })
    gsap.set([this.heroDate, this.heroMain], { y: 16 })

    this.timeline
      .to(this.heroWrapper, { clipPath, ease: 'expo.out', duration: 3.2 }, 0)
      .to(this.heroBg, { scale: 1, ease: 'expo.out', duration: 3.2 }, 0)
      .to(this.heroMain, { opacity: 1, y: 0, ease: 'expo.out', duration: 1.6 }, 0.6)
      .to(this.heroDate, { opacity: 1, y: 0, ease: 'expo.out', duration: 1.6 }, 0.8)
      .to(this.heroDec, { opacity: 0.25,  ease: 'expo.out', duration: 3 }, 0.4)
  }

  play () {
    this.timeline.play()
  }
}
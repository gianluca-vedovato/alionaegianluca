import gsap from "gsap/all"

export default ({ scroller }) => {
  const timeline = gsap.timeline({ paused: true })

  const scrollingDiv = document.querySelector('.scrolling-div')
  
  scrollingDiv.querySelectorAll('div')
    .forEach((div, i) => {
      if (i === 0) return
      timeline
        .to(div, { y: 0, ease: 'power4.inOut', duration: 1 })
    })

  const onProgress = (progress) => {
    if (!progress) return
    timeline.progress(progress)
  }
  
  scroller.onScroll(({ currentElements }) => {
    if (window.innerWidth < 1024) return
    if (!currentElements.invitation) {
      gsap.ticker.remove(() => onProgress())
      return
    }
    const { progress } = currentElements.invitation
    gsap.ticker.add(() => onProgress(progress))
    
  })
}
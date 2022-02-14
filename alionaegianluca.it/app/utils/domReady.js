export const domReady = (onReady) => {
  window.requestAnimationFrame(function check() {
    document.body ? onReady() : window.requestAnimationFrame(check)
  })
}
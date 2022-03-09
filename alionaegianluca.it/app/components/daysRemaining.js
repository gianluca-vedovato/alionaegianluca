export default () => {
  const el = document.querySelector('.days-remaining')
  if (!el) return

  const today = new Date()
  const weddingDay = new Date('06/25/2022')

  const daysDifference =  Math.ceil(Math.abs((weddingDay.getTime() - today.getTime())) / (1000 * 60 * 60 * 24))
  el.innerHTML = daysDifference
}
import Scroller from './classes/scroller'
import LinesReveal from './classes/linesReveal'
import invitation from './components/invitation'
import messages from './dataset/messages'

const toInit = {
  invitation
}

class App {
  constructor () {
    this.locale = this.getUrlParam('locale') || 'it' 
    this.init ()
  }

  async init () {
    await this.populate()

    document.querySelectorAll('[data-lines]')
      .forEach(el => {
        new LinesReveal(el)
      })
    
    this.scroller = new Scroller()
    
    Object.entries(toInit)
      .forEach(([component, initFunction]) => {
        this[component] = initFunction(this)
      })
  }

  getUrlParam (key) {
    const urlParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })

    return urlParams[key]
  }

  async populate () {
    const contents = document.querySelectorAll('[data-populate]')

    contents.forEach(content => {
      const keys = content.getAttribute('data-populate').split('.')
      const message = keys[0] === 'route'
        ? this.getUrlParam(keys[1]) || ''
        : keys.reduce((acc, curr) => {
            return acc[curr]
          }, messages[this.locale])
      
      if (!message) {
        content.parentNode.removeChild(content)
        return
      }
      content.innerHTML = message
    })
  }
}

new App ()
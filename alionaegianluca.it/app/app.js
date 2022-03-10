import Scroller from './classes/scroller'
import LinesReveal from './classes/linesReveal'
import form from './components/form'
import scrollTo from './components/scrollTo'
import daysRemaining from './components/daysRemaining'
import messages from './dataset/messages'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from './utils/firebase'
import vh from './utils/vh'
import { heroReveal } from './classes/heroReveal'

const toInit = {
  form,
  scrollTo,
  daysRemaining
}

class App {
  constructor () {
    this.locale = this.getUrlParam('locale') || 'it' 
    this.init ()
    this.data = {
      adults: 2,
      children: 2,
      confirm: false,
      displayNme: 'Gianni'
    }
  }

  async getFirestoreRef () {    
    this.id = this.getUrlParam('id')
    if (!this.id) return
    const confirmationsRef = collection(db, 'confirmations')
    const docRef = doc(confirmationsRef, this.id)
    const snap = await getDoc(docRef)
    this.data = snap.data()

    console.log(this.data)
    this.name = this.data.displayName
    this.type = this.data.type || 'Partial'
    this.docRef = docRef
  }

  async init () {
    const hero = new heroReveal()

    this.scroller = new Scroller()
    this.scroller.stop()
    vh()
    await this.getFirestoreRef()

    const toRemove = this.type === 'Full'
      ? document.querySelectorAll('.invitation-partial')
      : document.querySelectorAll('.invitation-full')
    
    toRemove.forEach(el => {
      el.parentNode.removeChild(el)
    })

    await this.populate()

    document.querySelectorAll('[data-lines]')
      .forEach(el => {
        new LinesReveal(el)
      })
    
      
      Object.entries(toInit)
      .forEach(([component, initFunction]) => {
        this[component] = initFunction(this)
      })

      hero.play()
      this.scroller.update()
      this.scroller.start()

      document.querySelector('.scroll-down-indicator').classList.remove('opacity-0')
    }

  getUrlParam (key) {
    const urlParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })

    return urlParams[key]
  }

  async populate () {
    const contents = document.querySelectorAll('[data-populate]')
    const isSingular = this.name.indexOf(' e ') < 0

    contents.forEach(content => {
      const keys = content.getAttribute('data-populate').split('.')
      const message = keys[0] === 'route'
        ? this.name || ''
        : keys.reduce((acc, curr) => {
            return typeof acc === 'function' 
              ? acc(isSingular)[curr]
              : acc[curr]
          }, messages[this.locale])
      
      if (!message) {
        content.parentNode.removeChild(content)
        return
      }

      if (keys[keys.length - 1] === 'placeholder') {
        content.placeholder = message
        return
      }

      content.innerHTML = message
    })
  }
}

new App ()
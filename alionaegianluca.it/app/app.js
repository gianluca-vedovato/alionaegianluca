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
      displayNme: '',
      type: undefined
    }
  }

  async getFirestoreRef () {    
    this.id = this.getUrlParam('id')
    if (!this.id) return
    const confirmationsRef = collection(db, 'confirmations')
    const docRef = doc(confirmationsRef, this.id)
    const snap = await getDoc(docRef)
    if (!snap) return
    this.data = snap.data()

    if (!this.data) return
    this.name = this.data.displayName || ''
    this.type = this.data.type || undefined
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
      : this.type === 'Partial'
        ? document.querySelectorAll('.invitation-full')
        : document.querySelectorAll('.invitation-full, .invitation-partial')
    
    toRemove.forEach(el => {
      el.parentNode.removeChild(el)
    })

    console.log(this.type)
    if (typeof this.type === 'undefined') {
      document.querySelectorAll('.invitation-undefined')
        .forEach(el => {
          el.classList.remove('hidden')
        })

      document.querySelectorAll('.don-t-show-on-undefined')
        .forEach(el => {
          console.log(el)
          el.classList.add('hidden')
        })
    }

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
    }

  getUrlParam (key) {
    const urlParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })

    return urlParams[key]
  }

  async populate () {
    const contents = document.querySelectorAll('[data-populate]')
    const isSingular = this.name
      ? this.name.indexOf(' e ') < 0
      : true

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
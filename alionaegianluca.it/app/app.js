import Scroller from './classes/scroller'
import LinesReveal from './classes/linesReveal'
import invitation from './components/invitation'
import form from './components/form'
import messages from './dataset/messages'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from './utils/firebase'

const toInit = {
  invitation,
  form
}

class App {
  constructor () {
    this.locale = this.getUrlParam('locale') || 'it' 
    this.init ()
  }

  async getFirestoreRef () {
    this.id = this.getUrlParam('id')
    if (!this.id) return
    const confirmationsRef = collection(db, 'confirmations_test')
    const docRef = doc(confirmationsRef, this.id)
    const snap = await getDoc(docRef)
    this.data = snap.data()

    this.name = this.data.displayName
    this.type = this.data.type
    this.docRef = docRef
  }

  async init () {
    await this.getFirestoreRef()
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
        ? this.name || ''
        : keys.reduce((acc, curr) => {
            return acc[curr]
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
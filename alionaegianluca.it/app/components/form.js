import { addDoc, collection, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../utils/firebase"
import { gsap } from 'gsap'

export default ({ id, data: { adults, children, confirm, notes, displayName }, docRef }) => {
  const form = document.getElementById('main-form')

  form.querySelector('input[name=adults]').value = adults
  form.querySelector('input[name=children]').value = children

  gsap.set('.invitation-confirmed, .invitation-not-confirmed', { autoAlpha: 0, y: 20, opacity: 0 })

  if (confirm && confirm === 0) {
    form.querySelector('input#confirm_no').checked = true
  }

  if (notes) {
    form.querySelector('textarea[name=notes]').value = notes
  }


  form.addEventListener('submit', async e => {
    e.preventDefault()
    const confirmation = form.querySelector('input[name=confirm]:checked').value
    const notes = form.querySelector('textarea[name=notes]').value
    const adults = form.querySelector('input[name=adults]').value
    const children = form.querySelector('input[name=children]').value
    
    const writes = collection(db, 'writes')

    form.querySelector('.main-button').classList.add('loading')

    setTimeout(() => {
      form.querySelector('.main-button').classList.add('loading')

      const toShow = confirmation === 1
        ? document.querySelector('.invitation-confirmed')
        : document.querySelector('.invitation-not-confirmed')
      
      gsap.timeline()
        .to('.invitation-form', { opacity: 0, y: 20, pointerEvents: 'none', ease: 'power4.out', duration: 1.2 })
        .to(toShow, { autoAlpha: 1, y: 0,  ease: 'power4.out', duration: 1.2 })
    }, 4000)
    // try {
    //   await addDoc(writes, {
    //     createdAt: serverTimestamp(),
    //     adults,
    //     children,
    //     notes,
    //     confirmation: confirmation === '1' ? 'Sì' : 'No',
    //     displayName,
    //     id
    //   })
  
    //   await setDoc(docRef, {
    //     confirmation,
    //     notes,
    //     adults,
    //     children
    //   }, {
    //     merge: true
    //   })
    // } catch (e) {
    //   console.error(e)
    // }

    

    return false
  })
  

}
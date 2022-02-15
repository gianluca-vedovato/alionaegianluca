import { addDoc, collection, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../utils/firebase"

export default ({ id, data: { adults, children, confirm, notes, displayName }, docRef }) => {
  const form = document.getElementById('main-form')

  form.querySelector('input[name=adults]').value = adults
  form.querySelector('input[name=children]').value = children

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

    await addDoc(writes, {
      createdAt: serverTimestamp(),
      adults,
      children,
      notes,
      confirmation: confirmation === '1' ? 'Sì' : 'No',
      displayName,
      id
    })

    await setDoc(docRef, {
      confirmation,
      notes,
      adults,
      children
    }, {
      merge: true
    })

    return false
  })
  

}
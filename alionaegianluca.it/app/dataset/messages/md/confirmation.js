export default (isSingular) => ({
  title: `Spune-ne dacă vei fi acolo`,
  confirm: `Iti confirmi prezenta?`,
  yes: 'Da',
  no: 'Nu',
  adults: 'Adulti',
  children: 'Copii',
  notes: {
    full: `Dacă aveți alergii, intoleranțe sau alte informații pe care trebuie să le cunoaștem, vă rugăm să ne anunțați aici`,
    partial: `Dacă mai aveți ceva să ne spuneți, nu ezitați să scrieți mai jos`
  },
  placeholder: 'Scrie orice notă aici',
  submit: 'Confirmare',
  confirmed: {
    title: 'Confirma primirea! 🤗',
    text: 'Vă mulțumim, am primit corect confirmarea dvs. <br> Faceți clic pe butonul de mai jos pentru a adăuga data în calendar.',
    button: 'Adăugați în calendar'
  },
  notConfirmed: {
    title: 'Ce păcat! 😢',
    text: 'Vă mulțumim oricum pentru că ne-ați anunțat că nu veți fi prezent. <br> Ne pare foarte rău, sperăm să ne vedem curând 😊'
  }
})
export default (isSingular) => ({
  title: `Anunțați-ne dacă veți fi prezent`,
  confirm: `Iti confirmi prezenta?`,
  yes: 'Da',
  no: 'Nu',
  adults: 'Persoane adulte',
  children: 'Copii',
  notes: {
    full: `Dacă aveți alergii sau alte informații de spus, vă rugăm să scrieți aici.`,
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
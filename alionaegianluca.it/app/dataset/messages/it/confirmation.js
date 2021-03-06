export default (isSingular) => ({
  title: `Facci sapere se ci ${isSingular ? 'sarai' : 'sarete' }`,
  confirm: `${isSingular ? 'Confermi' : 'Confermate'} la presenza?`,
  yes: 'SÃ¬',
  no: 'No',
  adults: 'Adulti',
  children: 'Bambini',
  notes: {
    full: `Se ${isSingular ? 'hai' : 'avete'} allergie, intolleranze o altre informazioni che dobbiamo sapere, comunicacelo qui`,
    partial: `Se ${isSingular ? 'hai' : 'avete'} altro da comunicarci, scrivilo pure qui sotto`
  },
  placeholder: 'Scrivi qui eventuali note',
  submit: 'Conferma',
  confirmed: {
    title: 'Conferma ricevuta! ð¤',
    text: 'Grazie, abbiamo ricevuto la tua conferma correttamente. <br> Clicca il pulsante qui sotto per aggiungere la data al calendario.',
    button: 'Aggiungi al calendario'
  },
  notConfirmed: {
    title: 'Che peccato! ð¢',
    text: 'Grazie comunque per averci comunicato che non sarete presenti. <br> Ci dispiace molto, speriamo di vederci presto ð'
  }
})
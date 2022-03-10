export default (isSingular) => ({
  full: {
    title: "Dopo la cerimonia, ci sposteremo all'agriturismo Al Segnavento di Zelarino (VE) per il ricevimento.",
    text: {
      part1: 'Ad attendervi ci sarà un aperitivo in giardino, al quale seguirà la cena con prodotti locali.',
      part2: 'Dopo il taglio della torta ci sarà musica e open bar, si potrà ballare a piedi nudi, mettevi comodi 😃'
    }
  },
  partial: {
    title: `Siamo lieti di ${isSingular ? 'averti' : 'avervi'} ospiti per la serata che si terrà presso l’agriturismo Al Segnavento di Zelarino (Venezia).`,
    text: `Ci farebbe piacere ${isSingular ? 'riceverti' : 'ricevervi'} per il taglio della torta nuziale che si terrà alle 21.30. In seguito ci saranno musica e open bar, si potrà ballare a piedi nudi, mettevi comodi 😃`,
  },
  clickHere: 'Clicca qui ',
  allergens: ' per comunicarci eventuali allergie o intolleranze in modo da potervi offrire un servizio adeguato.',
  showOnMap: 'Mostramelo sulla mappa',
})
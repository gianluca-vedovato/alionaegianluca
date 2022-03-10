export default (isSingular) => ({
  greeting: 'Ciao',
  main: {
    full: `abbiamo il piacere di ${isSingular ? 'invitarti' : 'invitarvi'} al nostro matrimonio che si terrà <strong>sabato 25 giugno 2022</strong> presso la Chiesa di <strong>San Giorgio</strong> di <strong>Chirignago</strong> (Venezia) alle ore <strong>15.30</strong>.`,
    partial: `abbiamo il piacere di ${isSingular ? 'invitarti' : 'invitarvi'} al nostro matrimonio che si terrà il <strong>25 Giugno 2022</strong>. La cerimonia, per chi ha piacere, avrà luogo presso la Chiesa di<strong> San Giorgio</strong> di <strong>Chirignago</strong> (VE) alle ore <strong>15.30</strong>.`
  }
})
import intro from './intro'
import invitation from './invitation'
import confirmation from './confirmation'
import footer from './footer'

export default (isSingular) => ({
  intro: intro(isSingular),
  invitation: invitation(isSingular),
  confirmation: confirmation(isSingular),
  footer: footer(isSingular)
})
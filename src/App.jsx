import './App.css'
import Button from './Button'
import Resultat from './Resultat'
import Resultat2 from './Resultat2'

import Welcome from './Welcome'

function App() {
return(
  <>
  <Welcome name="nono" />
  <Welcome name="ossama"/>
  <Welcome name="oudfel"/>
  <Button label="cliquez ici"/>
  
<Resultat nom="ali" note={12} absences={3}/>
<Resultat nom="abdo" note={18} absences={0}/>

<Resultat2 nom="anes" note={5} />
<Resultat2 nom="nono" note={18} />


  </>
)
     
}

export default App

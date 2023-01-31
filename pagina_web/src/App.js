import styled from "styled-components"
import Header from './componentes/Header/index.js'
import Sensores from './componentes/Sensores/index.js'
import "../src/reset.css"

const  AppContainer = styled.div`
  width: 100vw;
  
`

function App (){
  return(
    <AppContainer>
      <Header></Header>
      <Sensores/>
    </AppContainer>


  )

}

export default App;
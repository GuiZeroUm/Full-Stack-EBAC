import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/formulario'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return(
    <>
      <Perfil nome='Guilherme' endereco='https://github.com/GuiZeroUm.png'/>
      {formularioEstaVisivel && <Formulario />}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button>
    </>
  )
}

export default App

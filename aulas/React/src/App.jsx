import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/formulario'
import ReposList from './components/ReposList'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return(
    <>
      <Perfil nome='Guilherme' endereco='https://github.com/GuiZeroUm.png'/>
      <ReposList />
      {/* {formularioEstaVisivel && <Formulario />}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button> */}
    </>
  )
}

export default App
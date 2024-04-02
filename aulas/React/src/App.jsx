function App() {
  const nome = "Guilherme"

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = true

  return(
    <>
    <h1>Olá, {pessoa.nome}</h1>
    <h2>Subtitulo</h2>
    {/* forma de escrever if e else em uma linha */}
    {estaDeDia ? 'Bom dia!' : 'Boa tarde!'}
    </>
  )
}

export default App

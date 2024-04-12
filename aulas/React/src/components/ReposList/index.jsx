import { useEffect, useState } from "react"

const ReposList = () => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    
    useEffect(() => {
        fetch('https://api.github.com/users/GuiZeroUm/repos')
        .then(resposta => resposta.json())
        .then(respostaJson =>{
            setTimeout(() =>{
                setEstaCarregando(false)
                setRepos(respostaJson)
            }, 3000)
        })
        
    }, [])
    
    return (
        <>
            {estaCarregando && (

            <h1>Carregando...</h1>
            )}
            <ul>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id}>
                        <b>Nome: </b> {name} <br/>
                        <b>Linguagem: </b> {language} <br/>
                        <a target="_blank" href={html_url}>Visitar no github</a> <br/>
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </>
    )
}

export default ReposList
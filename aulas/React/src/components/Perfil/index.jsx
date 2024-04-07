import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: 'Guilherme',
        avatar: 'https://github.com/GuiZeroUm.png'
    }

    return ( 
        <>
            <img className='perfil-avatar' src={usuario.avatar} />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </>
     );
}
 
export default Perfil;
import './perfil.css'

const Perfil = ({ endereco, nome }) => {

    return ( 
        <>
            <img className='perfil-avatar' src={endereco} />
            <h3 className='perfil-titulo'>{nome}</h3>
        </>
     );
}
 
export default Perfil;
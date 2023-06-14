import { Link } from "react-router-dom"

function Erro() {
    return(
        <div>
            <h2>Ops parece que essa página não existe!</h2>

            <span>Encontramos essas páginas aqui:</span>
            <Link to='/'>Home</Link> <br/>
            <Link to='/Sobre'>Sobre</Link> <br/>
            <Link to='/Contato'>Contato</Link>
        </div>
    )
}

export default Erro
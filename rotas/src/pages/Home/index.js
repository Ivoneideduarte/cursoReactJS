import { Link } from 'react-router-dom'

function Home() {
    return(
        <div>
            <h1>Bem vindo a página HOME</h1><br/>

            <Link to='/Sobre' >Sobre</Link> <br/><br/>
            <Link to='/Contato'>Contato</Link>
            <br/>
            <Link to='/produto/12345'>Acessar produto 123</Link>
        </div>
    )
}

export default Home
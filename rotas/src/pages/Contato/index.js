import { Link } from "react-router-dom"

function Contato() {
    return(
        <div>
            <h1>
                Página contato
            </h1>
            <span>Contato da empresa (dd) xxxx-xxxx</span><br/>
            <Link to='/'>Home</Link> <br/><br/>
            <Link to='/Sobre'>Sobre</Link> 
        </div>
    )
}

export default Contato
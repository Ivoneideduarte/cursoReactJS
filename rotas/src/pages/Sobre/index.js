//npm install react-router-dom

import { Link } from "react-router-dom"

function Sobre() {
    return(
        <div>
            <h1>Página sobre a empresa</h1><br/>
            <Link to='/'>Home</Link> <br/><br/>
            <Link to='/Contato'>Contato</Link>
        </div>
    )
  }
  
  export default Sobre
  
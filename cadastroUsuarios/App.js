import { useState } from "react"

function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')

  const[user, setUser] = useState({})

  function handleRegister(e) {
    e.preventDefault()

    alert('Usuário registrado com sucesso!')
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return(
    <div>
      <h1>Cadastrando Usuários</h1>

      <form onSubmit={handleRegister} >
        <label>Nome: </label>
        <input 
          placeholder="Digite seu nome"
          value={nome}  
          onChange={ (e) => setNome(e.target.value)}
        />
        <br/>
        <label>Email: </label>
        <input 
          placeholder="Digite seu email"
          value={email}  
          onChange={ (e) => setEmail(e.target.value) }
        />
        <br/>
        <label>Idade: </label>
        <input 
          placeholder="Digite sua idade"
          value={idade}
          onChange={ (e) => setIdade(e.target.value) }
        />
        <br/>
        <button type="submit" >Registrar</button>
      </form>

      <br/><br/>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Idade: {user.idade}</span><br/>
      <span>Email: {user.email}</span>

    </div>
  )
}

export default App

import { useState, useEffect } from "react"

function App() {
  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ])

  useEffect(() => {
   
   const tarefasStorage = localStorage.getItem('@tarefa')

   if(tarefasStorage) {
    setTarefas(JSON.parse(tarefasStorage))
   }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  function handleRegister(e) {
    e.preventDefault()
    setTarefas([...tarefas, input])
    setInput('')
  }

  return(
    <div>
      <form onSubmit={handleRegister} >
        <label>Nome da tarefa: </label>
        <input 
          placeholder="Digite uma tarefa"
          value={input}  
          onChange={ (e) => setInput(e.target.value)}
        />
        <br/>
        
        <button type="submit" >Registrar</button>
      </form>
      <br/>
      <br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
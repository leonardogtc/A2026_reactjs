import { useState } from "react";

// 1. DEFINIÇÃO DO COMPONENTE:
// Em React, criamos a interface por meio de "Componentes".
// Este é um "Componente Funcional" (uma função JavaScript normal que retorna elementos visuais).
// Regra importante: o nome de um componente React DEVE começar com letra maiúscula (ex: "App").
function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Aprender a usar ReactJS',
    'Criar sistema de controle de encomendas'
  ]);


  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('')
  }


  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <form action="" onSubmit={handleRegister}>
        <label htmlFor="tarefas">Nome da Tarefa:</label>
        <input type="text" id="tarefas" placeholder="Digite uma tarefa"
          value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <button type="submit">Cadastrar</button>
      </form>

      <br />
      <hr />
      <br />

      <div>
        <h2>Usuários cadastrados</h2>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 4. EXPORTAÇÃO DO COMPONENTE:
// O "export default" torna este componente disponível para ser importado por outros arquivos.
// Por exemplo, no arquivo index.js, nós o importamos com: import App from './App';
export default App;






import { useState } from "react";

// 1. DEFINIÇÃO DO COMPONENTE:
// Em React, criamos a interface por meio de "Componentes".
// Este é um "Componente Funcional" (uma função JavaScript normal que retorna elementos visuais).
// Regra importante: o nome de um componente React DEVE começar com letra maiúscula (ex: "App").
function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});


  function handleRegister(e) {
    e.preventDefault();

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }


  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <form action="" onSubmit={handleRegister}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" placeholder="" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="idade">Idade:</label>
        <input type="number" id="idade" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <br />
        <button type="submit">Cadastrar</button>
      </form>

      <br />
      <hr />
      <br />

      <div>
        <h2>Usuários cadastrados</h2>
        <ul>
          <li>Nome: {user.nome}</li>
          <li>Email: {user.email}</li>
          <li>Idade: {user.idade}</li>
        </ul>
      </div>
    </div>
  );
}

// 4. EXPORTAÇÃO DO COMPONENTE:
// O "export default" torna este componente disponível para ser importado por outros arquivos.
// Por exemplo, no arquivo index.js, nós o importamos com: import App from './App';
export default App;






import Nome from "./components/Nome";

// 1. DEFINIÇÃO DO COMPONENTE:
// Em React, criamos a interface por meio de "Componentes".
// Este é um "Componente Funcional" (uma função JavaScript normal que retorna elementos visuais).
// Regra importante: o nome de um componente React DEVE começar com letra maiúscula (ex: "App").
function App() {
  // 2. RETORNO DO COMPONENTE (JSX):
  // O que está dentro do return parece HTML, mas na verdade é JSX (JavaScript XML).
  // O JSX permite escrever a estrutura visual diretamente dentro do código JavaScript.
  // Regra importante: o return deve sempre ter um único elemento pai envolvendo tudo (neste caso, a <div>).
  return (
    <div>
      {/* 3. ELEMENTO VISUAL: */}
      {/* Aqui estamos renderizando uma tag de título tradicional, agora gerenciada pelo React */}
      <h1>Olá mundo em React</h1>
      <Nome nome="Oliver" idade="14" />
      <Nome nome="Lúcia" idade="18" />
      <Nome nome="Ivonete" idade="38" />
      <Nome nome="Aymê" idade="2" />
    </div>
  );
}

// 4. EXPORTAÇÃO DO COMPONENTE:
// O "export default" torna este componente disponível para ser importado por outros arquivos.
// Por exemplo, no arquivo index.js, nós o importamos com: import App from './App';
export default App;






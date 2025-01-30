<script>
    import { openModal } from './store.js';
  
    // Funções para abrir os modais
    const abrirDesafio1 = () => openModal('desafio1');
    const abrirDesafio2 = () => openModal('desafio2');
    const abrirDesafio3 = () => openModal('desafio3');
  </script>
  
  <main class="main-content">
    <h1 class="titulo">Desculpa... Eu Fui Mal!</h1>
    <p class="descricao">
      Às vezes, erramos e as palavras não são suficientes para pedir perdão. 
      Mas estamos aqui, com coragem, para tentar! 💖
    </p>
  
    <div class="botoes">
      <button class="botao" on:click={abrirDesafio1}>Aceite meu pedido de desculpas!</button>
      <button class="botao" on:click={abrirDesafio2}>Será que você consegue me perdoar?</button>
      <button class="botao" on:click={abrirDesafio3}>Desafio: aceite ou desafie-me!</button>
    </div>
  </main>
  
  <style>
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: #f5f5f5;
      font-family: 'Arial', sans-serif;
    }
  
    .titulo {
      font-size: 3rem;
      color: #e63946;
    }
  
    .descricao {
      font-size: 1.2rem;
      color: #333;
      text-align: center;
      margin-top: 10px;
    }
  
    .botoes {
      margin-top: 30px;
    }
  
    .botao {
      background-color: #f1faee;
      color: #2a9d8f;
      padding: 15px 25px;
      margin: 10px;
      font-size: 1.1rem;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.3s;
    }
  
    .botao:hover {
      background-color: #a8dadc;
    }
  </style>
  
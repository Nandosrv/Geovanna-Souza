<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
  
    const dispatch = createEventDispatcher();
  
    let password = '';
    let error = false;
    let showPassword = false;
    let showHint = false;
  
    function validatePassword() {
      if (password === 'Geovanna weverton') {
        dispatch('unlock');
      } else {
        error = true;
      }
    }
  
    function toggleHint() {
      showHint = !showHint;
    }
  </script>
  
  <div class="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96" in:fade>
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-800">Digite a senha para continuar:</h2>
      
      <input
        type={showPassword ? 'text' : 'password'}
        bind:value={password}
        class="border p-2 mb-4 w-full rounded text-center"
        placeholder="Senha"
      />
      
      <button 
        type="button" 
        on:click={() => showPassword = !showPassword}
        class="text-blue-500 hover:text-blue-700 text-sm mb-2 block mx-auto"
      >
        {showPassword ? 'Esconder' : 'Ver'} Senha
      </button>
  
      {#if error}
        <p class="text-red-500 text-sm mb-2 text-center" transition:fade>Senha incorreta, tente novamente!</p>
      {/if}
  
      <button 
        type="button"
        on:click={toggleHint}
        class="text-blue-500 hover:text-blue-700 text-sm mb-2 block mx-auto"
      >
        {showHint ? 'Ocultar Dica' : 'Mostrar Dica'}
      </button>
      
      {#if showHint}
        <p class="text-sm text-center mt-2 italic text-gray-700" transition:fade>
          Dica: A senha é composta pelo nome completo de uma pessoa muito especial para mim. 💖
        </p>
      {/if}
  
      <button
        on:click={validatePassword}
        class="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 transition-colors"
      >
        Entrar
      </button>
    </div>
  </div>
  
  
<script lang="ts">
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';
  
    const promises = writable([
      "Sempre te ouvir com atenção",
      "Ser mais paciente",
      "Demonstrar meu amor todos os dias",
    ]);
  
    let newPromise = '';
  
    function addPromise() {
      if (newPromise.trim()) {
        promises.update(p => [...p, newPromise.trim()]);
        newPromise = '';
      }
    }
  </script>
  
  <div class="mt-8 p-4 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-pink-600">Mural de Promessas</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {#each $promises as promise, i}
        <div 
          class="bg-pink-100 p-3 rounded shadow text-pink-600"
          in:fly="{{ y: 20, duration: 300, delay: i * 100 }}"
        >
          {promise}
        </div>
      {/each}
    </div>
    <div class="flex">
      <input
        bind:value={newPromise}
        placeholder="Adicione uma nova promessa..."
        class=" text-pink-600 flex-grow border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button
        on:click={addPromise}
        class="bg-pink-500 text-black px-4 py-2 rounded-r hover:bg-pink-600 transition-colors"
      >
        Adicionar
      </button>
    </div>
  </div>
  
  
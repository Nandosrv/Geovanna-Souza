<script lang="ts">
    import { onMount } from 'svelte';
  
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    const targetDate = new Date('2025-02-02T00:00:00'); // Ajuste para a data desejada
  
    function updateCountdown() {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
  
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }
  
    onMount(() => {
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="mt-8 p-4 bg-white rounded-lg shadow-lg text-center">
    <h2 class="text-2xl font-bold mb-4 text-pink-600">Contagem Regressiva para Nosso Próximo Encontro</h2>
    <div class="flex justify-center space-x-4">
      <div class="text-3xl font-bold">
        <span class="text-black">{days}</span>
        <span class="text-sm text-gray-600">dias</span>
      </div>
      <div class="text-3xl font-bold">
        <span class="text-black">{hours}</span>
        <span class="text-sm text-gray-600">horas</span>
      </div>
      <div class="text-3xl font-bold">
        <span class="text-black">{minutes}</span>
        <span class="text-sm text-gray-600">min</span>
      </div>
      <div class="text-3xl font-bold">
        <span class="text-black">{seconds}</span>
        <span class="text-sm text-gray-600">seg</span>
      </div>
    </div>
  </div>
  
  
<script lang="ts">
  import { onMount } from 'svelte';

  let hearts: { x: number; y: number; size: number; speed: number }[] = [];

  function createHeart() {
    // Definindo que os corações só aparecem nas laterais (esquerda e direita)
    let x = Math.random() * window.innerHeight; // Posição ao longo da altura
    // Definindo que os corações começam nas laterais
    x = Math.random() > 0.5 ? -50 : window.innerWidth + 50; // Lado esquerdo (-50) ou lado direito (largura da tela + 50)
    
    return {
      x,
      y: Math.random() * window.innerHeight, // Posição vertical aleatória
      size: Math.random() * 20 + 10, // Tamanho do coração
      speed: Math.random() * 2 + 1, // Velocidade aleatória
    };
  }

  function animateHearts() {
    hearts = hearts.map(heart => ({
      ...heart,
      // Movimentação do coração em Y (para cima ou para baixo)
      y: heart.y + heart.speed,
      // Ajustando a movimentação horizontal, só para as laterais (não mudar muito o valor de X)
      x: heart.x + (heart.x < 0 ? 1 : -1) * (Math.random() * 0.5)
    })).filter(heart => heart.y < window.innerHeight);

    // Garantir que sempre haja um número de corações no site
    if (hearts.length < 50) {
      hearts = [...hearts, createHeart()];
    }

    requestAnimationFrame(animateHearts);
  }

  onMount(() => {
    for (let i = 0; i < 50; i++) {
      hearts = [...hearts, createHeart()];
    }
    animateHearts();
  });
</script>

<div class="z-[-1] fixed top-0 left-0 w-full h-full pointer-events-none">
  {#each hearts as heart}
    <div
      class="absolute z-0 text-pink-500 opacity-50"
      style="left: {heart.x}px; top: {heart.y}px; font-size: {heart.size}px;"
    >
      ❤️
    </div>
  {/each}
</div>

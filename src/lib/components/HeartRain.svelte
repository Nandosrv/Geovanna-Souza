<script lang="ts">
    import { onMount } from 'svelte';
  
    let hearts: { x: number; y: number; size: number; speed: number }[] = [];
  
    function createHeart() {
      return {
        x: Math.random() * window.innerWidth,
        y: -50,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1
      };
    }
  
    function animateHearts() {
      hearts = hearts.map(heart => ({
        ...heart,
        y: heart.y + heart.speed
      })).filter(heart => heart.y < window.innerHeight);
  
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
  
  <div class="z-[-1]  fixed top-0 left-0 w-full h-full pointer-events-none">
    {#each hearts as heart}
      <div
        class="absolute z-0 text-pink-500 opacity-50"
        style="left: {heart.x}px; top: {heart.y}px; font-size: {heart.size}px;"
      >
      ❤️
      </div>
    {/each}
  </div>
  
  
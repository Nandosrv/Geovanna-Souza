<script lang="ts">
  import { fly } from 'svelte/transition';
  import HeartRain from '../components/HeartRain.svelte';
</script>

<div class="relative z-0">
  <HeartRain />
  
  <div class="z-20 max-w-2xl mx-auto text-center">
    <h1 class="text-4xl font-bold mb-6 animate-pulse text-white">
      Desculpas, Geovanna! 💖
    </h1>
    
    <p class="text-xl mb-8">
      Quero pedir perdão por tudo e te mostrar o quanto você é especial para mim.
    </p>

    <div class="space-y-6 text-lg z-20 flex flex-col items-center">
      {#each [
        "Sei que palavras podem ser vazias às vezes, mas, ainda assim, me esforço para que as minhas mostrem o quanto me importo. Eu errei, Geovanna. Sei disso. E sei que nada do que eu diga pode apagar o que aconteceu. Mas quero, de todo o coração, pedir desculpas.",
        "Às vezes, nos perdemos em nossos próprios sentimentos e acabamos machucando quem mais amamos. Não foi minha intenção. Nunca foi. A dor que te causei dói mais em mim do que qualquer outra coisa. O que mais quero é que você me entenda, que eu possa mostrar meu arrependimento, e que, talvez, possamos começar a reconstruir o que foi quebrado.",
        "Geovanna, a vida é cheia de desafios, e em muitos momentos, eu falhei em te apoiar da maneira que você merece. Eu sou humano, com falhas e erros, mas quero que você saiba que estou tentando ser melhor. Melhor para mim e, principalmente, para você.",
        "Todos os momentos que passamos juntos, todas as memórias, eu as guardo com carinho. Mesmo quando tudo parecia difícil, você sempre foi uma luz na minha vida, e sei que não posso deixar isso se apagar.",
        "Se você me der a oportunidade, eu quero ser a pessoa que você merece, alguém que te apoia, te ama e te respeita em todos os momentos. Não sou perfeito, mas estou disposto a aprender e a me esforçar. Peço de todo o coração que me perdoe e me dê uma chance de provar o quanto você significa para mim."
      ] as text, i}
        <p in:fly="{{ y: 50, duration: 1000, delay: i * 300 }}" class="italic">
          {text}
        </p>
      {/each}
    </div>

    <p class="text-xl mt-8 italic">
      Cada gesto e cada palavra aqui são para te mostrar que me importo de verdade. 💫
    </p>
  </div>
  <div class="mt-6 text-center relative">
    <!-- Declaração romântica -->
    <p class="text-xl font-semibold mb-4 text-white h-[200px] ">
      "Eu não preciso de palavras grandes para te dizer o quanto você é importante para mim. Apenas saiba que, quando estou com você, o mundo parece mais bonito." 💖
    </p>
    
    <!-- Botão de WhatsApp -->
    <!-- <a href="https://wa.me/5566992514941" class="bg-green-500 mt-[100px] text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300 z-10 relative">
      💬 Me chama no WhatsApp
    </a>
   -->
    <!-- Emojis apontando -->
    <!-- <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-0 animate-bounce mt-[50px] ">
      <span class="text-white text-4xl">👇</span>
    </div> -->
  </div>
  
  
  
</div>

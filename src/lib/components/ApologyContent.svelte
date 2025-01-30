<script lang="ts">
    import { fly } from 'svelte/transition';
    import HeartRain from '../components/HeartRain.svelte';
  </script>
  
  <div class="relative">
    <HeartRain />
    
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-6 animate-pulse">
        Desculpas, Geovanna! 💖
      </h1>
      
      <p class="text-xl mb-8">
        Quero pedir perdão por tudo e te mostrar o quanto você é especial para mim.
      </p>
  
      <div class="space-y-6 text-lg">
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
  </div>
  
  
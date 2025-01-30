<script lang="ts">
    import { fly } from 'svelte/transition';
  
    const events = [
      { date: '2022-01-01', title: 'Nosso primeiro encontro', description: 'Aquele café inesquecível.' },
      { date: '2022-03-15', title: 'Primeiro beijo', description: 'Sob as estrelas no parque.' },
      { date: '2022-06-20', title: 'Viagem juntos', description: 'Nossa aventura na praia.' },
      { date: '2022-12-25', title: 'Primeiro Natal', description: 'Com nossas famílias reunidas.' },
      { date: '2023-02-14', title: 'Dia dos Namorados', description: 'Jantar romântico à luz de velas.' },
    ];
  </script>
  
  <div class="mt-8 p-4 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-pink-600">Nossa História</h2>
    <div class="relative">
      {#each events as event, i}
        <div class="mb-8 flex" in:fly="{{ y: 50, duration: 500, delay: i * 200 }}">
          <div class="flex flex-col items-center mr-4">
            <div class="bg-pink-500 rounded-full h-8 w-8 flex items-center justify-center">
              <span class="text-white text-sm">{i + 1}</span>
            </div>
            <div class="h-full w-0.5 bg-pink-300"></div>
          </div>
          <div>
            <div class="bg-pink-100 p-3 rounded shadow">
              <h3 class="font-bold text-pink-800">{event.title}</h3>
              <p class="text-sm text-gray-600">{event.date}</p>
              <p class="mt-2 text-gray-700">{event.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  
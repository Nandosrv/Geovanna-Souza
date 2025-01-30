<script lang="ts">
    const photos = [
      'https://source.unsplash.com/random/300x300?couple',
      'https://source.unsplash.com/random/300x300?love',
      'https://source.unsplash.com/random/300x300?romance',
      'https://source.unsplash.com/random/300x300?date',
      'https://source.unsplash.com/random/300x300?relationship',
      'https://source.unsplash.com/random/300x300?together',
    ];
  </script>
  
  <div class="mt-8 p-4 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-pink-600">Galeria</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {#each photos as photo}
        <img src={photo || "/placeholder.svg"} alt="Memory" class="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
      {/each}
    </div>
  </div>
  
  
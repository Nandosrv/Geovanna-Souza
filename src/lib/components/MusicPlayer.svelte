<script lang="ts">
    let audio: HTMLAudioElement;
    let isPlaying = false;
    let currentTime = 0;
    let duration = 0;
  
    function togglePlay() {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      isPlaying = !isPlaying;
    }
  
    function updateProgress() {
      currentTime = audio.currentTime;
      duration = audio.duration;
    }
  
    function seek(event: MouseEvent) {
      const progressBar = event.currentTarget as HTMLDivElement;
      const clickPosition = event.offsetX / progressBar.offsetWidth;
      audio.currentTime = clickPosition * audio.duration;
    }
  </script>
  
  <div class="mt-8 p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-4 text-pink-600">Our Song</h2>
    <audio
      bind:this={audio}
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ontimeupdate={updateProgress}
      onloadedmetadata={updateProgress}
    ></audio>
    <div class="flex items-center justify-between mb-2">
      <button
        onclick={togglePlay}
        class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div class="text-pink-600">
        {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} /
        {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
      </div>
    </div>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="bg-pink-200 h-2 rounded-full cursor-pointer"
      onclick={seek}
    >
      <div
        class="bg-pink-500 h-full rounded-full"
        style="width: {(currentTime / duration) * 100}%"
      ></div>
    </div>
  </div>
  
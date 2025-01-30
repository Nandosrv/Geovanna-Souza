<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import PasswordForm from '../lib/components/PasswordForm.svelte';
	import ApologyContent from '../lib/components/ApologyContent.svelte';
	import PhotoGallery from '../lib/components/PhotoGallery.svelte';
	import MusicPlayer from '../lib/components/MusicPlayer.svelte';
	import Timeline from '../lib/components/Timeline.svelte';
	import PromiseWall from '../lib/components/PromiseWall.svelte';
	import Countdown from '../lib/components/Countdown.svelte';
  
	let isUnlocked = false;
	let showGallery = false;
	let showMusicPlayer = false;
	let showTimeline = false;
	let showPromiseWall = false;
	let showCountdown = false;
  
	function handleUnlock() {
	  isUnlocked = true;
	}
  
	function toggleComponent(component: string) {
	  switch (component) {
		case 'gallery':
		  showGallery = !showGallery;
		  break;
		case 'musicPlayer':
		  showMusicPlayer = !showMusicPlayer;
		  break;
		case 'timeline':
		  showTimeline = !showTimeline;
		  break;
		case 'promiseWall':
		  showPromiseWall = !showPromiseWall;
		  break;
		case 'countdown':
		  showCountdown = !showCountdown;
		  break;
	  }
	}
  </script>
  
  {#if !isUnlocked}
	<div in:fade="{{ duration: 300 }}" out:fade="{{ duration: 300 }}">
	  <PasswordForm on:unlock={handleUnlock} />
	</div>
  {:else}
	<div class="min-h-screen bg-gradient-to-b from-pink-200 to-pink-400 flex flex-col items-center justify-center text-white overflow-hidden p-4">
	  <div in:fly="{{ y: 200, duration: 1000 }}" out:fade>
		<ApologyContent />
	  </div>
  
	  <div class="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
		<button
		  on:click={() => toggleComponent('gallery')}
		  class="bg-white text-pink-500 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
		>
		  {showGallery ? 'Esconder' : 'Mostrar'} Galeria de Fotos
		</button>
		<button
		  on:click={() => toggleComponent('musicPlayer')}
		  class="bg-white text-pink-500 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
		>
		  {showMusicPlayer ? 'Esconder' : 'Mostrar'} Player de Música
		</button>
		<button
		  on:click={() => toggleComponent('timeline')}
		  class="bg-white text-pink-500 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
		>
		  {showTimeline ? 'Esconder' : 'Mostrar'} Nossa História
		</button>
		<button
		  on:click={() => toggleComponent('promiseWall')}
		  class="bg-white text-pink-500 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
		>
		  {showPromiseWall ? 'Esconder' : 'Mostrar'} Mural de Promessas
		</button>
		<button
		  on:click={() => toggleComponent('countdown')}
		  class="bg-white text-pink-500 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
		>
		  {showCountdown ? 'Esconder' : 'Mostrar'} Contagem Regressiva
		</button>
	  </div>
  
	  {#if showGallery}
		<div in:fade out:fade>
		  <PhotoGallery />
		</div>
	  {/if}
  
	  {#if showMusicPlayer}
		<div in:fade out:fade>
		  <MusicPlayer />
		</div>
	  {/if}
  
	  {#if showTimeline}
		<div in:fade out:fade>
		  <Timeline />
		</div>
	  {/if}
  
	  {#if showPromiseWall}
		<div in:fade out:fade>
		  <PromiseWall />
		</div>
	  {/if}
  
	  {#if showCountdown}
		<div in:fade out:fade>
		  <Countdown />
		</div>
	  {/if}
	</div>
  {/if}
  
  
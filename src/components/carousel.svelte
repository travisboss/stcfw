<script lang="ts">
import { onMount } from 'svelte';

interface Slide {
  img: string;
  alt: string;
}

let slides: Slide[] = [
  {
    img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-25-1400x400.jpg',
    alt: ''
  },
  {
    img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-7-1400x400.jpg',
    alt: ''
  },
  {
    img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-18-1400x400.jpg',
    alt: ''
  },
  {
    img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-21-1400x400.jpg',
    alt: ''
  }
];

let currentIndex = 0;

onMount(() => {
  setInterval(() => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  }, 6000);
});
</script>
<div class="relative overflow-hidden w-full h-96">
  {#each slides as slide}
    <img
      class="absolute top-0 left-0 w-full h-full object-cover transition duration-500 ease-in-out transform"
      src={slide.img}
      alt={slide.alt}
      style={{ transform: `translateX(${100 * currentIndex}%)` }}
    />
  {/each}
</div>
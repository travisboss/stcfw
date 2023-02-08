<script lang="ts">
  import { onMount } from 'svelte';

  type Slide = {
    img: string;
    alt: string;
  };

  let slides: Slide[] = [
    {
      img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-25-1400x400.jpg',
      alt: '',
    },
    {
      img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-7-1400x400.jpg',
      alt: '',
    },
    {
      img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-18-1400x400.jpg',
      alt: '',
    },
    {
      img: 'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/02/Fireworks-21-1400x400.jpg',
      alt: '',
    },
  ];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
    }, 6000);

    return () => clearInterval(interval);
  });
</script>

<div class="carousel w-full">
  {#each slides as slide, index}
    {#if index === currentIndex}
      <img src={slide.img} alt={slide.alt} class="w-full aspect-auto" />
    {/if}
  {/each}
</div>
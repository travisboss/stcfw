<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	let slides = [
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

	import { Autoplay } from 'swiper';
</script>

<div class="carousel w-full">
	<Swiper
		autoplay={{
			delay: 6000
		}}
		modules={[Autoplay]}
		class="mySwiper"
	>
		{#each slides as { img, alt }}
			<SwiperSlide><img src={img} {alt} class="w-full aspect-auto" /></SwiperSlide>
		{/each}
	</Swiper>
</div>

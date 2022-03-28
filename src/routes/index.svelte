<script>
	import Countdown from '../components/countdown.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Countdown />

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-4xl">
			<h1 class="text-3xl font-bold text-blue-900">History, Celebration, Tradition</h1>
			<p class="py-6 text-blue-900">
				Countdown to Sunday July 4th 2021 Fireworks - the 75th consecutive year for us to light up
				the sky on the Fourth of July! Celebrate America's 245 birthday!
			</p>
			<div class="pb-1 pt-6 flex justify-center align-middle">
				<iframe
					class="w-full aspect-video"
					src="https://www.youtube-nocookie.com/embed/yF25m2HoYLE"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</div>
	</div>
</div>

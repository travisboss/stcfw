<script>
	import sponsorImage from '../components/assets/images/sponsors.jpg';
</script>

<svelte:head>
	<title>Sponsor</title>
</svelte:head>

<div class="flex justify-center pt-6">
	<img src={sponsorImage} alt="Fireworks Sponsor Banner" class="md:w-[60vw]" border="0" />
</div>

<div class="hero pt-6">
	<div class="hero-contnet">
		<div class="max-w-4xl">
			<p class="p-1">
				Funded entirely through private contributions, the St. Cloud July 4th Fireworks needs your
				help to continue.
			</p>

			<p class="p-1">
				Each year, private donations, corporate sponsorships, and volunteer efforts provide the
				support necessary to “Light up the Sky on the Fourth of July”.
			</p>

			<p class="p-1">
				In order to make this event a success, we need your assistance. All contributions large or
				small are graciously accepted. <span class="font-bold"
					>Checks can be made payable to Fireworks Fund</span
				>. See donate page on where to send check or contact us.
			</p>
			<h2 class="text-3xl mb-5">Donate to keep the tradition strong</h2>
		</div>
	</div>
</div>

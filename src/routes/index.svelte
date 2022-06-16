<script>
	import Countdown from '../components/countdown.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Countdown />

<div class="hero min-h-[81vh] md:min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-4xl">
			<h1 class="text-3xl font-bold text-blue-900">History, Celebration, Tradition</h1>
			<p class="py-6 text-blue-900">
				Countdown to Monday July 4th 2022 Fireworks - the 76th consecutive year for us to light up
				the sky on the Fourth of July! Celebrate America's 246 birthday of independence!
			</p>
			<div class="pb-1 pt-6 flex justify-center align-middle">
				<p>Congratulations 2022 Honorary Fireworks Commissioner - Dennis Schiffler!</p>
			</div>
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

			<div class="pb-1 pt-6 flex justify-center align-middle flex-col">
				<h2 class="text-2xl font-bold">Tending for a Cause</h2>
				<p class="font-bold">Wednesday June 29, 2022 5pm – 7pm</p>
				<p>
					Beaver Island Brewing Company, 216 6th Ave S, St Cloud, MN 56301, USA (<a
						class="link"
						href="https://www.google.com/maps/place/Beaver+Island+Brewing+Company/@45.5584191,-94.1591379,17z/data=!3m1!4b1!4m5!3m4!1s0x52b4607ed3630d21:0xf8e7ef9be3a35e9!8m2!3d45.5584207!4d-94.1569506?hl=en"
						>map</a
					>)
				</p>
				<p>
					Come join us at Beaver Island Brewing Company and Help support St. Cloud July 4th
					Fireworks by enjoying great beverages, food and friends.
				</p>
			</div>
			<div class="pb-1 pt-6 flex justify-center align-middle flex-col">
				<h2 class="text-2xl font-bold">Help Support the Fireworks at Coborns</h2>
				<p>
					Round-up By <i>rounding up</i> your purchase total to the nearest dollar at area Coborn's stores
					now through July 4th!
				</p>
			</div>
			<div class="pb-1 pt-6 flex justify-center align-middle flex-col">
				<h2 class="text-2xl font-bold">Live music at Wilson Park</h2>
				<p>Come see the HoneyBadgers and MN13s</p>
				<a class="link" href="https://www.stcloudsubaru.com/">Sponsored by St. Cloud Subaru</a>
				<div class="flex justify-center">
					<img
						class="aspect-auto w-1/3"
						src="https://i.ibb.co/YdBzy0f/St-Cloud-Subaru-Duo-Logo.png"
						alt="St. Cloud Subaru Logo"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

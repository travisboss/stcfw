<script>
	let events = [
		{
			header: 'Fireworks!',
			body: 'St. Cloud Fireworks Committee presents central Minnesota′s Fourth of July Fireworks display.  2022 is the 76th consecutive year for the areas July 4th Fireworks. The 2022 St. Cloud Area Fireworks will be one of the largest pyrotechnics display in central Minnesota on July 4th.'
		},
		{
			header: 'Hester Park',
			body: 'Located on the west bank of the Mississippi River, between 9th and 12th street north, Hester Park provides a family friendly environment for enjoying the entire day. Plenty of green space makes this park a local favorite and a great place to bring the blanket and picnic basket for a day of relaxation.'
		},
		{
			header: 'Wilson Park',
			body: 'Just off Riverside Drive and across the river from Hester Park, Wilson Park affords spectators with fantastic views of the Fireworks display. Wilson Park also plays host to members of the United States military and their families in a special ‘Reserved Seating’ area. No reservations needed, simply bring a chair, show your military ID and enjoy the show!'
		},
		{
			header: 'Mississippi River',
			body: 'Boaters and pleasure craft users can take advantage of spectacular viewing from the Mississippi River. Watch for the Marking Buoys and Public Safety Water Craft for approved viewing areas.',
			image:
				'https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/05/locationRiverMap.jpg',
			alt: 'map of location'
		}
	];
</script>

<svelte:head>
	<title>Location</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-left">
		<div class="max-w-4xl">
			{#each events as event}
				<h2 class="text-5xl font-bold text-red-500 capitalize">{event.header}</h2>
				<p class="py-6">{event.body}</p>
				{#if event.image}
					<img class="aspect-auto" src={event.image} alt={event.alt} />
				{/if}
			{/each}
			<h2 class="pt-6 text-4xl font-bold text-blue-800 capitalize">Fireworks at 10:00pm</h2>
			<p class="py-6">
				St. Cloud Fireworks Committee presents central Minnesota′s Fourth of July Fireworks display.
				2022 is the 76th consecutive year for the areas July 4th Fireworks and America’s 246th
				birthday. The 2022 Fireworks will be one of the largest pyrotechnics display in central
				Minnesota on July 4th. Our Fireworks show will be synchronized to a specially selected music
				soundtrack. Great viewing areas are available on both sides of the Mississippi River, in
				Wilson and Hester parks, along 5th Avenue North, and other parts of the community.
			</p>
			<h2 class="pt-6 text-3xl font-bold capitalize">
				Life, Liberty, and the Pursuit of Happiness!
			</h2>
			<h2 class="pt-6 text-3xl font-bold capitalize">Happy Fourth of July 2022!</h2>
		</div>
	</div>
</div>

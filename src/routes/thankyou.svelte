<script>
	let lists = [
		{ item: 'U.S. Army National Guard' },
		{ item: 'St. Cloud Police Department' },
		{ item: 'St. Cloud Fire Department' },
		{ item: 'Sauk Rapids Police Department' },
		{ item: 'Stearns County Sheriff' },
		{ item: 'Benton County Sheriff' },
		{ item: 'Gold Cross' },
		{ item: 'St. Cloud Parks Department' },
		{ item: 'St. Cloud Public Works' },
		{ item: 'St. Cloud Streets Department' },
		{ item: '1st Combined Arms Battalion, 194th Armored Regiment' },
		{ item: 'MN DNR' },
		{ item: 'All Event Volunteers' },
		{ item: 'St. Cloud Police Benefits Association' },
		{ item: 'CentraCare' }
	];
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-xl">
			<h2 class="py-6 text-2xl">Thank You to all our Public Safety/Law Enforcement!</h2>
			<ul class="list-disc">
				{#each lists as list}
					<li>{list.item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

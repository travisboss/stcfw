<script>
	let donations = [
		{ name: 'Donation Information' },
		{ name: 'Mailing Address:' },
		{ name: 'St Cloud Fireworks Committee' },
		{ name: '& Schlenner Wenner & Company' },
		{ name: 'Attn: Pat Plamann' },
		{ name: '630 Roosevelte Road, Suite 201' },
		{ name: 'St. Cloud Mn 56301' }
	];
</script>

<footer id="footer" class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="items-center grid-flow-col">
		<div class="donations md:pl-14">
			{#each donations as donation}
				<p>{donation.name}</p>
			{/each}
			<p>Email: <a href="mailto:scfireworks@gmail.com">scfireworks@gmail.com</a></p>
		</div>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end" />
</footer>

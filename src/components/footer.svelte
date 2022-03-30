<script>
	let donations = [
		{ name: 'Donation Information' },
		{ name: 'Mailing Address:' },
		{ name: 'St. Cloud Fireworks Committee' },
		{ name: '% Schlenner Wenner & Company' },
		// { name: 'Attn: Pat Plamann' },
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
			<p>
				Email: <a class="link link-hover" href="mailto:scfireworks@gmail.com"
					>scfireworks@gmail.com</a
				>
			</p>
		</div>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<form action="https://www.paypal.com/donate" method="post" target="_top">
			<input type="hidden" name="hosted_button_id" value="RDE23C6EHJSVN" />

			<input
				type="image"
				src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
				border="0"
				name="submit"
				title="PayPal - The safer, easier way to pay online!"
				alt="Donate with PayPal button"
			/>

			<img
				alt=""
				border="0"
				src="https://www.paypal.com/en_US/i/scr/pixel.gif"
				width="1"
				height="1"
			/>
		</form>
	</div>
</footer>

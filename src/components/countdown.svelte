<script>
	import { onMount } from 'svelte';

	onMount(() => {
		function countdown() {
			const today = new Date();
			var offerDate = new Date('04 july 2023 22:00:00');

			//If offer ends reset to new value
			if (today.getSeconds() == offerDate.getSeconds()) {
				offerDate = resetOfferDate();
			}

			//offerTime will have the total millseconds
			const offerTime = offerDate - today;

			// 1 sec= 1000 ms
			// 1 min = 60 sec
			// 1 hour = 60 mins
			// 1 day = 24 hours
			const offerDays = Math.floor(offerTime / (1000 * 60 * 60 * 24));
			const offerHours = Math.floor((offerTime / (1000 * 60 * 60)) % 24);
			const offerMins = Math.floor((offerTime / (1000 * 60)) % 60);
			const offerSecs = Math.floor((offerTime / 1000) % 60);

			const days_el = document.querySelector('#days_left');
			days_el.textContent = offerDays;
			const hours_el = document.querySelector('#hours_left');
			hours_el.textContent = offerHours;
			const mins_el = document.querySelector('#mins_left');
			mins_el.textContent = offerMins;
			const secs_el = document.querySelector('#secs_left');
			secs_el.textContent = offerSecs;
		}

		function resetOfferDate() {
			const futureDate = new Date();
			futureDate.setDate(futureDate.getDate() + 15);
			return futureDate;
		}

		setInterval(countdown, 1000);
	});
</script>

<div class="wrap flex justify-center bg-base-200">
	<div class="timer flex flex-col md:flex-row text-center gap-0 md:gap-8 -m-1 text-5xl">
		<div class="days p-3">
			<span id="days_left"> 0</span>
			days
		</div>
		<div class="hours p-3">
			<span id="hours_left"> 0 </span>
			hours
		</div>
		<div class="mins p-3">
			<span id="mins_left"> 0 </span>
			mins
		</div>
		<div class="secs p-3">
			<span id="secs_left"> 0 </span>
			secs
		</div>
	</div>
</div>

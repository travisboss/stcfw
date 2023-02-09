<script lang="ts">
  import { onMount } from 'svelte';

  type CountdownValues = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  let endDate = new Date("2023-07-04T22:00:00");
  let currentDate = new Date();
  let remainingTime: number = endDate.getTime() - currentDate.getTime();
  let countdownValues: CountdownValues = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  let showCountdown = true;

  const updateTime = () => {
    currentDate = new Date();
    remainingTime = endDate.getTime() - currentDate.getTime();

    if (remainingTime < 0) {
      showCountdown = false;
      if (currentDate.getHours() === 0 && currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
        endDate.setFullYear(endDate.getFullYear() + 1);
        showCountdown = true;
      }
    } else {
      countdownValues = {
        days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
      };
    }
  };

  onMount(() => {
    setInterval(updateTime, 1000);
  });
</script>

<div class="flex justify-center items-center h-[10rem] bg-base-200">
  {#if showCountdown}
    <h1 class="text-4xl font-bold text-center">
      {countdownValues.days} days {countdownValues.hours} hours {countdownValues.minutes} minutes {countdownValues.seconds} seconds
    </h1>
  {:else}
    <h1 class="text-xl font-bold text-center">Happy 4th of July at 10pm</h1>
  {/if}
</div>

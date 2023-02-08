<script lang="ts">
  import { onMount } from 'svelte';

  type CountdownValues = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  let endDate = new Date("2023-07-04T22:00:00");
  let remainingTime: number = 0;
  let countdownValues: CountdownValues = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const updateTime = () => {
    let currentDate = new Date();
    remainingTime = endDate.getTime() - currentDate.getTime();
    if (remainingTime < 0) {
      endDate.setFullYear(endDate.getFullYear() + 1);
      remainingTime = endDate.getTime() - currentDate.getTime();
    }

    countdownValues = {
      days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
      hours: Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
    };
  };

  onMount(() => {
    setInterval(updateTime, 1000);
  });
</script>

<style>
  h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }
  .countdown-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }
  .countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1em;
  }
  .countdown-value {
    font-size: 3em;
    font-weight: bold;
	margin-bottom: 1rem
  }
  .countdown-label {
    font-size: 1.2em;
  }
</style>

<div class="countdown-container flex h-full">
  <div class="countdown-item">
    <div class="countdown-value">{countdownValues.days}</div>
    <div class="countdown-label">Days</div>
  </div>
  <div class="countdown-item">
    <div class="countdown-value">{countdownValues.hours}</div>
    <div class="countdown-label">Hours</div>
  </div>
  <div class="countdown-item">
    <div class="countdown-value">{countdownValues.minutes}</div>
    <div class="countdown-label">Minutes</div>
  </div>
  <div class="countdown-item">
    <div class="countdown-value">{countdownValues.seconds}</div>
    <div class="countdown-label">Seconds</div>
  </div>
</div>
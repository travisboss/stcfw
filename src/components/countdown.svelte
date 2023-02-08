<script>
  let endDate = new Date("2023-07-04T22:00:00");
  let remainingTime = 0;

  const updateTime = () => {
    let currentDate = new Date();
    remainingTime = endDate - currentDate;
  };

  setInterval(updateTime, 1000);
</script>

<style>
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
</style>

<h1>Time remaining: {Math.floor(remainingTime / 1000 / 60 / 60)} hours {Math.floor(remainingTime / 1000 / 60) % 60} minutes {Math.floor(remainingTime / 1000) % 60} seconds</h1>

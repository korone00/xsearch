<script>
  import { onMount } from 'svelte';
  import { Bar } from 'svelte-chartjs';
	import chartjs from 'chart.js@2.6.0';

	let chartCanvas;

  let visitData = [5, 10, 8, 12, 6]; // 예시 방문 횟수 데이터-> 동적으로 수정해야할 부분

 onMount(() => {
		const ctx = chartCanvas.getContext('2d');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
				datasets: [
					{
						label: 'Visits',
						data: [120, 300, 450, 200, 500, 350, 250],
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgba(75, 192, 192, 1)',
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});

  let jsonData = [
    { minio_uuid: '123', pred: 'A', score: 0.8, timestamp: '2023-08-13' },
    { minio_uuid: '124', pred: 'B', score: 0.6, timestamp: '2023-08-14' },
    { minio_uuid: '125', pred: 'C', score: 0.9, timestamp: '2023-08-15' }
  ]; // 예시 검색 기록 데이터-> 동적으로 수정해야할 부분
</script>

<main>
  <!-- Visit Count Graph -->
  <section class="visit-section">
    <h2>방문 횟수 그래프</h2>
    <canvas bind:this={chartCanvas}></canvas>
  </section>

  <!-- User search history -->
  <section class="search-history-section">
    <h2>검색 기록</h2>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>pred</th>
          <th>score</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        {#each jsonData as item}
          <tr>
            <td>{item.minio_uuid}</td>
            <td>{item.pred}</td>
            <td>{item.score}</td>
            <td>{item.timestamp}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
</main>

<style>
  .table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e2e8f0;
    font-family: Arial, sans-serif;
    color: #333;
  }

  th, td {
    padding: 12px 20px;
    border: 1px solid #e2e8f0;
    text-align: left;
  }

  th {
    background-color: #f7fafc;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #e2e8f0;
  }
</style>

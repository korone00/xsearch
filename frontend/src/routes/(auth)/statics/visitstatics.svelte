<script>
	import { onMount } from 'svelte';
	import chartjs from 'chart.js@2.6.0';

	let chartCanvas;

	onMount(() => {
		const ctx = chartCanvas.getContext('2d');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
</script>

<div class="chart-container">
	<canvas bind:this={chartCanvas} width="400" height="200" />
</div>

<style>
	.chart-container {
		max-width: 400px;
		margin: 0 auto;
	}
</style>

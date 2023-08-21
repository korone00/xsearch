<script lang="ts">
	import { onMount } from 'svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { chart } from 'svelte-apexcharts';
	// import ApexCharts from 'apexcharts';
	export let data;

	let ApexCharts: any;

	let areaChart1: HTMLElement | null = null;
	let areaChart2: HTMLElement | null = null;
	let areaChart3: HTMLElement | null = null;

	let donutChart1: HTMLElement | null = null;
	let columnChart1: HTMLElement | null = null;
	let canRender = false;

	const loadApexCharts = async () => {
		const module = await import('apexcharts');
		ApexCharts = module.default;
	};

	// Chart for visitors
	let lineoptions = {
		chart: {
			type: 'area',
			height: '300%',
			width: '100%',
			background: '#fff',
			animations: {
				enabled: true,
				easing: 'easeinout',
				speed: 800,
				animateGradually: {
					enabled: true,
					delay: 150
				}
			}
		},

		colors: ['#9D4CCC', '#E91E63', '#9C27B0'],
		series: [
			{
				name: 'visit',
				data: [12, 18, 23, 19, 29, 43, 39]
			}
		],
		xaxis: {
			categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			style: {
				colors: [],
				fontSize: '20px',
				fontFamily: 'Helvetica, Arial, sans-serif',
				fontWeight: 500,
				cssClass: 'apexcharts-xaxis-label'
			}
		},
		title: {
			text: 'Visitors this week',
			align: 'center',
			margin: 10,
			offsetX: 0,
			offsetY: 0,
			floating: false,
			style: {
				fontSize: '26px',
				fontWeight: 'bold',
				fontFamily: undefined,
				color: '#263238'
			}
		},
		grid: {
			show: true
		}
	};

	const getChartOptions = () => {
		return {
			series: [52.8, 26.8, 20.4],
			colors: ['#1C64F2', '#16BDCA', '#9061F9'],
			chart: {
				height: 420,
				width: '100%',
				type: 'pie'
			},
			stroke: {
				colors: ['white'],
				lineCap: ''
			},
			plotOptions: {
				pie: {
					labels: {
						show: true
					},
					size: '100%',
					dataLabels: {
						offset: -25
					}
				}
			},
			labels: ['Direct', 'Organic search', 'Referrals'],
			dataLabels: {
				enabled: true,
				style: {
					fontFamily: 'Inter, sans-serif'
				}
			},
			legend: {
				position: 'bottom',
				fontFamily: 'Inter, sans-serif'
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return value + '%';
					}
				}
			},
			xaxis: {
				labels: {
					formatter: function (value) {
						return value + '%';
					}
				},
				axisTicks: {
					show: false
				},
				axisBorder: {
					show: false
				}
			}
		};
	};

	// ApexCharts options and config
	let signupoption = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Organic',
				color: '#1A56DB',
				data: [
					{ x: 'Mon', y: 231 },
					{ x: 'Tue', y: 122 },
					{ x: 'Wed', y: 63 },
					{ x: 'Thu', y: 421 },
					{ x: 'Fri', y: 122 },
					{ x: 'Sat', y: 323 },
					{ x: 'Sun', y: 111 }
				]
			},
			{
				name: 'Social media',
				color: '#FDBA8C',
				data: [
					{ x: 'Mon', y: 232 },
					{ x: 'Tue', y: 113 },
					{ x: 'Wed', y: 341 },
					{ x: 'Thu', y: 224 },
					{ x: 'Fri', y: 522 },
					{ x: 'Sat', y: 411 },
					{ x: 'Sun', y: 243 }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '320px',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%',
				borderRadiusApplication: 'end',
				borderRadius: 8
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 0,
			colors: ['transparent']
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -14
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};

	onMount(async () => {
		await loadApexCharts();
		canRender = true;

		let options = {
			chart: {
				height: '250px',
				maxWidth: '100%',
				type: 'area',
				fontFamily: 'Inter, sans-serif',
				dropShadow: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			tooltip: {
				enabled: true,
				x: {
					show: false
				}
			},
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 0.55,
					opacityTo: 0,
					shade: '#1C64F2',
					gradientToColors: ['#1C64F2']
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 6
			},
			grid: {
				show: false,
				strokeDashArray: 4,
				padding: {
					left: 2,
					right: 2,
					top: 0
				}
			},
			series: [
				{
					name: 'New users',
					data: [4, 8, 6, 12, 9, 16],
					color: '#1A56DB'
				}
			],
			xaxis: {
				categories: [
					'01 February',
					'02 February',
					'03 February',
					'04 February',
					'05 February',
					'06 February',
					'07 February'
				],
				labels: {
					show: false
				},
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				}
			},
			yaxis: {
				show: false
			}
		};

		if (document.getElementById('pie-chart') && typeof ApexCharts !== 'undefined') {
			const chart = new ApexCharts(document.getElementById('pie-chart'), getChartOptions());
			chart.render();
		}

		if (areaChart1 && typeof ApexCharts !== 'undefined') {
			const chart1 = new ApexCharts(areaChart1, getChartOptions);
			chart1.render();
		}

		if (areaChart2 && typeof ApexCharts !== 'undefined') {
			const chart2 = new ApexCharts(areaChart2, signupoption);
			chart2.render();
		}

		if (areaChart3 && typeof ApexCharts !== 'undefined') {
			const chart3 = new ApexCharts(areaChart3, options);
			chart3.render();
		}
	});
</script>

<main>
	<div class="m-20">
		<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500"
				>Xsearch</span
			> Statistics
		</h1>
		<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
			Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
			long-term value and drive economic growth.
		</p>
	</div>
</main>

<!-- C -->
<div class="bg-gray-50 p-5">
	<div class="text-sm text-gray-500 dark:text-gray-400 m-10">
		<div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4">
			<section>
				<div use:chart={lineoptions} />
			</section>
		</div>
	</div>
</div>

<!-- Donut Chart -->
<div class="flex justify-between flex-wrap">
	<div
		class="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-0 md:m-0"
		style="width: calc(33.33% - 12px);"
	>
		<div class="flex justify-between items-start w-full">
			<div class="flex-col items-center">
				<div class="flex items-center mb-1">
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
						Website traffic
					</h5>
				</div>
			</div>
		</div>

		<!-- Line Chart -->
		<div class="py-6" id="pie-chart" />

		<div
			class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
		>
			<div class="flex justify-between items-center pt-5" />
		</div>
	</div>

	<div
		class="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-0 md:m-0"
		style="width: calc(33.33% - 12px);"
	>
		<div class="flex justify-between">
			<div>
				<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
					Data Type
				</h5>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">Number of SignUp</p>
			</div>
			<div
				class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"
			>
				%
				<svg
					class="w-3 h-3 ml-1"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13V1m0 0L1 5m4-4 4 4"
					/>
				</svg>
			</div>
		</div>
		<div bind:this={areaChart2} />
	</div>

	<div
		class="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-0 md:m-0"
		style="width: calc(33.33% - 12px);"
	>
		<div class="flex justify-between">
			<div>
				<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Sign Up</h5>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">Number of New Users</p>
			</div>
			<div
				class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"
			>
				12%
				<svg
					class="w-3 h-3 ml-1"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13V1m0 0L1 5m4-4 4 4"
					/>
				</svg>
			</div>
		</div>
		<div bind:this={areaChart3} />
	</div>
</div>

<!-- Table -->
<div id="grid">
	<div
		class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
	/>

	<h3 class="text-3xl font-bold dark:text-white m-10">검색기록</h3>

	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3"> Id </th>
					<th scope="col" class="px-6 py-3"> Pred </th>
					<th scope="col" class="px-6 py-3"> Score </th>
					<th scope="col" class="px-6 py-3"> Timestamp </th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Apple MacBook Pro 17"
					</th>
					<td class="px-6 py-4"> Silver </td>
					<td class="px-6 py-4"> Laptop </td>
					<td class="px-6 py-4"> $2999 </td>
				</tr>
				<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Microsoft Surface Pro
					</th>
					<td class="px-6 py-4"> White </td>
					<td class="px-6 py-4"> Laptop PC </td>
					<td class="px-6 py-4"> $1999 </td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Magic Mouse 2
					</th>
					<td class="px-6 py-4"> Black </td>
					<td class="px-6 py-4"> Accessories </td>
					<td class="px-6 py-4"> $99 </td>
				</tr>
				<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Google Pixel Phone
					</th>
					<td class="px-6 py-4"> Gray </td>
					<td class="px-6 py-4"> Phone </td>
					<td class="px-6 py-4"> $799 </td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2023 <a href="#" class="hover:underline">Xsearch</a>. All Rights Reserved.
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">About</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
			</li>
			<li>
				<a href="#" class="hover:underline">Contact</a>
			</li>
		</ul>
	</div>
</footer>

<style>
	h1,
	h3,
	p {
		margin: 20px;
	}
	.flex-wrap {
		display: flex;
		flex-wrap: wrap;
	}
</style>

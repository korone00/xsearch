<script lang="ts">
	import { onMount, createEventDispatcher, afterUpdate } from 'svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { chart } from 'svelte-apexcharts';
	export const data = null;

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

	// afterUpdate(() => {
	// 		let donutOptions = {
	// 			series: [35.1, 23.5, 2.4, 5.4],
	// 			colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
	// 			chart: {
	// 				height: 500,
	// 				width: 500,
	// 				type: 'donut'
	// 			},
	// 			stroke: {
	// 				colors: ['transparent'],
	// 				lineCap: ''
	// 			},
	// 			plotOptions: {
	// 				pie: {
	// 					donut: {
	// 						labels: {
	// 							show: true,
	// 							name: {
	// 								show: true,
	// 								fontFamily: 'Inter, sans-serif',
	// 								offsetY: 20
	// 							},
	// 							total: {
	// 								showAlways: true,
	// 								show: true,
	// 								label: 'Unique visitors',
	// 								fontFamily: 'Inter, sans-serif',
	// 								formatter: function (w: any) {
	// 									const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
	// 										return a + b;
	// 									}, 0);
	// 									return `${sum}k`;
	// 								}
	// 							},
	// 							value: {
	// 								show: true,
	// 								fontFamily: 'Inter, sans-serif',
	// 								offsetY: -20,
	// 								formatter: function (value: any) {
	// 									return value + 'k';
	// 								}
	// 							}
	// 						},
	// 						size: '80%'
	// 					}
	// 				}
	// 			},
	// 			grid: {
	// 				padding: {
	// 					top: -2
	// 				}
	// 			},
	// 			labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
	// 			dataLabels: {
	// 				enabled: false
	// 			},
	// 			legend: {
	// 				position: 'bottom',
	// 				fontFamily: 'Inter, sans-serif'
	// 			},
	// 			yaxis: {
	// 				labels: {
	// 					formatter: function (value: any) {
	// 						return value + 'k';
	// 					}
	// 				}
	// 			},
	// 			xaxis: {
	// 				labels: {
	// 					formatter: function (value: any) {
	// 						return value + 'k';
	// 					}
	// 				},
	// 				axisTicks: {
	// 					show: false
	// 				},
	// 				axisBorder: {
	// 					show: false
	// 				}
	// 			}
	// 		};

	// 		if (donutChart1 && typeof ApexCharts !== 'undefined') {
	// 			const chart4 = new ApexCharts(donutChart1, donutOptions);
	// 		}
	// 	});

	let donutOption1 = {
		series: [1.0, 0.1],
		// '#16BDCA',, '#E74694'
		colors: ['#1C64F2', '#FDBA8C'],
		chart: {
			height: 500,
			width: 500,
			type: 'donut'
		},
		stroke: {
			colors: ['transparent'],
			lineCap: ''
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							show: true,
							fontFamily: 'Inter, sans-serif',
							offsetY: 20
						},
						total: {
							showAlways: true,
							show: true,
							label: 'Used Images',
							fontFamily: 'Inter, sans-serif',
							formatter: function (w: any) {
								const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
									return a + b;
								}, 0);
								return `${sum}` + 'K';
							}
						},
						value: {
							show: true,
							fontFamily: 'Inter, sans-serif',
							offsetY: -20,
							formatter: function (value: any) {
								return value + 'K';
							}
						}
					},
					size: '80%'
				}
			}
		},
		grid: {
			padding: {
				top: -2
			}
		},
		labels: ['Train', 'Test'],
		dataLabels: {
			enabled: false
		},
		legend: {
			position: 'bottom',
			fontFamily: 'Inter, sans-serif'
		},
		yaxis: {
			labels: {
				formatter: function (value: any) {
					return value + ' K';
				}
			}
		},
		xaxis: {
			labels: {
				formatter: function (value: any) {
					return value + ' K';
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

	// function initializeChart2() {
	// 	let columnOption1 = {
	// 		colors: ['#1A56DB', '#FDBA8C'],
	// 		series: [
	// 			{
	// 				name: 'Organic',
	// 				color: '#1A56DB',
	// 				data: [
	// 					{ x: 'Mon', y: 231 },
	// 					{ x: 'Tue', y: 122 },
	// 					{ x: 'Wed', y: 63 },
	// 					{ x: 'Thu', y: 421 },
	// 					{ x: 'Fri', y: 122 },
	// 					{ x: 'Sat', y: 323 },
	// 					{ x: 'Sun', y: 111 }
	// 				]
	// 			},
	// 			{
	// 				name: 'Social media',
	// 				color: '#FDBA8C',
	// 				data: [
	// 					{ x: 'Mon', y: 232 },
	// 					{ x: 'Tue', y: 113 },
	// 					{ x: 'Wed', y: 341 },
	// 					{ x: 'Thu', y: 224 },
	// 					{ x: 'Fri', y: 522 },
	// 					{ x: 'Sat', y: 411 },
	// 					{ x: 'Sun', y: 243 }
	// 				]
	// 			}
	// 		],
	// 		chart: {
	// 			type: 'bar',
	// 			height: '320px',
	// 			fontFamily: 'Inter, sans-serif',
	// 			toolbar: {
	// 				show: false
	// 			}
	// 		},
	// 		plotOptions: {
	// 			bar: {
	// 				horizontal: false,
	// 				columnWidth: '70%',
	// 				borderRadiusApplication: 'end',
	// 				borderRadius: 8
	// 			}
	// 		},
	// 		tooltip: {
	// 			shared: true,
	// 			intersect: false,
	// 			style: {
	// 				fontFamily: 'Inter, sans-serif'
	// 			}
	// 		},
	// 		states: {
	// 			hover: {
	// 				filter: {
	// 					type: 'darken',
	// 					value: 1
	// 				}
	// 			}
	// 		},
	// 		stroke: {
	// 			show: true,
	// 			width: 0,
	// 			colors: ['transparent']
	// 		},
	// 		grid: {
	// 			show: false,
	// 			strokeDashArray: 4,
	// 			padding: {
	// 				left: 2,
	// 				right: 2,
	// 				top: -14
	// 			}
	// 		},
	// 		dataLabels: {
	// 			enabled: false
	// 		},
	// 		legend: {
	// 			show: false
	// 		},
	// 		xaxis: {
	// 			floating: false,
	// 			labels: {
	// 				show: true,
	// 				style: {
	// 					fontFamily: 'Inter, sans-serif',
	// 					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
	// 				}
	// 			},
	// 			axisBorder: {
	// 				show: false
	// 			},
	// 			axisTicks: {
	// 				show: false
	// 			}
	// 		},
	// 		yaxis: {
	// 			show: false
	// 		},
	// 		fill: {
	// 			opacity: 1
	// 		}
	// 	};

	// 	if (columnChart1 && typeof ApexCharts !== 'undefined') {
	// 		const chart5 = new ApexCharts(columnChart1, columnOptions);
	// 		chart5.render();
	// 	}
	// }

	let columnOption1 = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'VGG16',
				color: '#1A56DB',
				data: [
					{ x: 'accuracy', y: 71.5 },
					{ x: 'FLOPs', y: 15.5 },
					{ x: 'Latency', y: 10 },
					{ x: 'Memory', y: 530 },
					{ x: 'Robustness', y: 99 },
					{ x: 'Convergence', y: 120 }
				]
			},
			{
				name: 'Resnet50',
				color: '#FDBA8C',
				data: [
					{ x: 'accuracy', y: 76 },
					{ x: 'FLOPs', y: 3.8 },
					{ x: 'Latency', y: 6 },
					{ x: 'Memory', y: 100 },
					{ x: 'Robustness', y: 99.5 },
					{ x: 'Convergence', y: 90 }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '400px',
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

		let option1 = {
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
					name: 'L2 distance',
					data: [11.1, 14.6, 19.6, 28.2, 33.4],
					color: '#1A56DB'
				}
			],
			xaxis: {
				categories: [
					'TOP1',
					'TOP2',
					'TOP3',
					'TOP4',
					'TOP5',
					
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

		let option2 = {
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
					name: 'Time',
					data: [0.2, 0.5, 1.3, 6.9, 7.6, 7.8],
					color: '#1A56DB'
				}
			],
			xaxis: {
				categories: [
					'Image Input',
					'Access Backend',
					'Access Engine',
					'Calculate Similarity',
					'Return Backend',
					'Image Output',
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

		let option3 = {
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
					name: 'Usage of Memory',
					data: [0.2, 0.5, 3.2, 6.9, 2.8, 2.5],
					color: '#1A56DB'
				}
			],
			xaxis: {
				categories: [
					'Image Input',
					'Access Backend',
					'Access Engine',
					'Calculate Similarity',
					'Return Backend',
					'Image Output',
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

		if (areaChart1 && typeof ApexCharts !== 'undefined') {
			const chart1 = new ApexCharts(areaChart1, option1);
			chart1.render();
		}

		if (areaChart2 && typeof ApexCharts !== 'undefined') {
			const chart2 = new ApexCharts(areaChart2, option2);
			chart2.render();
		}

		if (areaChart3 && typeof ApexCharts !== 'undefined') {
			const chart3 = new ApexCharts(areaChart3, option3);
			chart3.render();
		}
	});
</script>

<div class="justify-center items-center">
	<div class="m-20">
		<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
				>Xsearch</span
			> Overview
		</h1>
		<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10 mb-5">
			<span class="text-2xl font-extrabold text-black">Xsearch</span> can find all similar images for
			a particular image. Identification of similar images also greatly helps protect the copyright of
			images, and you can also check the copyright before using them.
		</p>
		<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
			<span class="text-2xl font-extrabold text-black">Xsearch</span> is superior to any other similar
			platform in terms of accuracy, speed and memory.
		</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center p-5">
		<div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-3 md:m-5">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
						Accuracy
					</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Accuracy of Xsearch</p>
				</div>
				<!-- <div
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
				</div> -->
			</div>
			<div bind:this={areaChart1} />
		</div>
		<div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-3 md:m-5">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Speed</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Speed of Xsearch</p>
				</div>
				<!-- <div
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
				</div> -->
			</div>
			<div bind:this={areaChart2} />
		</div>
		<div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-5 md:m-5">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Memory</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Memory of Xsearch</p>
				</div>
				<!-- <div
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
				</div> -->
			</div>
			<div bind:this={areaChart3} />
		</div>
	</div>
	<div class="ml-5 md:ml-10">
		<Tabs style="underline">
			<TabItem open>
				<div slot="title" class="flex items-center gap-2">
					<Icon name="user-circle-solid" size="sm" />
					Data
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Data:</b>
					refers to data stored and used in a database of 'xsearch' to use the similiar image search
					function.
				</p>

				<section class="bg-white m-5 md:m-7">
					<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
						<div class="mx-auto max-w-3xl text-center">
							<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Data</h2>

							<p class="mt-4 text-gray-500 sm:text-xl">
								A total of 1,000 images of data are stored in the database, with 10 images each
								belonging to 100 different categories for reverse image search.
							</p>
						</div>

						<div class="mt-8 sm:mt-12">
							<dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500">Total</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">1K</dd>
								</div>

								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500">Category</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">0.1K</dd>
								</div>

								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500">Segment</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">10</dd>
								</div>
							</dl>
						</div>
					</div>
				</section>
				<div class="justify-center items-center m-5 md:m-7">
					<div class="flex">
						<div
							class="rounded-lg shadow bg-white dark:bg-gray-800 p-4 md:p-6 shadow-xl mb-3 md:mb-5"
							style="display:inline-block"
						>
							<div class="flex justify-between mb-3">
								<div class="flex justify-center items-center">
									<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white pr-1">
										Data Statistics
									</h5>
									<svg
										data-popover-target="chart-info"
										data-popover-placement="bottom"
										class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ml-1"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
										/>
									</svg>
									<div
										data-popover
										id="chart-info"
										role="tooltip"
										class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
									>
										<div class="p-3 space-y-2">
											<h3 class="font-semibold text-gray-900 dark:text-white">
												Activity growth - Incremental
											</h3>
											<p>
												Report helps navigate cumulative growth of community activities. Ideally,
												the chart should have a growing trend, as stagnating chart signifies a
												significant decrease of community activity.
											</p>
											<h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
											<p>
												For each date bucket, the all-time volume of activities is calculated. This
												means that activities in period n contain all activities up to period n,
												plus the activities generated by your community in period.
											</p>
											<a
												href="#"
												class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
												>Read more <svg
													class="w-2 h-2 ml-1.5"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 6 10"
												>
													<path
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="m1 9 4-4-4-4"
													/>
												</svg></a
											>
										</div>
										<div data-popper-arrow />
									</div>
								</div>
								<div>
									<button
										type="button"
										data-tooltip-target="data-tooltip"
										data-tooltip-placement="bottom"
										class="hidden sm:inline-flex items-center justify-center text-gray-500 w-8 h-8 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
										><svg
											class="w-3.5 h-3.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 18"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
											/>
										</svg><span class="sr-only">Download data</span>
									</button>
									<div
										id="data-tooltip"
										role="tooltip"
										class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
									>
										Download CSV
										<div class="tooltip-arrow" data-popper-arrow />
									</div>
								</div>
							</div>
							<!-- Line Chart -->

							<!-- <div class="py-6" bind:this={donutChart1} /> -->
							<div use:chart={donutOption1} />
						</div>
						<div class="w-px mx-8 bg-gray-200 border-0 m-2" />

						<div class="m-7 mt-0 w-full">
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%]">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-600"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-blue-600" />
											<span class="h-6 w-0.5 rounded-full bg-blue-600" />
											<span class="h-4 w-0.5 rounded-full bg-blue-600" />
											<span class="h-6 w-0.5 rounded-full bg-blue-600" />
											<span class="h-8 w-0.5 rounded-full bg-blue-600" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											#1
										</strong>

										<h3 class="mt-4 text-lg font-xl sm:text-xl">Latest</h3>

										<p class="mt-1 text-sm text-gray-700">
											used the latest image dataset of towhee library
										</p>
									</div>
								</div>
							</article>
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-600"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-blue-600" />
											<span class="h-6 w-0.5 rounded-full bg-blue-600" />
											<span class="h-4 w-0.5 rounded-full bg-blue-600" />
											<span class="h-6 w-0.5 rounded-full bg-blue-600" />
											<span class="h-8 w-0.5 rounded-full bg-blue-600" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											#2
										</strong>

										<h3 class="mt-4 text-lg font-xl sm:text-xl">Diversity</h3>

										<p class="mt-1 text-sm text-gray-700">
											included images that were general and corresponded to various categories.
										</p>
									</div>
								</div>
							</article>
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-600"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-blue-600" />
											<span class="h-6 w-0.5 rounded-full bg-blue-600" />
											<span class="h-4 w-0.5 rounded-full bg-blue-600" />
											<span class="h-6 w-0.5 rounded-full bg-blue-600" />
											<span class="h-8 w-0.5 rounded-full bg-blue-600" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											#3
										</strong>

										<h3 class="mt-4 text-lg font-xl sm:text-xl">High-resolution</h3>

										<p class="mt-1 text-sm text-gray-700">
											More accurate image features can be extracted through image datasets with high
											resolution.
										</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-2">
					<Icon name="grid-solid" size="sm" />
					Preprocess
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Preprocess:</b>
					a process of refining images before training as a model in earnest.
				</p>

				<section class="bg-white dark:bg-gray-900 mt-5 md:mt-10">
					<!-- animate-pulse -->
					<div class="container px-6 py-10 mx-auto">
						<h1
							class="mx-auto text-2xl md:text-4xl font-extrabold text-center mt-5 md:mt-10 mb-5 md:mb-10"
						>
							Preprocess
						</h1>

						<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
							Image preprocessing is the process of analyzing and adjusting the original image to
							enhance its quality or prepare it for data analysis.
						</p>
						<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
							This step involves various techniques such as noise removal, resizing, and contrast
							adjustment, playing a crucial role in improving analytical accuracy.
						</p>

						<div
							class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3"
						>
							<article class="group">
								<img
									alt="decoding image"
									src="/RGB-image-consisting-of-three-layers.png"
									class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
								/>

								<div class="p-4">
									<a href="#">
										<h3 class="text-lg text-gray-900 text-center font-semibold md:mt-2">
											Decoding
										</h3>
									</a>

									<p class="mt-2 line-clamp-10 text-sm/relaxed text-gray-500">
										Image decoding is the process of converting encoded pixel data into its original
										visual components, namely the red (R), green (G), and blue (B) channels. By
										decoding, the distinct RGB values for each pixel are retrieved, reconstructing
										the full-color image for display or processing.
									</p>
								</div>
							</article>

							<article class="group">
								<img
									alt="resizing"
									src="/resize.jpg"
									class="h-56 w-full rounded-xl object-fit:contain shadow-xl transition group-hover:grayscale-[50%]"
								/>

								<div class="p-4">
									<a href="#">
										<h3 class="text-lg text-gray-900 text-center font-semibold md:mt-2">
											Resizing
										</h3>
									</a>

									<p class="mt-2 line-clamp-10 text-sm/relaxed text-gray-500">
										Image resizing refers to the process of altering the dimensions of an image,
										either by enlarging or reducing its size. This adjustment maintains the image's
										content while fitting it to a desired resolution or aspect ratio. We worked to
										size all images to 224 x 224.
									</p>
								</div>
							</article>

							<article class="group">
								<img
									alt="augmentation"
									src="/augmentation.jpg"
									class="h-56 w-full rounded-xl object-fit:contain shadow-xl transition group-hover:grayscale-[50%]"
								/>

								<div class="p-4">
									<a href="#">
										<h3 class="text-lg text-gray-900 text-center font-semibold md:mt-2">
											Augmentaion
										</h3>
									</a>

									<p class="mt-2 line-clamp-10 text-sm/relaxed text-gray-500">
										Image augmentation is a technique used to artificially expand the diversity of a
										dataset by applying various transformations to the images. Specifically, We
										utilized rotation and horizontal flipping to enhance the variety of our dataset.
									</p>
								</div>
							</article>
						</div>
					</div>
				</section>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-2">
					<Icon name="adjustments-vertical-solid" size="sm" />
					Training
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Training:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>

				<section class="bg-white dark:bg-gray-900 mt-5 md:mt-10">
					<!-- animate-pulse -->
					<div class="container px-6 py-10 mx-auto">
						<h1
							class="mx-auto text-2xl md:text-4xl font-extrabold text-center mt-5 md:mt-10 mb-5 md:mb-10"
						>
							Training
						</h1>

						<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
							Training is conducted by extracting image feature vectors through the Resnet50 model.
						</p>
						<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
							The Resnet50 used was pre-trained using a total of 1.2m ImageNet data, and a total of
							25m parameters were used.
						</p>
						<div class="mt-8 sm:mt-12">
							<div class="m-2 md:m-6">
								<dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
									<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt class="order-last text-lg font-medium text-gray-500 mt-3">layer</dt>

										<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">50</dd>
									</div>

									<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt class="order-last text-lg font-medium text-gray-500 mt-3">parameter</dt>

										<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">25M</dd>
									</div>

									<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt class="order-last text-lg font-medium text-gray-500 mt-3">
											Pretrained Images
										</dt>

										<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">1.2M</dd>
									</div>
								</dl>
							</div>
						</div>

						<section>
							<div class="mx-auto max-w-screen-2xl px-4 pt-16 sm:px-6 lg:px-8">
								<div class="grid grid-cols-1 lg:h-1/2 lg:grid-cols-2">
									<div class="relative z-10 lg:py-16 hidden lg:flex items-center justify-center">
										<div class="h-50 sm:h-64 lg:h-full bg-white">
											<div class="max-w-sm w-full dark:bg-gray-800 p-4 md:p-6">
												<div
													class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
												>
													<div class="flex items-center">
														<div
															class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3"
														>
															<svg
																fill="#000000"
																width="30px"
																height="30px"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
																data-name="Layer 1"
																><path
																	d="M21,20H4v-.54l5-5,3.8,3.8a1,1,0,0,0,1.41,0l7.5-7.5a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-6.8,6.8-3.79-3.8a1,1,0,0,0-1.41,0L4,16.63V11.46l5-5,2.8,2.8a1,1,0,0,0,1.41,0L18,4.47l2.19,2.19a1,1,0,0,0,1.41-1.42L18.69,2.35a1,1,0,0,0-1.41,0l-4.8,4.8L9.69,4.35a1,1,0,0,0-1.41,0L4,8.63V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z"
																/></svg
															>
														</div>
														<div>
															<h5
																class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
															>
																VGG16 vs Resnet50
															</h5>
															<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
																performance comparison
															</p>
														</div>
													</div>
												</div>

												<div class="grid grid-cols-2">
													<dl class="flex items-center">
														<dt class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
															VGG16:
														</dt>
														<dd class="text-gray-900 text-sm dark:text-white font-semibold">
															2014
														</dd>
													</dl>
													<dl class="flex items-center justify-end">
														<dt class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
															Resnet50:
														</dt>
														<dd class="text-gray-900 text-sm dark:text-white font-semibold">
															2015
														</dd>
													</dl>
												</div>
												<!-- {#if isVisible2}
													<div bind:this={columnChart1} />
												{/if} -->
												<div use:chart={columnOption1} />
											</div>
										</div>
									</div>

									<div class="relative flex items-center">
										<span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16" />

										<div class="p-8 sm:p-10 lg:p-16">
											<h2 class="text-2xl font-bold sm:text-3xl">Resnet50</h2>

											<p class="mt-4 text-gray-600">
												ResNet50, a variant of the ResNet (Residual Network) architecture, was
												introduced by Kaiming He and his team in their 2015 paper titled "Deep
												Residual Learning for Image Recognition". The primary innovation behind the
												ResNet architecture is the use of "residual blocks", which help combat the
												vanishing gradient problem and enable the training of much deeper neural
												networks.
											</p>

											<a
												href="https://arxiv.org/pdf/1512.03385v1.pdf"
												class="mt-8 inline-block rounded border border-blue-100 bg-blue-300 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-100"
											>
												More
											</a>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="bg-white py-24 sm:py-32">
							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<div class="mx-auto max-w-2xl lg:text-center">
									<h2 class="text-base font-semibold leading-7 text-blue-600">Explanation</h2>
									<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										Why we used Resnet50
									</p>
									<p class="mt-6 text-lg leading-8 text-gray-600">explain features of Resnet50</p>
									<p class="text-lg leading-8 text-gray-600">
										and why Resnet50 was used to extract feature vectors from images
									</p>
								</div>
								<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
									<dl
										class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
									>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
												>
													<svg
														width="30px"
														height="30px"
														viewBox="0 0 64 64"
														xmlns="http://www.w3.org/2000/svg"
														stroke-width="3"
														stroke="#000000"
														fill="none"
														><circle cx="34.52" cy="11.43" r="5.82" /><circle
															cx="53.63"
															cy="31.6"
															r="5.82"
														/><circle cx="34.52" cy="50.57" r="5.82" /><circle
															cx="15.16"
															cy="42.03"
															r="5.82"
														/><circle cx="15.16" cy="19.27" r="5.82" /><circle
															cx="34.51"
															cy="29.27"
															r="4.7"
														/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93" /><line
															x1="38.6"
															y1="15.59"
															x2="49.48"
															y2="27.52"
														/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49" /><line
															x1="18.36"
															y1="24.13"
															x2="30.91"
															y2="46.01"
														/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63" /><line
															x1="17.34"
															y1="36.63"
															x2="31.37"
															y2="16.32"
														/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1" /><line
															x1="39.22"
															y1="29.8"
															x2="47.81"
															y2="30.45"
														/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74" /></svg
													>
												</div>
												Deep Hierarchical Feature Learning
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												ResNet50, with its depth of around 50 layers, learns a hierarchy of
												features. The initial layers capture basic image structures like edges and
												colors, while deeper layers encapsulate higher-level patterns. When using
												ResNet50 for image vector extraction, these deep layers provide rich,
												discriminative embeddings that encapsulate the essence of the image.
											</dd>
										</div>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
												>
													<svg
														width="30px"
														height="30px"
														viewBox="0 0 64 64"
														xmlns="http://www.w3.org/2000/svg"
														stroke-width="3"
														stroke="#000000"
														fill="none"
														><circle cx="34.52" cy="11.43" r="5.82" /><circle
															cx="53.63"
															cy="31.6"
															r="5.82"
														/><circle cx="34.52" cy="50.57" r="5.82" /><circle
															cx="15.16"
															cy="42.03"
															r="5.82"
														/><circle cx="15.16" cy="19.27" r="5.82" /><circle
															cx="34.51"
															cy="29.27"
															r="4.7"
														/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93" /><line
															x1="38.6"
															y1="15.59"
															x2="49.48"
															y2="27.52"
														/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49" /><line
															x1="18.36"
															y1="24.13"
															x2="30.91"
															y2="46.01"
														/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63" /><line
															x1="17.34"
															y1="36.63"
															x2="31.37"
															y2="16.32"
														/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1" /><line
															x1="39.22"
															y1="29.8"
															x2="47.81"
															y2="30.45"
														/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74" /></svg
													>
												</div>
												Residual Blocks for Stable Embeddings
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												The core innovation in ResNet50 is its use of residual blocks with skip
												connections. These allow the model to learn identity functions and bypass
												certain layers, ensuring that even the deeper layers receive unadulterated
												gradient information. This design results in stable and robust embeddings,
												ideal for tasks like image retrieval.
											</dd>
										</div>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
												>
													<svg
														width="30px"
														height="30px"
														viewBox="0 0 64 64"
														xmlns="http://www.w3.org/2000/svg"
														stroke-width="3"
														stroke="#000000"
														fill="none"
														><circle cx="34.52" cy="11.43" r="5.82" /><circle
															cx="53.63"
															cy="31.6"
															r="5.82"
														/><circle cx="34.52" cy="50.57" r="5.82" /><circle
															cx="15.16"
															cy="42.03"
															r="5.82"
														/><circle cx="15.16" cy="19.27" r="5.82" /><circle
															cx="34.51"
															cy="29.27"
															r="4.7"
														/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93" /><line
															x1="38.6"
															y1="15.59"
															x2="49.48"
															y2="27.52"
														/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49" /><line
															x1="18.36"
															y1="24.13"
															x2="30.91"
															y2="46.01"
														/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63" /><line
															x1="17.34"
															y1="36.63"
															x2="31.37"
															y2="16.32"
														/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1" /><line
															x1="39.22"
															y1="29.8"
															x2="47.81"
															y2="30.45"
														/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74" /></svg
													>
												</div>
												Transferability of Pretrained Features
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												ResNet50 models, often pretrained on large datasets like ImageNet, can
												capture a vast range of visual concepts. When used for image vector
												extraction, these pretrained weights act as a strong feature extractor. The
												embeddings derived often generalize well, even to images outside the
												original training dataset, enhancing the model's utility in diverse
												scenarios.
											</dd>
										</div>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
												>
													<svg
														width="30px"
														height="30px"
														viewBox="0 0 64 64"
														xmlns="http://www.w3.org/2000/svg"
														stroke-width="3"
														stroke="#000000"
														fill="none"
														><circle cx="34.52" cy="11.43" r="5.82" /><circle
															cx="53.63"
															cy="31.6"
															r="5.82"
														/><circle cx="34.52" cy="50.57" r="5.82" /><circle
															cx="15.16"
															cy="42.03"
															r="5.82"
														/><circle cx="15.16" cy="19.27" r="5.82" /><circle
															cx="34.51"
															cy="29.27"
															r="4.7"
														/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93" /><line
															x1="38.6"
															y1="15.59"
															x2="49.48"
															y2="27.52"
														/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49" /><line
															x1="18.36"
															y1="24.13"
															x2="30.91"
															y2="46.01"
														/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63" /><line
															x1="17.34"
															y1="36.63"
															x2="31.37"
															y2="16.32"
														/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1" /><line
															x1="39.22"
															y1="29.8"
															x2="47.81"
															y2="30.45"
														/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74" /></svg
													>
												</div>
												Global Average Pooling for Compact Representation
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												Instead of using fully connected layers, ResNet50 typically employs Global
												Average Pooling (GAP) at the end. GAP consolidates the spatial information,
												resulting in a compact vector while preserving the crucial spatial
												hierarchies learned throughout the network. This compactness is advantageous
												when storing or comparing large numbers of image embeddings.
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</section>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-2">
					<Icon name="clipboard-solid" size="sm" />
					Prediction
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Prediction:</b>
					In the process of prediction, the distance between images is calculated using the L2 formula
				</p>
				<div class="container px-6 py-10 mx-auto">
					<h1
						class="mx-auto text-2xl md:text-4xl font-extrabold text-center mt-5 md:mt-10 mb-5 md:mb-10"
					>
						Prediction
					</h1>

					<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
						Calculate the distance between image vectors to find the closest image to image X with
						high similarity
					</p>

					<div class="mt-8 sm:mt-12">
						<div class="m-2 md:m-6">
							<dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500 mt-3">Image Vector</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">1024</dd>
								</div>

								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500 mt-3">distance</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">L2</dd>
								</div>

								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500 mt-3">Similarity</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">X</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>

				<div class="justify-center items-center m-5 md:m-7">
					<div class="flex">
						<div
							class="rounded-lg shadow bg-white dark:bg-gray-800 p-4 md:p-6 shadow-xl mb-3 md:mb-5 hidden xl:inline-block"
						>
							<div class="flex justify-between mb-3">
								<div class="flex justify-center items-center">
									<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white pr-1">
										Computation
									</h5>
								</div>
							</div>

							<div class="h-56 w-full relative">
								<img
									src="/AdobeStock_358888294.jpeg"
									alt="l2 distance"
									class="h-full w-full rounded-xl object-fit:contain shadow-lg transition group-hover:grayscale-[50%]"
								/>

								<div class="absolute inset-30 bg-white bg-opacity-60 mt-5">
									<p class="mb-3 text-gray-500">
										Difference Calculation: For each pair of corresponding points or dimensions in
										two vectors, compute the difference between their values.
									</p>
									<p class="mb-3 text-gray-500">
										Squaring: Square each of the differences obtained in the first step.
									</p>
									<p class="mb-3 text-gray-500">
										Summation and Square Root: Sum up all the squared differences from the second
										step and then take the square root of this sum to get the Euclidean distance.
									</p>
								</div>
							</div>
							<!-- 
							<div class="h-auto w-full">
							
								<img
									src="/AdobeStock_358888294.jpeg"
									alt="l2 distance"
									class="h-56 w-full rounded-xl object-fit:contain shadow-lg transition group-hover:grayscale-[50%]"
								/>

								
								<div class="h-56 w-full flex items-center justify-center bg-white">
									Difference Calculation: For each pair of corresponding points or dimensions in two
									vectors, compute the difference between their values. Squaring: Square each of the
									differences obtained in the first step. Summation and Square Root: Sum up all the
									squared differences from the second step and then take the square root of this sum
									to get the Euclidean distance.
								</div>
							</div> -->
						</div>

						<!-- <div class="py-6" bind:this={donutChart1} /> -->
						<div class="flex">
							<div class="w-px mx-8 bg-gray-200 border-0 m-2" />

							<div class="m-7 mt-0 w-full">
								<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%]">
									<div class="flex items-start sm:gap-8">
										<div
											class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-600"
											aria-hidden="true"
										>
											<div class="flex items-center gap-1">
												<span class="h-8 w-0.5 rounded-full bg-blue-600" />
												<span class="h-6 w-0.5 rounded-full bg-blue-600" />
												<span class="h-4 w-0.5 rounded-full bg-blue-600" />
												<span class="h-6 w-0.5 rounded-full bg-blue-600" />
												<span class="h-8 w-0.5 rounded-full bg-blue-600" />
											</div>
										</div>

										<div>
											<strong
												class="rounded border border-indigo-500 bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
											>
												Feature
											</strong>

											<h3 class="mt-4 text-lg font-medium sm:text-xl">Image Vector : 1024</h3>

											<p class="mt-1 text-sm text-gray-700">
												use 1024 vectors to represent the features of the image
											</p>
										</div>
									</div>
								</article>
								<article
									class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8"
								>
									<div class="flex items-start sm:gap-8">
										<div
											class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-600"
											aria-hidden="true"
										>
											<div class="flex items-center gap-1">
												<span class="h-8 w-0.5 rounded-full bg-blue-600" />
												<span class="h-6 w-0.5 rounded-full bg-blue-600" />
												<span class="h-4 w-0.5 rounded-full bg-blue-600" />
												<span class="h-6 w-0.5 rounded-full bg-blue-600" />
												<span class="h-8 w-0.5 rounded-full bg-blue-600" />
											</div>
										</div>

										<div>
											<strong
												class="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
											>
												Distance
											</strong>

											<h3 class="mt-4 text-lg font-medium sm:text-xl">L2 : Euclidean distance</h3>

											<p class="mt-1 text-sm text-gray-700">
												The Euclidean distance is used to calculate the distance between the image
												and the image
											</p>
										</div>
									</div>
								</article>
								<article
									class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8"
								>
									<div class="flex items-start sm:gap-8">
										<div
											class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-600"
											aria-hidden="true"
										>
											<div class="flex items-center gap-1">
												<span class="h-8 w-0.5 rounded-full bg-blue-600" />
												<span class="h-6 w-0.5 rounded-full bg-blue-600" />
												<span class="h-4 w-0.5 rounded-full bg-blue-600" />
												<span class="h-6 w-0.5 rounded-full bg-blue-600" />
												<span class="h-8 w-0.5 rounded-full bg-blue-600" />
											</div>
										</div>

										<div>
											<strong
												class="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
											>
												Similarity
											</strong>

											<h3 class="mt-4 text-lg font-medium sm:text-xl">X : image similarity</h3>

											<p class="mt-1 text-sm text-gray-700">
												The calculated distance is used to determine the similarity of the image
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</TabItem>
		</Tabs>
	</div>
</div>

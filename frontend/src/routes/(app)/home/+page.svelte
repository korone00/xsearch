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
					data: [6500, 6418, 6456, 6526, 6356, 6456],
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

		if (areaChart1 && typeof ApexCharts !== 'undefined') {
			const chart1 = new ApexCharts(areaChart1, options);
			chart1.render();
		}

		if (areaChart2 && typeof ApexCharts !== 'undefined') {
			const chart2 = new ApexCharts(areaChart2, options);
			chart2.render();
		}

		if (areaChart3 && typeof ApexCharts !== 'undefined') {
			const chart3 = new ApexCharts(areaChart3, options);
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
		<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-3 md:m-5">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
						Accuracy
					</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Accuracy of Xsearch</p>
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
			<div bind:this={areaChart1} />
		</div>
		<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-3 md:m-5">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Speed</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Speed of Xsearch</p>
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
			<div bind:this={areaChart2} />
		</div>
		<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 m-3 md:m-5">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Memory</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Memory of Xsearch</p>
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
	<div class="ml-5 md:ml-10">
		<Tabs style="underline">
			<TabItem open>
				<div slot="title" class="flex items-center gap-2">
					<Icon name="user-circle-solid" size="sm" />
					Data
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Data:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>

				<section class="bg-white m-5 md:m-7">
					<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
						<div class="mx-auto max-w-3xl text-center">
							<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Data</h2>

							<p class="mt-4 text-gray-500 sm:text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum
								labore provident impedit esse recusandae facere libero harum sequi.
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
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-4 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											Episode #101
										</strong>

										<h3 class="mt-4 text-lg font-medium sm:text-xl">
											<a href="" class="hover:underline"> General</a>
										</h3>

										<p class="mt-1 text-sm text-gray-700">General</p>
									</div>
								</div>
							</article>
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-4 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											Episode #101
										</strong>

										<h3 class="mt-4 text-lg font-medium sm:text-xl">
											<a href="" class="hover:underline"> General</a>
										</h3>

										<p class="mt-1 text-sm text-gray-700">General</p>
									</div>
								</div>
							</article>
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-4 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											Episode #101
										</strong>

										<h3 class="mt-4 text-lg font-medium sm:text-xl">
											<a href="" class="hover:underline"> General</a>
										</h3>

										<p class="mt-1 text-sm text-gray-700">General</p>
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
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
									alt="Lava"
									src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
									alt="Lava"
									src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
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
									alt="Lava"
									src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
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
							Image preprocessing is the process of analyzing and adjusting the original image to
							enhance its quality or prepare it for data analysis.
						</p>
						<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
							This step involves various techniques such as noise removal, resizing, and contrast
							adjustment, playing a crucial role in improving analytical accuracy.
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
																class="w-6 h-6 text-gray-500 dark:text-gray-400"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="currentColor"
																viewBox="0 0 20 19"
															>
																<path
																	d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
																/>
																<path
																	d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"
																/>
															</svg>
														</div>
														<div>
															<h5
																class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
															>
																3.4k
															</h5>
															<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
																Leads generated per week
															</p>
														</div>
													</div>
													<div>
														<span
															class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
														>
															<svg
																class="w-2.5 h-2.5 mr-1.5"
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
															42.5%
														</span>
													</div>
												</div>

												<div class="grid grid-cols-2">
													<dl class="flex items-center">
														<dt class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
															Money spent:
														</dt>
														<dd class="text-gray-900 text-sm dark:text-white font-semibold">
															$3,232
														</dd>
													</dl>
													<dl class="flex items-center justify-end">
														<dt class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
															Conversion rate:
														</dt>
														<dd class="text-gray-900 text-sm dark:text-white font-semibold">
															1.2%
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
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
												molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores
												provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat
												dicta.
											</p>

											<a
												href="#"
												class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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
									<h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
									<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										Everything you need to deploy your app
									</p>
									<p class="mt-6 text-lg leading-8 text-gray-600">
										Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse
										eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit
										nunc.
									</p>
								</div>
								<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
									<dl
										class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
									>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
												>
													<svg
														class="h-6 w-6 text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
														/>
													</svg>
												</div>
												Push to deploy
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper
												morbi. Odio urna massa nunc massa.
											</dd>
										</div>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
												>
													<svg
														class="h-6 w-6 text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
														/>
													</svg>
												</div>
												SSL certificates
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem
												sodales gravida quam turpis enim lacus amet.
											</dd>
										</div>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
												>
													<svg
														class="h-6 w-6 text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
														/>
													</svg>
												</div>
												Simple queues
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis
												auctor congue commodo diam neque.
											</dd>
										</div>
										<div class="relative pl-16">
											<dt class="text-base font-semibold leading-7 text-gray-900">
												<div
													class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
												>
													<svg
														class="h-6 w-6 text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
														/>
													</svg>
												</div>
												Advanced security
											</dt>
											<dd class="mt-2 text-base leading-7 text-gray-600">
												Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac
												quis. Id hac maecenas ac donec pharetra eget.
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>
				<div class="container px-6 py-10 mx-auto">
					<h1
						class="mx-auto text-2xl md:text-4xl font-extrabold text-center mt-5 md:mt-10 mb-5 md:mb-10"
					>
						Prediction
					</h1>

					<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
						Image preprocessing is the process of analyzing and adjusting the original image to
						enhance its quality or prepare it for data analysis.
					</p>
					<p class="mx-auto mt-2 text-gray-500 text-sm text-center">
						This step involves various techniques such as noise removal, resizing, and contrast
						adjustment, playing a crucial role in improving analytical accuracy.
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
							class="rounded-lg shadow bg-white dark:bg-gray-800 p-4 md:p-6 shadow-xl mb-3 md:mb-5"
							style="display:inline-block"
						>
							<div class="flex justify-between mb-3">
								<div class="flex justify-center items-center">
									<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white pr-1">
										Website traffic
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

							<!-- <div class="py-6" bind:this={donutChart1} /> -->
							<div use:chart={donutOption1} />
						</div>
						<div class="w-px mx-8 bg-gray-200 border-0 m-2" />

						<div class="m-7 mt-0 w-full">
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%]">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-4 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											Episode #101
										</strong>

										<h3 class="mt-4 text-lg font-medium sm:text-xl">
											<a href="" class="hover:underline"> General</a>
										</h3>

										<p class="mt-1 text-sm text-gray-700">General</p>
									</div>
								</div>
							</article>
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-4 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											Episode #101
										</strong>

										<h3 class="mt-4 text-lg font-medium sm:text-xl">
											<a href="" class="hover:underline"> General</a>
										</h3>

										<p class="mt-1 text-sm text-gray-700">General</p>
									</div>
								</div>
							</article>
							<article class="rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8 h-[30%] mt-3 md:mt-8">
								<div class="flex items-start sm:gap-8">
									<div
										class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
										aria-hidden="true"
									>
										<div class="flex items-center gap-1">
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-4 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-6 w-0.5 rounded-full bg-indigo-500" />
											<span class="h-8 w-0.5 rounded-full bg-indigo-500" />
										</div>
									</div>

									<div>
										<strong
											class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white hidden md:block"
										>
											Episode #101
										</strong>

										<h3 class="mt-4 text-lg font-medium sm:text-xl">
											<a href="" class="hover:underline"> General</a>
										</h3>

										<p class="mt-1 text-sm text-gray-700">General</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</TabItem>
		</Tabs>
	</div>
</div>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	export let data;
	import ApexCharts from 'apexcharts';

	let areaChart1: HTMLElement | null = null;
	let areaChart2: HTMLElement | null = null;
	let areaChart3: HTMLElement | null = null;

	let donutChart1: HTMLElement | null = null;

	onMount(() => {
		let donutOptions = {
			series: [35.1, 23.5, 2.4, 5.4],
			colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
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
								label: 'Unique visitors',
								fontFamily: 'Inter, sans-serif',
								formatter: function (w: any) {
									const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
										return a + b;
									}, 0);
									return `${sum}k`;
								}
							},
							value: {
								show: true,
								fontFamily: 'Inter, sans-serif',
								offsetY: -20,
								formatter: function (value: any) {
									return value + 'k';
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
			labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
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
						return value + 'k';
					}
				}
			},
			xaxis: {
				labels: {
					formatter: function (value: any) {
						return value + 'k';
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
			const chart = new ApexCharts(areaChart1, options);
			chart.render();
		}

		if (areaChart2 && typeof ApexCharts !== 'undefined') {
			const chart = new ApexCharts(areaChart2, options);
			chart.render();
		}

		if (areaChart3 && typeof ApexCharts !== 'undefined') {
			const chart = new ApexCharts(areaChart3, options);
			chart.render();
		}

		if (donutChart1 && typeof ApexCharts !== 'undefined') {
			const chart = new ApexCharts(donutChart1, donutOptions);
			chart.render();
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
							<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
								Trusted by eCommerce Businesses
							</h2>

							<p class="mt-4 text-gray-500 sm:text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum
								labore provident impedit esse recusandae facere libero harum sequi.
							</p>
						</div>

						<div class="mt-8 sm:mt-12">
							<dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
								</div>

								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500">Official Addons</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
								</div>

								<div class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
									<dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

									<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
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

							<div>
								<div class="flex" id="devices">
									<div class="flex items-center mr-4">
										<input
											id="desktop"
											type="checkbox"
											value="desktop"
											class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											for="desktop"
											class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>Desktop</label
										>
									</div>
									<div class="flex items-center mr-4">
										<input
											id="tablet"
											type="checkbox"
											value="tablet"
											class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											for="tablet"
											class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>Tablet</label
										>
									</div>
									<div class="flex items-center mr-4">
										<input
											id="mobile"
											type="checkbox"
											value="mobile"
											class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											for="mobile"
											class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>Mobile</label
										>
									</div>
								</div>
							</div>

							<!-- Line Chart -->

							<div class="py-6" bind:this={donutChart1} />

							<div
								class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
							>
								<div class="flex justify-between items-center pt-5">
									<!-- Button -->
									<button
										id="dropdownDefaultButton"
										data-dropdown-toggle="lastDaysdropdown"
										data-dropdown-placement="bottom"
										class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
										type="button"
									>
										Last 7 days
										<svg
											class="w-2.5 m-2.5 ml-1.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</button>
									<div
										id="lastDaysdropdown"
										class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
									>
										<ul
											class="py-2 text-sm text-gray-700 dark:text-gray-200"
											aria-labelledby="dropdownDefaultButton"
										>
											<li>
												<a
													href="#"
													class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>Yesterday</a
												>
											</li>
											<li>
												<a
													href="#"
													class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>Today</a
												>
											</li>
											<li>
												<a
													href="#"
													class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>Last 7 days</a
												>
											</li>
											<li>
												<a
													href="#"
													class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>Last 30 days</a
												>
											</li>
											<li>
												<a
													href="#"
													class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>Last 90 days</a
												>
											</li>
										</ul>
									</div>
									<a
										href="#"
										class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
									>
										Traffic analysis
										<svg
											class="w-2.5 h-2.5 ml-1.5"
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
										</svg>
									</a>
								</div>
							</div>
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
					<b>Settings:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>
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
			</TabItem>
		</Tabs>
	</div>
</div>

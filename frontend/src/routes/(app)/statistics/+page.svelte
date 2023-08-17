<script lang="ts">
	import { onMount } from 'svelte';
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { chart } from "svelte-apexcharts";
	import ApexCharts from 'apexcharts';
	export let data;

  
    let areaChart1: HTMLElement | null = null;
    let areaChart2: HTMLElement | null = null;
    let areaChart3: HTMLElement | null = null;

  
	
  let lineoptions = {
    chart: {
      type: "area",
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
        },
    },
  },

  colors:['#9D4CCC', '#E91E63', '#9C27B0'],
    series: [
      {
        name: "visit",
        data: [120, 300, 450, 250, 500, 350, 250],
        
      },
    ],
    xaxis: {
      categories:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
      style: {
              colors: [],
              fontSize: '20px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 500,
              cssClass: 'apexcharts-xaxis-label'
    },
  },
  title: {
    text: 'Visitors this week',
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '26px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#263238'
    },
},
grid:{
  show:true,
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

// ApexCharts options and config

    const option = {
          colors: ["#1A56DB", "#FDBA8C"],
          series: [
            {
              name: "Organic",
              color: "#1A56DB",
              data: [
                { x: "Mon", y: 231 },
                { x: "Tue", y: 122 },
                { x: "Wed", y: 63 },
                { x: "Thu", y: 421 },
                { x: "Fri", y: 122 },
                { x: "Sat", y: 323 },
                { x: "Sun", y: 111 },
              ],
            },
            {
              name: "Social media",
              color: "#FDBA8C",
              data: [
                { x: "Mon", y: 232 },
                { x: "Tue", y: 113 },
                { x: "Wed", y: 341 },
                { x: "Thu", y: 224 },
                { x: "Fri", y: 522 },
                { x: "Sat", y: 411 },
                { x: "Sun", y: 243 },
              ],
            },
          ],
          chart: {
            type: "bar",
            height: "320px",
            fontFamily: "Inter, sans-serif",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "70%",
              borderRadiusApplication: "end",
              borderRadius: 8,
            },
          },
          tooltip: {
            shared: true,
            intersect: false,
            style: {
              fontFamily: "Inter, sans-serif",
            },
          },
          states: {
            hover: {
              filter: {
                type: "darken",
                value: 1,
              },
            },
          },
          stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: -14
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            floating: false,
            labels: {
              show: true,
              style: {
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
              }
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          fill: {
            opacity: 1,
          },
        }

        if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
          const chart = new ApexCharts(document.getElementById("column-chart"), options);
          chart.render();
        }



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

</script>


<main>
  <div class="m-20">
  <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500">Xsearch</span> Statistics</h1>
  <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
</div>
</main>

<div class="bg-gray-50 p-5 ">
<div class="text-sm text-gray-500 dark:text-gray-400 m-10">
<div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4">
  <section>
   <div use:chart={lineoptions} />
  </section>
</div>
</div>


<div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center p-5">
		<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 ">
			<div class="flex justify-between">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white md:p-6 pb-2">
						User Signups
					</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">User signups this week
          </p>
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

		<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4">
			<div class="flex justify-between ">
	

				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white md:p-6 pb-2 ">Data Type</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Data type</p>
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
    
    <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div class="flex justify-between ">
       
         
          <p class="leading-none text-3xl font-bold text-gray-900 dark:text-white">New Images</p>
        
        <div>
          
            <svg class="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              
            </svg>
           
         
        </div>
      </div>
    
      <div id="bar-chart"></div>
        
          <div class="flex justify-between items-center pt-5">
                      
              <svg class="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
               
              </svg>
         
       
        </div>
      </div>
      <div bind:this={areaChart3} />
    </div>
  </div>



  <div id="grid">
    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    </div>
     



  
<h3 class="text-3xl font-bold dark:text-white m-10">검색기록</h3>


  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Pred
                </th>
                <th scope="col" class="px-6 py-3">
                    Score
                </th>
                <th scope="col" class="px-6 py-3">
                    Timestamp
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                
            </tr>
           
        </tbody>
    </table>
</div>
</div>
  

  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Xsearch</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
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
  h1,h3, p{
    margin:20px;
  }
</style>
<script lang="ts">
	import { enhance } from '$app/forms';
	import {
		Card,
		Label,
		Input,
		Button,
		Fileupload,
		Blockquote,
		Timeline,
		TimelineItem,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';
	import Info from './info.svelte';
	let value: any;
</script>

<body class="gradient leading-relaxed tracking-wide flex flex-col">
	<!--Nav-->
	<nav id="header" class="w-full z-30 top-0 text-white fixed bg-white shadow-sm">
		<div
			class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-3"
		>
			<div class="pl-4 flex items-center text-black">
				<FooterBrand href="#" src="/xsearchlogo.png" alt="Xsearch Logo" />
				<a class="no-underline hover:no-underline font-bold text-2xl lg:text-3xl" href="/">
					<path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
					Xsearch
				</a>
			</div>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<div class="flex md:order-2">
					<button
						type="button"
						class="text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-large font-bold rounded-lg text-sm px-4 py-2 text-center mr-2 md:mr-5"
						><a href="/login">Login</a></button
					>
				</div>
			</div>
		</div>
	</nav>
	<!-- container mx-auto h-screen bg-pink-700 -->
	<div class="h-1/2 mt-7 lg:mt-9 bg-img-top bg-pink-800">
		<!-- bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] -->
		<!-- bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 -->
		<!-- <div
			class="w-full h-3 bg-gradient-to-r from-white via-gray-500 to-gray-700 animate-gradient-shift"
		/> -->
		<div class="text-center px-3 lg:px-10 p-20 mt-10">
			<h1
				class="my-4 text-2xl md:text-3xl lg:text-5xl text-white font-extrabold leading-tight pb-5"
			>
				Xsearch : Best Way to find image
			</h1>
			<p class="leading-normal text-gray-400 text-base md:text-xl lg:text-3xl mb-8 font-extrabold">
				You can find images At Once
			</p>

			<button
				class="text-xl mx-auto lg:mx-0 border p-10 border-black bg-white hover:font-extrabold rounded-lg rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
			>
				<a href="/login"> Get Started </a>
			</button>
		</div>
		<!-- <div
			class="w-full h-3 bg-gradient-to-r from-gray-700 via-gray-500 to-white animate-gradient-shift"
		/> -->
		<div class="flex items-center w-full mx-auto content-end md-block">
			<div
				class="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
			/>
		</div>
	</div>
	<div class="h-[350px]" />
	<!-- <svg class="animate-bounce w-6 h-6 ..."> -->
	<!-- ... -->
	<!-- </svg> -->
	<!-- sample  -->
	<div class="scroll-down" />
	<!--   -->
	<div class="flex justify-center items-center min-h-screen">
		<div class="w-full max-w-5xl mx-auto mt-8 pb-20">
			<div
				class="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3"
			>
				<span class="w-3 h-3 rounded-full bg-red-400" />
				<span class="w-3 h-3 rounded-full bg-yellow-400" />
				<span class="w-3 h-3 rounded-full bg-green-400" />
			</div>
			<div class="bg-gray-100 border-t-0 w-full h-[600px]">
				<img class="mx-auto h-[600px] p-2" src="/example.gif" alt="example gif" />
			</div>
		</div>
	</div>

	<div class="min-h-screen">
		<figure class="mx-auto max-w-screen-md text-center">
			<svg
				aria-hidden="true"
				class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"
				viewBox="0 0 24 27"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
					fill="currentColor"
				/></svg
			>

			<Blockquote alignment="center" size="3xl">
				"<span class="text-6xl font-bold">X</span>search is a service where you can get all the
				images you want. If you have an image you want to get, just post a similar image without
				hesitation. Then Xsearch will find all the images that exist in the world."
			</Blockquote>

			<!-- <figcaption class="flex justify-center items-center mt-6 space-x-3 p-10">
				<img
					class="w-6 h-6 rounded-full"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
					alt="Micheal Gough profile"
				/>
				<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
					<cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite
					>
				</div>
			</figcaption> -->
		</figure>
	</div>

	<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

	<Info />

	<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

	<section class="bg-white py-8">
		<div
			class="container mx-auto flex flex-wrap pt-4 pb-12 pr-10 pl-10 flex justify-center items-center"
		>
			<h2
				class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 pb-10 mb-20"
			>
				How It Works
			</h2>

			<ol class="relative border-l border-gray-200 dark:border-gray-700">
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							width="15px"
							height="15px"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
							<title>ic_fluent_timeline_24_regular</title>
							<desc>Created with Sketch.</desc>
							<g
								id="🔍-Product-Icons"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="ic_fluent_timeline_24_regular" fill="#212121" fill-rule="nonzero">
									<path
										d="M15.2496718,13 C16.2161701,13 16.9996718,13.7835017 16.9996718,14.75 L16.9996718,19.25 C16.9996718,20.2164983 16.2161701,21 15.2496718,21 L3.74967178,21 C2.78317347,21 1.99967178,20.2164983 1.99967178,19.25 L1.99967178,14.75 C1.99967178,13.7835017 2.78317347,13 3.74967178,13 L15.2496718,13 Z M20.9999472,14.8988691 L20.9996863,20.25 C20.9996863,20.6642136 20.6638999,21 20.2496863,21 C19.8699905,21 19.5561953,20.7178461 19.5065329,20.3517706 L19.4996863,20.25 L19.499308,14.9117103 C19.7315928,14.9693895 19.9745687,15 20.2246942,15 C20.4927784,15 20.7526497,14.9648361 20.9999472,14.8988691 Z M15.2496718,14.5 L3.74967178,14.5 C3.6116006,14.5 3.49967178,14.6119288 3.49967178,14.75 L3.49967178,19.25 C3.49967178,19.3880712 3.6116006,19.5 3.74967178,19.5 L15.2496718,19.5 C15.387743,19.5 15.4996718,19.3880712 15.4996718,19.25 L15.4996718,14.75 C15.4996718,14.6119288 15.387743,14.5 15.2496718,14.5 Z M20.2494639,10.0919271 C21.3032635,10.0919271 22.1575368,10.9462004 22.1575368,12 C22.1575368,13.0537996 21.3032635,13.9080729 20.2494639,13.9080729 C19.1956643,13.9080729 18.341391,13.0537996 18.341391,12 C18.341391,10.9462004 19.1956643,10.0919271 20.2494639,10.0919271 Z M15.2452829,3 C16.2117813,3 16.9952829,3.78350169 16.9952829,4.75 L16.9952829,9.25 C16.9952829,10.2164983 16.2117813,11 15.2452829,11 L3.74528294,11 C2.77878463,11 1.99528294,10.2164983 1.99528294,9.25 L1.99528294,4.75 C1.99528294,3.8318266 2.70239322,3.07880766 3.60175573,3.0058012 L3.74528294,3 L15.2452829,3 Z M15.2452829,4.5 L3.74528294,4.5 L3.68796024,4.50660268 C3.57751636,4.53251318 3.49528294,4.63165327 3.49528294,4.75 L3.49528294,9.25 C3.49528294,9.38807119 3.60721176,9.5 3.74528294,9.5 L15.2452829,9.5 C15.3833541,9.5 15.4952829,9.38807119 15.4952829,9.25 L15.4952829,4.75 C15.4952829,4.61192881 15.3833541,4.5 15.2452829,4.5 Z M20.2496863,3 C20.6293821,3 20.9431773,3.28215388 20.9928397,3.64822944 L20.9996863,3.75 L20.9999472,9.10113095 C20.7526497,9.0351639 20.4927784,9 20.2246942,9 C19.9745687,9 19.7315928,9.03061049 19.499308,9.0882897 L19.4996863,3.75 C19.4996863,3.33578644 19.8354727,3 20.2496863,3 Z"
										id="🎨Color"
									/>
								</g>
							</g>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Upload the image you want <span
							class="bg-gray-200 text-black text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>step 1</span
						>
					</h3>

					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-lg">
						Upload any images you want to find. It really doesn't matter what image it is.
					</p>
				</li>
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							width="15px"
							height="15px"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
							<title>ic_fluent_timeline_24_regular</title>
							<desc>Created with Sketch.</desc>
							<g
								id="🔍-Product-Icons"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="ic_fluent_timeline_24_regular" fill="#212121" fill-rule="nonzero">
									<path
										d="M15.2496718,13 C16.2161701,13 16.9996718,13.7835017 16.9996718,14.75 L16.9996718,19.25 C16.9996718,20.2164983 16.2161701,21 15.2496718,21 L3.74967178,21 C2.78317347,21 1.99967178,20.2164983 1.99967178,19.25 L1.99967178,14.75 C1.99967178,13.7835017 2.78317347,13 3.74967178,13 L15.2496718,13 Z M20.9999472,14.8988691 L20.9996863,20.25 C20.9996863,20.6642136 20.6638999,21 20.2496863,21 C19.8699905,21 19.5561953,20.7178461 19.5065329,20.3517706 L19.4996863,20.25 L19.499308,14.9117103 C19.7315928,14.9693895 19.9745687,15 20.2246942,15 C20.4927784,15 20.7526497,14.9648361 20.9999472,14.8988691 Z M15.2496718,14.5 L3.74967178,14.5 C3.6116006,14.5 3.49967178,14.6119288 3.49967178,14.75 L3.49967178,19.25 C3.49967178,19.3880712 3.6116006,19.5 3.74967178,19.5 L15.2496718,19.5 C15.387743,19.5 15.4996718,19.3880712 15.4996718,19.25 L15.4996718,14.75 C15.4996718,14.6119288 15.387743,14.5 15.2496718,14.5 Z M20.2494639,10.0919271 C21.3032635,10.0919271 22.1575368,10.9462004 22.1575368,12 C22.1575368,13.0537996 21.3032635,13.9080729 20.2494639,13.9080729 C19.1956643,13.9080729 18.341391,13.0537996 18.341391,12 C18.341391,10.9462004 19.1956643,10.0919271 20.2494639,10.0919271 Z M15.2452829,3 C16.2117813,3 16.9952829,3.78350169 16.9952829,4.75 L16.9952829,9.25 C16.9952829,10.2164983 16.2117813,11 15.2452829,11 L3.74528294,11 C2.77878463,11 1.99528294,10.2164983 1.99528294,9.25 L1.99528294,4.75 C1.99528294,3.8318266 2.70239322,3.07880766 3.60175573,3.0058012 L3.74528294,3 L15.2452829,3 Z M15.2452829,4.5 L3.74528294,4.5 L3.68796024,4.50660268 C3.57751636,4.53251318 3.49528294,4.63165327 3.49528294,4.75 L3.49528294,9.25 C3.49528294,9.38807119 3.60721176,9.5 3.74528294,9.5 L15.2452829,9.5 C15.3833541,9.5 15.4952829,9.38807119 15.4952829,9.25 L15.4952829,4.75 C15.4952829,4.61192881 15.3833541,4.5 15.2452829,4.5 Z M20.2496863,3 C20.6293821,3 20.9431773,3.28215388 20.9928397,3.64822944 L20.9996863,3.75 L20.9999472,9.10113095 C20.7526497,9.0351639 20.4927784,9 20.2246942,9 C19.9745687,9 19.7315928,9.03061049 19.499308,9.0882897 L19.4996863,3.75 C19.4996863,3.33578644 19.8354727,3 20.2496863,3 Z"
										id="🎨Color"
									/>
								</g>
							</g>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Extract image vector features using Resnet50<span
							class="bg-gray-200 text-black text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>step 2</span
						>
					</h3>
					<!-- <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on January 13th, 2022</time
					> -->
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-lg">
						Your image will be extracted with a resnet 50 layer. The number of vectors in each image
						is 1024.
					</p>
					<!-- <a
						href="#"
						class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
						><svg
							class="w-3.5 h-3.5 mr-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
							/>
							<path
								d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
							/>
						</svg> Download ZIP</a
					> -->
				</li>
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							width="15px"
							height="15px"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
							<title>ic_fluent_timeline_24_regular</title>
							<desc>Created with Sketch.</desc>
							<g
								id="🔍-Product-Icons"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="ic_fluent_timeline_24_regular" fill="#212121" fill-rule="nonzero">
									<path
										d="M15.2496718,13 C16.2161701,13 16.9996718,13.7835017 16.9996718,14.75 L16.9996718,19.25 C16.9996718,20.2164983 16.2161701,21 15.2496718,21 L3.74967178,21 C2.78317347,21 1.99967178,20.2164983 1.99967178,19.25 L1.99967178,14.75 C1.99967178,13.7835017 2.78317347,13 3.74967178,13 L15.2496718,13 Z M20.9999472,14.8988691 L20.9996863,20.25 C20.9996863,20.6642136 20.6638999,21 20.2496863,21 C19.8699905,21 19.5561953,20.7178461 19.5065329,20.3517706 L19.4996863,20.25 L19.499308,14.9117103 C19.7315928,14.9693895 19.9745687,15 20.2246942,15 C20.4927784,15 20.7526497,14.9648361 20.9999472,14.8988691 Z M15.2496718,14.5 L3.74967178,14.5 C3.6116006,14.5 3.49967178,14.6119288 3.49967178,14.75 L3.49967178,19.25 C3.49967178,19.3880712 3.6116006,19.5 3.74967178,19.5 L15.2496718,19.5 C15.387743,19.5 15.4996718,19.3880712 15.4996718,19.25 L15.4996718,14.75 C15.4996718,14.6119288 15.387743,14.5 15.2496718,14.5 Z M20.2494639,10.0919271 C21.3032635,10.0919271 22.1575368,10.9462004 22.1575368,12 C22.1575368,13.0537996 21.3032635,13.9080729 20.2494639,13.9080729 C19.1956643,13.9080729 18.341391,13.0537996 18.341391,12 C18.341391,10.9462004 19.1956643,10.0919271 20.2494639,10.0919271 Z M15.2452829,3 C16.2117813,3 16.9952829,3.78350169 16.9952829,4.75 L16.9952829,9.25 C16.9952829,10.2164983 16.2117813,11 15.2452829,11 L3.74528294,11 C2.77878463,11 1.99528294,10.2164983 1.99528294,9.25 L1.99528294,4.75 C1.99528294,3.8318266 2.70239322,3.07880766 3.60175573,3.0058012 L3.74528294,3 L15.2452829,3 Z M15.2452829,4.5 L3.74528294,4.5 L3.68796024,4.50660268 C3.57751636,4.53251318 3.49528294,4.63165327 3.49528294,4.75 L3.49528294,9.25 C3.49528294,9.38807119 3.60721176,9.5 3.74528294,9.5 L15.2452829,9.5 C15.3833541,9.5 15.4952829,9.38807119 15.4952829,9.25 L15.4952829,4.75 C15.4952829,4.61192881 15.3833541,4.5 15.2452829,4.5 Z M20.2496863,3 C20.6293821,3 20.9431773,3.28215388 20.9928397,3.64822944 L20.9996863,3.75 L20.9999472,9.10113095 C20.7526497,9.0351639 20.4927784,9 20.2246942,9 C19.9745687,9 19.7315928,9.03061049 19.499308,9.0882897 L19.4996863,3.75 C19.4996863,3.33578644 19.8354727,3 20.2496863,3 Z"
										id="🎨Color"
									/>
								</g>
							</g>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Find similarity distance L2 between images<span
							class="bg-gray-200 text-black text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>step 3</span
						>
					</h3>

					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-lg">
						You can get the most similar image by obtaining the L2 distance between the image in the
						image database and your image vector.
					</p>
				</li>
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							width="15px"
							height="15px"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
							<title>ic_fluent_timeline_24_regular</title>
							<desc>Created with Sketch.</desc>
							<g
								id="🔍-Product-Icons"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="ic_fluent_timeline_24_regular" fill="#212121" fill-rule="nonzero">
									<path
										d="M15.2496718,13 C16.2161701,13 16.9996718,13.7835017 16.9996718,14.75 L16.9996718,19.25 C16.9996718,20.2164983 16.2161701,21 15.2496718,21 L3.74967178,21 C2.78317347,21 1.99967178,20.2164983 1.99967178,19.25 L1.99967178,14.75 C1.99967178,13.7835017 2.78317347,13 3.74967178,13 L15.2496718,13 Z M20.9999472,14.8988691 L20.9996863,20.25 C20.9996863,20.6642136 20.6638999,21 20.2496863,21 C19.8699905,21 19.5561953,20.7178461 19.5065329,20.3517706 L19.4996863,20.25 L19.499308,14.9117103 C19.7315928,14.9693895 19.9745687,15 20.2246942,15 C20.4927784,15 20.7526497,14.9648361 20.9999472,14.8988691 Z M15.2496718,14.5 L3.74967178,14.5 C3.6116006,14.5 3.49967178,14.6119288 3.49967178,14.75 L3.49967178,19.25 C3.49967178,19.3880712 3.6116006,19.5 3.74967178,19.5 L15.2496718,19.5 C15.387743,19.5 15.4996718,19.3880712 15.4996718,19.25 L15.4996718,14.75 C15.4996718,14.6119288 15.387743,14.5 15.2496718,14.5 Z M20.2494639,10.0919271 C21.3032635,10.0919271 22.1575368,10.9462004 22.1575368,12 C22.1575368,13.0537996 21.3032635,13.9080729 20.2494639,13.9080729 C19.1956643,13.9080729 18.341391,13.0537996 18.341391,12 C18.341391,10.9462004 19.1956643,10.0919271 20.2494639,10.0919271 Z M15.2452829,3 C16.2117813,3 16.9952829,3.78350169 16.9952829,4.75 L16.9952829,9.25 C16.9952829,10.2164983 16.2117813,11 15.2452829,11 L3.74528294,11 C2.77878463,11 1.99528294,10.2164983 1.99528294,9.25 L1.99528294,4.75 C1.99528294,3.8318266 2.70239322,3.07880766 3.60175573,3.0058012 L3.74528294,3 L15.2452829,3 Z M15.2452829,4.5 L3.74528294,4.5 L3.68796024,4.50660268 C3.57751636,4.53251318 3.49528294,4.63165327 3.49528294,4.75 L3.49528294,9.25 C3.49528294,9.38807119 3.60721176,9.5 3.74528294,9.5 L15.2452829,9.5 C15.3833541,9.5 15.4952829,9.38807119 15.4952829,9.25 L15.4952829,4.75 C15.4952829,4.61192881 15.3833541,4.5 15.2452829,4.5 Z M20.2496863,3 C20.6293821,3 20.9431773,3.28215388 20.9928397,3.64822944 L20.9996863,3.75 L20.9999472,9.10113095 C20.7526497,9.0351639 20.4927784,9 20.2246942,9 C19.9745687,9 19.7315928,9.03061049 19.499308,9.0882897 L19.4996863,3.75 C19.4996863,3.33578644 19.8354727,3 20.2496863,3 Z"
										id="🎨Color"
									/>
								</g>
							</g>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Get similar images you want!<span
							class="bg-gray-200 text-black text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>step 4</span
						>
					</h3>
				</li>
			</ol>
		</div>
	</section>

	<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
	<div class="h-screen">
		<section class="bg-white dark:bg-gray-900">
			<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div class="max-w-screen mb-8 lg:mb-16 flex justify-center items-center">
					<h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 pb-10">
						Technology
					</h2>
				</div>
				<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								width="25px"
								height="25px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="System / Window_Terminal">
									<path
										id="Vector"
										d="M4 6H20M16 16H13M8 12L10 14L8 16M3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.921 21 18.48 20.7822 18.9074C20.5905 19.2837 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20L6.19694 20C5.079 20 4.51921 20 4.0918 19.7822C3.71547 19.5905 3.40973 19.2837 3.21799 18.9074C3 18.4796 3 17.9203 3 16.8002Z"
										stroke="#000000"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</svg>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							SvelteKit
							<a
								href="https://kit.svelte.dev/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<span class="w-full ml-3">Link</span>
								<svg
									class="w-4 h-4 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</h3>

						<p class="text-gray-500 dark:text-gray-400">
							A framework for building web applications with Svelte, offering better developer
							experience and optimized performance.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								fill="#000000"
								width="25px"
								height="25px"
								viewBox="0 0 32 32"
								id="icon"
								xmlns="http://www.w3.org/2000/svg"
								><defs
									><style>
										.cls-1 {
											fill: none;
										}
									</style></defs
								><title>datastore</title><circle cx="23" cy="23" r="1" /><rect
									x="8"
									y="22"
									width="12"
									height="2"
								/><circle cx="23" cy="9" r="1" /><rect x="8" y="8" width="12" height="2" /><path
									d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z"
								/><rect
									id="_Transparent_Rectangle_"
									data-name="&lt;Transparent Rectangle&gt;"
									class="cls-1"
									width="32"
									height="32"
								/></svg
							>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							NestJS
							<a
								href="https://nestjs.com/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<span class="w-full ml-3">Link</span>
								<svg
									class="w-4 h-4 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</h3>
						<p class="text-gray-500 dark:text-gray-400">
							A progressive Node.js framework for building efficient, scalable, and maintainable
							server-side applications.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								fill="#000000"
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								width="25px"
								height="25px"
								viewBox="0 0 550.801 550.801"
								xml:space="preserve"
							>
								<g>
									<g>
										<path
											d="M280.173,409.52c-20.683,0-32.611,20.282-32.611,45.336c-0.198,25.449,12.129,44.935,32.413,44.935
							   c20.485,0,32.414-19.284,32.414-45.53C312.389,429.796,300.845,409.52,280.173,409.52z"
										/>
										<path
											d="M475.095,131.997c-0.031-2.526-0.833-5.021-2.568-6.992L366.319,3.694c-0.021-0.034-0.053-0.045-0.089-0.076
							   c-0.628-0.707-1.361-1.29-2.136-1.804c-0.232-0.15-0.465-0.287-0.707-0.422c-0.686-0.366-1.393-0.67-2.136-0.892
							   c-0.2-0.058-0.374-0.14-0.575-0.192C359.87,0.119,359.037,0,358.198,0H97.2c-11.907,0-21.6,9.693-21.6,21.601v507.6
							   c0,11.913,9.692,21.601,21.6,21.601h356.4c11.918,0,21.6-9.688,21.6-21.601V133.207
							   C475.2,132.796,475.137,132.398,475.095,131.997z M147.166,523.643c-15.314,0-30.417-3.977-37.979-8.153l6.172-25.049
							   c8.155,4.166,20.672,8.343,33.605,8.343c13.912,0,21.271-5.759,21.271-14.513c0-8.353-6.373-13.125-22.465-18.89
							   c-22.275-7.752-36.79-20.081-36.79-39.561c0-22.866,19.09-40.368,50.702-40.368c15.113,0,26.248,3.185,34.203,6.76l-6.761,24.453
							   c-5.368-2.584-14.916-6.359-28.031-6.359c-13.133,0-19.488,5.959-19.488,12.925c0,8.549,7.549,12.324,24.861,18.89
							   c23.657,8.749,34.792,21.067,34.792,39.957C201.253,504.562,183.946,523.643,147.166,523.643z M336.245,544.726
							   c-19.09-5.569-34.994-11.338-52.893-18.89c-2.979-1.191-6.164-1.793-9.347-1.988c-30.217-1.988-58.448-24.252-58.448-68.001
							   c0-40.162,25.449-70.385,65.411-70.385c40.965,0,63.43,31.019,63.43,67.601c0,30.428-14.123,51.896-31.815,59.854v0.791
							   c10.336,2.984,21.869,5.368,32.4,7.552L336.245,544.726z M447.979,521.659h-83.71V387.65h30.428v108.56h53.282V521.659z
								M97.2,366.758V21.605h250.204v110.516c0,5.962,4.83,10.8,10.8,10.8h95.396l0.011,223.837H97.2z"
										/>
										<rect x="132.161" y="102.492" width="59.102" height="11.82" />
										<rect x="202.337" y="102.492" width="59.104" height="11.82" />
										<rect x="132.161" y="139.021" width="38.328" height="11.817" />
										<rect x="177.681" y="139.021" width="38.33" height="11.817" />
										<rect x="222.474" y="139.021" width="38.33" height="11.817" />
										<rect x="267.991" y="139.021" width="38.333" height="11.817" />
										<rect x="132.161" y="176.655" width="43.896" height="11.82" />
										<rect x="184.291" y="176.655" width="43.896" height="11.82" />
										<rect x="235.591" y="176.655" width="43.896" height="11.82" />
										<rect x="287.729" y="176.655" width="43.896" height="11.82" />
										<rect x="132.58" y="215.033" width="18.615" height="11.82" />
										<rect x="154.688" y="215.033" width="18.624" height="11.82" />
										<rect x="176.455" y="215.033" width="18.615" height="11.82" />
										<rect x="198.563" y="215.033" width="18.624" height="11.82" />
										<rect x="220.649" y="215.033" width="18.625" height="11.82" />
										<rect x="242.769" y="215.033" width="18.623" height="11.82" />
										<rect x="264.524" y="215.033" width="18.628" height="11.82" />
										<rect x="286.644" y="215.033" width="18.615" height="11.82" />
										<rect x="309.678" y="215.033" width="18.62" height="11.82" />
										<rect x="331.795" y="215.033" width="18.625" height="11.82" />
										<rect x="353.553" y="215.033" width="18.62" height="11.82" />
										<rect x="375.67" y="215.033" width="18.615" height="11.82" />
										<rect x="132.58" y="251.488" width="26.483" height="11.82" />
										<rect x="164.036" y="251.488" width="26.491" height="11.82" />
										<rect x="194.988" y="251.488" width="26.494" height="11.82" />
										<rect x="226.45" y="251.488" width="26.48" height="11.82" />
										<rect x="257.866" y="251.488" width="26.478" height="11.82" />
										<rect x="289.322" y="251.488" width="26.494" height="11.82" />
										<rect x="320.277" y="251.488" width="26.488" height="11.82" />
										<rect x="351.733" y="251.488" width="26.483" height="11.82" />
										<rect x="132.58" y="292.792" width="21.104" height="11.823" />
										<rect x="157.642" y="292.792" width="21.115" height="11.823" />
										<rect x="182.309" y="292.792" width="21.104" height="11.823" />
										<rect x="207.37" y="292.792" width="21.104" height="11.823" />
										<rect x="232.401" y="292.792" width="21.112" height="11.823" />
										<rect x="257.465" y="292.792" width="21.104" height="11.823" />
										<rect x="282.129" y="292.792" width="21.104" height="11.823" />
										<rect x="307.194" y="292.792" width="21.104" height="11.823" />
									</g>
								</g>
							</svg>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							PostgreSQL
							<a
								href="https://www.postgresql.org/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<span class="w-full ml-3">Link</span>
								<svg
									class="w-4 h-4 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</h3>
						<p class="text-gray-500 dark:text-gray-400">
							A powerful, open-source relational database system with over 30 years of active
							development.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								width="30px"
								height="30px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.25 7.00003C4.25 7.41424 4.58579 7.75003 5 7.75003C5.41421 7.75003 5.75 7.41424 5.75 7.00003H4.25ZM6.1 5.88903L5.81451 5.19549C5.80534 5.19927 5.79623 5.20323 5.78721 5.20737L6.1 5.88903ZM9.033 5.15203L9.10927 5.89814C9.11457 5.8976 9.11986 5.897 9.12515 5.89635L9.033 5.15203ZM11.533 5.00003L11.5317 5.75003H11.533V5.00003ZM12.466 5.00003V5.75003L12.4673 5.75003L12.466 5.00003ZM14.966 5.15203L14.8739 5.89635C14.8792 5.89701 14.8845 5.89761 14.8898 5.89815L14.966 5.15203ZM17.9 5.88903L18.2128 5.20737C18.2038 5.20322 18.1946 5.19926 18.1855 5.19548L17.9 5.88903ZM18.25 7.00003C18.25 7.41424 18.5858 7.75003 19 7.75003C19.4142 7.75003 19.75 7.41424 19.75 7.00003H18.25ZM5.75 7.00003C5.75 6.58582 5.41421 6.25003 5 6.25003C4.58579 6.25003 4.25 6.58582 4.25 7.00003H5.75ZM6.914 8.41403L6.69463 9.13123C6.70173 9.1334 6.70887 9.13547 6.71603 9.13743L6.914 8.41403ZM11.533 9.00003V8.24995L11.5219 8.25011L11.533 9.00003ZM12.466 9.00003L12.4771 8.25003H12.466V9.00003ZM17.086 8.41403L17.284 9.13743C17.2911 9.13547 17.2983 9.1334 17.3054 9.13123L17.086 8.41403ZM19.75 7.00003C19.75 6.58582 19.4142 6.25003 19 6.25003C18.5858 6.25003 18.25 6.58582 18.25 7.00003H19.75ZM5.75 7.00003C5.75 6.58582 5.41421 6.25003 5 6.25003C4.58579 6.25003 4.25 6.58582 4.25 7.00003H5.75ZM4.25 12C4.25 12.4142 4.58579 12.75 5 12.75C5.41421 12.75 5.75 12.4142 5.75 12H4.25ZM19.75 7.00003C19.75 6.58582 19.4142 6.25003 19 6.25003C18.5858 6.25003 18.25 6.58582 18.25 7.00003H19.75ZM18.25 12C18.25 12.4142 18.5858 12.75 19 12.75C19.4142 12.75 19.75 12.4142 19.75 12H18.25ZM5.75 12C5.75 11.5858 5.41421 11.25 5 11.25C4.58579 11.25 4.25 11.5858 4.25 12H5.75ZM6.914 13.414L6.69463 14.1312C6.70173 14.1334 6.70887 14.1355 6.71603 14.1374L6.914 13.414ZM11.533 14V13.2499L11.5219 13.2501L11.533 14ZM12.466 14L12.4771 13.25H12.466V14ZM17.086 13.414L17.284 14.1374C17.2911 14.1355 17.2983 14.1334 17.3054 14.1312L17.086 13.414ZM19.75 12C19.75 11.5858 19.4142 11.25 19 11.25C18.5858 11.25 18.25 11.5858 18.25 12H19.75ZM5.75 12C5.75 11.5858 5.41421 11.25 5 11.25C4.58579 11.25 4.25 11.5858 4.25 12H5.75ZM6.914 18.414L6.69463 19.1312C6.70173 19.1334 6.70887 19.1355 6.71603 19.1374L6.914 18.414ZM11.533 19V18.2499L11.5219 18.2501L11.533 19ZM12.466 19L12.4771 18.25H12.466V19ZM17.086 18.414L17.284 19.1374C17.2911 19.1355 17.2983 19.1334 17.3054 19.1312L17.086 18.414ZM19.75 12C19.75 11.5858 19.4142 11.25 19 11.25C18.5858 11.25 18.25 11.5858 18.25 12H19.75ZM5.75 7.00003C5.75 7.05846 5.71815 7.04218 5.81323 6.94645C5.91209 6.84693 6.09951 6.71444 6.41279 6.57069L5.78721 5.20737C5.38349 5.39262 5.02091 5.61563 4.74902 5.88936C4.47335 6.16688 4.25 6.5416 4.25 7.00003H5.75ZM6.38549 6.58257C7.25569 6.22436 8.1731 5.99384 9.10927 5.89814L8.95673 4.40592C7.87675 4.51631 6.8184 4.78225 5.81451 5.19549L6.38549 6.58257ZM9.12515 5.89635C9.9235 5.79751 10.7273 5.74864 11.5317 5.75003L11.5343 4.25003C10.6674 4.24854 9.80121 4.3012 8.94085 4.40771L9.12515 5.89635ZM11.533 5.75003H12.466V4.25003H11.533V5.75003ZM12.4673 5.75003C13.2717 5.74864 14.0755 5.79751 14.8739 5.89635L15.0581 4.40771C14.1978 4.3012 13.3316 4.24854 12.4647 4.25003L12.4673 5.75003ZM14.8898 5.89815C15.8263 5.99376 16.744 6.22428 17.6145 6.58258L18.1855 5.19548C17.1812 4.78214 16.1225 4.5162 15.0422 4.40591L14.8898 5.89815ZM17.5872 6.57069C17.9005 6.71444 18.0879 6.84693 18.1868 6.94645C18.2819 7.04218 18.25 7.05846 18.25 7.00003H19.75C19.75 6.5416 19.5266 6.16688 19.251 5.88936C18.9791 5.61563 18.6165 5.39262 18.2128 5.20737L17.5872 6.57069ZM4.25 7.00003C4.25 7.61363 4.646 8.06864 5.05149 8.36831C5.4717 8.67886 6.03924 8.93076 6.69463 9.13123L7.13337 7.69683C6.56276 7.52229 6.1733 7.3322 5.94301 7.162C5.698 6.98092 5.75 6.91643 5.75 7.00003H4.25ZM6.71603 9.13743C8.28853 9.56776 9.91391 9.77397 11.5441 9.74995L11.5219 8.25011C10.033 8.27205 8.54831 8.0837 7.11197 7.69063L6.71603 9.13743ZM11.533 9.75003H12.466V8.25003H11.533V9.75003ZM12.4549 9.74995C14.0854 9.77407 15.7111 9.56786 17.284 9.13743L16.888 7.69063C15.4514 8.08379 13.9664 8.27214 12.4771 8.25011L12.4549 9.74995ZM17.3054 9.13123C17.9605 8.93084 18.5281 8.67923 18.9484 8.3688C19.3542 8.069 19.75 7.61396 19.75 7.00003H18.25C18.25 6.9171 18.3018 6.98156 18.0571 7.16226C17.8269 7.33233 17.4375 7.52222 16.8666 7.69683L17.3054 9.13123ZM4.25 7.00003V12H5.75V7.00003H4.25ZM18.25 7.00003V12H19.75V7.00003H18.25ZM4.25 12C4.25 12.6136 4.646 13.0686 5.05149 13.3683C5.4717 13.6789 6.03924 13.9308 6.69463 14.1312L7.13337 12.6968C6.56276 12.5223 6.1733 12.3322 5.94301 12.162C5.698 11.9809 5.75 11.9164 5.75 12H4.25ZM6.71603 14.1374C8.28853 14.5678 9.91391 14.774 11.5441 14.7499L11.5219 13.2501C10.033 13.2721 8.54831 13.0837 7.11197 12.6906L6.71603 14.1374ZM11.533 14.75H12.466V13.25H11.533V14.75ZM12.4549 14.7499C14.0854 14.7741 15.7111 14.5679 17.284 14.1374L16.888 12.6906C15.4514 13.0838 13.9664 13.2721 12.4771 13.2501L12.4549 14.7499ZM17.3054 14.1312C17.9605 13.9308 18.5281 13.6792 18.9484 13.3688C19.3542 13.069 19.75 12.614 19.75 12H18.25C18.25 11.9171 18.3018 11.9816 18.0571 12.1623C17.8269 12.3323 17.4375 12.5222 16.8666 12.6968L17.3054 14.1312ZM4.25 12V17H5.75V12H4.25ZM4.25 17C4.25 17.6136 4.646 18.0686 5.05149 18.3683C5.4717 18.6789 6.03924 18.9308 6.69463 19.1312L7.13337 17.6968C6.56276 17.5223 6.1733 17.3322 5.94301 17.162C5.698 16.9809 5.75 16.9164 5.75 17H4.25ZM6.71603 19.1374C8.28853 19.5678 9.91391 19.774 11.5441 19.7499L11.5219 18.2501C10.033 18.2721 8.54831 18.0837 7.11197 17.6906L6.71603 19.1374ZM11.533 19.75H12.466V18.25H11.533V19.75ZM12.4549 19.7499C14.0854 19.7741 15.7111 19.5679 17.284 19.1374L16.888 17.6906C15.4514 18.0838 13.9664 18.2721 12.4771 18.2501L12.4549 19.7499ZM17.3054 19.1312C17.9608 18.9308 18.5283 18.6789 18.9485 18.3683C19.354 18.0686 19.75 17.6136 19.75 17H18.25C18.25 16.9164 18.302 16.9809 18.057 17.162C17.8267 17.3322 17.4372 17.5223 16.8666 17.6968L17.3054 19.1312ZM19.75 17V12H18.25V17H19.75Z"
									fill="#000000"
								/>
							</svg>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							MilvusDB
							<a
								href="https://milvus.io/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<span class="w-full ml-3">Link</span>
								<svg
									class="w-4 h-4 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</h3>
						<p class="text-gray-500 dark:text-gray-400">
							An open-source vector database designed for AI and ML applications, offering
							similarity search and analytics.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								width="30px"
								height="30px"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="0" fill="none" width="20" height="20" />

								<g>
									<path
										d="M5 3h14v11h-2v2h-2v2H1V7h2V5h2V3zm13 10V4H6v9h12zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1 6v-1H5V6H4v9h12zM7 6l10 6H7V6zm7 11v-1H3V8H2v9h12z"
									/>
								</g>
							</svg>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							MinIO
							<a
								href="https://min.io/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<span class="w-full ml-3">Link</span>
								<svg
									class="w-4 h-4 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</h3>
						<p class="text-gray-500 dark:text-gray-400">
							A high-performance, Kubernetes-native object storage suite, compatible with the Amazon
							S3 API.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								width="25px"
								height="25px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M22 19H14M2 19H10"
									stroke="#1C274C"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
								<path d="M12 17V14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
								<circle cx="12" cy="19" r="2" stroke="#1C274C" stroke-width="1.5" />
								<path
									d="M2 11C2 9.34315 3.34315 8 5 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H5C3.34315 14 2 12.6569 2 11Z"
									stroke="#1C274C"
									stroke-width="1.5"
								/>
								<path
									d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5C22 6.65685 20.6569 8 19 8H5C3.34315 8 2 6.65685 2 5Z"
									stroke="#1C274C"
									stroke-width="1.5"
								/>
								<path d="M13 5L19 5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
								<path d="M13 11L19 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
								<circle cx="6" cy="5" r="1" fill="#1C274C" />
								<circle cx="6" cy="11" r="1" fill="#1C274C" />
							</svg>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							Flask
							<a
								href="flask.pocoo.org"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
										stroke="#1C274C"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<span class="w-full ml-3">Link</span>
								<svg
									class="w-4 h-4 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</h3>
						<p class="text-gray-500 dark:text-gray-400">
							A lightweight and micro web framework for Python, known for its simplicity and
							modularity.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div class="h-[300px]" />
	<section
		class="gradient w-full mx-auto text-center pt-6 pb-12 h-screen flex justify-center items-center md:mt-5 bg-img-bottom"
	>
		<div>
			<div class="inline-flex items-center justify-center w-full pb-10">
				<hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
				<div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
					<svg
						class="w-4 h-4 text-gray-700 dark:text-gray-300"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 14"
					>
						<path
							d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
						/>
					</svg>
				</div>
			</div>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
			</div>

			<h3 class="my-4 text-4xl font-extrabold pt-10 pb-10">Do you want to join 'Xsearch'?</h3>

			<button
				class="mx-auto lg:mx-0 hover:bg-gray-800 hover:text-white bg-white text-gray-800 text-2xl font-bold rounded my-6 py-4 px-8 shadow-lg"
			>
				<a href="/login"> Get Started </a>
			</button>
		</div>
	</section>

	<!--Footer-->

	<Footer footerType="logo">
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterBrand href="#" src="/xsearchlogo.png" alt="Xsearch Logo" name="Xsearch" />
			<a
				class="text-gray-500 text-sm"
				href="https://kr.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-on-black-background_13312322.htm#query=%EA%B2%80%EC%9D%80%20%EB%B0%B0%EA%B2%BD&position=2&from_view=keyword&track=ais"
				>background img link</a
			>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<FooterCopyright href="/" by="Xsearch™" />
	</Footer>
</body>

<style>
	.bg-img-top {
		background: linear-gradient(
				rgba(255, 255, 255, 0) 20%,
				rgba(255, 255, 255, 0.6) 75%,
				/* rgba(255, 255, 255, 0.8) 80%,
				rgba(255, 255, 255, 0.9) 85%,
				rgba(255, 255, 255, 0.9) 90%, */
					rgba(255, 255, 255, 1) 100%
			),
			url('/bg.jpg');

		/* background-image: url('/bg.jpg'); */
		background-repeat: no-repeat;
		background-size: cover;
	}

	.bg-img-bottom {
		background: linear-gradient(
				rgba(255, 255, 255, 1) 20%,
				rgba(255, 255, 255, 0.9) 40%,
				rgba(255, 255, 255, 0.8) 60%,
				rgba(255, 255, 255, 0) 100%
					/* You can uncomment and adjust other gradient stops if needed */
			),
			url('/bg.jpg');

		/* background-image: url('/bg.jpg'); */
		background-repeat: no-repeat;
		background-size: cover;
	}

	.scroll-down {
		position: absolute;
		left: 50%;
		bottom: 10px;
		display: block;
		text-align: center;
		font-size: 20px;
		z-index: 100;
		text-decoration: none;
		text-shadow: 0;
		width: 13px;
		height: 13px;
		border-bottom: 2px solid #000; /* 이 부분을 검은색으로 변경 */
		border-right: 2px solid #000; /* 이 부분을 검은색으로 변경 */
		z-index: 9;
		left: 50%;
		-webkit-transform: translate(-50%, 0%) rotate(45deg);
		-moz-transform: translate(-50%, 0%) rotate(45deg);
		transform: translate(-50%, 0%) rotate(45deg);
		-webkit-animation: fade_move_down 4s ease-in-out infinite;
		-moz-animation: fade_move_down 4s ease-in-out infinite;
		animation: fade_move_down 4s ease-in-out infinite;
	}

	/*animated scroll arrow animation*/
	@-webkit-keyframes fade_move_down {
		0% {
			-webkit-transform: translate(0, -10px) rotate(45deg);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-webkit-transform: translate(0, 10px) rotate(45deg);
			opacity: 0;
		}
	}
	@-moz-keyframes fade_move_down {
		0% {
			-moz-transform: translate(0, -10px) rotate(45deg);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-moz-transform: translate(0, 10px) rotate(45deg);
			opacity: 0;
		}
	}
	@keyframes fade_move_down {
		0% {
			transform: translate(0, -10px) rotate(45deg);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: translate(0, 10px) rotate(45deg);
			opacity: 0;
		}
	}
</style>

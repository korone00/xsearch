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
	<nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-3 fixed bg-white">
		<div
			class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-3"
		>
			<div class="pl-4 flex items-center text-black">
				<FooterBrand href="#" src="/xsearchlogo.png" alt="Xsearch Logo" />
				<a class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
					<path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
					Xsearch
				</a>
			</div>
		</div>
	</nav>

	<!-- container mx-auto h-screen bg-pink-700 -->
	<div class="h-screen mt-20 lg:mt-28">
		<!-- bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] -->
		<!-- bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 -->
		<div class="text-center px-3 lg:px-10 p-20">
			<h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight pb-5">
				Xsearch : Best Way to find image
			</h1>
			<p class="leading-normal text-gray-800 text-base md:text-xl lg:text-3xl mb-8 font-extrabold">
				You can find images At Once
			</p>

			<button
				class="text-xl mx-auto lg:mx-0 border p-10 border-black bg-white hover:font-extrabold rounded-lg hover:font-extrabold text-gray-800 rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48 hover:text-white hover:bg-black"
			>
				<a href="/login"> Get Started </a>
			</button>
		</div>

		<div class="flex items-center w-full mx-auto content-end">
			<div
				class="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
			/>
		</div>
	</div>

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

	<div class="h-screen">
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
						class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
							/>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Upload the image you want <span
							class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>Latest</span
						>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on January 13th, 2022</time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts, kanban board,
						calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<a
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
					>
				</li>
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
							/>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Extract image vector features using Resnet50<span
							class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>Latest</span
						>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on January 13th, 2022</time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts, kanban board,
						calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<a
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
					>
				</li>
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
							/>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Find similarity distance L2 between images<span
							class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>Latest</span
						>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on January 13th, 2022</time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts, kanban board,
						calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<a
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
					>
				</li>
				<li class="mb-10 ml-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
							/>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Get similar images you want!<span
							class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
							>Latest</span
						>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on January 13th, 2022</time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts, kanban board,
						calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<a
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
					>
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
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							SvelteKit
							<a
								href="https://kit.svelte.dev/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 mr-3"
									viewBox="0 0 22 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g clip-path="url(#clip0_4151_63004)"
										><path
											d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
											fill="#0ACF83"
										/><path
											d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
											fill="#A259FF"
										/><path
											d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
											fill="#F24E1E"
										/><path
											d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
											fill="#FF7262"
										/><path
											d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
											fill="#1ABCFE"
										/></g
									><defs
										><clipPath id="clip0_4151_63004"
											><rect
												width="22"
												height="30.1244"
												fill="white"
												transform="translate(0 -0.000244141)"
											/></clipPath
										></defs
									></svg
								>
								<span class="w-full">Link</span>
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
							Plan it, create it, launch it. Collaborate seamlessly with all the organization and
							hit your marketing goals every month with our marketing plan.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
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
									aria-hidden="true"
									class="w-5 h-5 mr-3"
									viewBox="0 0 22 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g clip-path="url(#clip0_4151_63004)"
										><path
											d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
											fill="#0ACF83"
										/><path
											d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
											fill="#A259FF"
										/><path
											d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
											fill="#F24E1E"
										/><path
											d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
											fill="#FF7262"
										/><path
											d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
											fill="#1ABCFE"
										/></g
									><defs
										><clipPath id="clip0_4151_63004"
											><rect
												width="22"
												height="30.1244"
												fill="white"
												transform="translate(0 -0.000244141)"
											/></clipPath
										></defs
									></svg
								>
								<span class="w-full">Link</span>
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
							Protect your organization, devices and stay compliant with our structured workflows
							and custom permissions made for you.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
									clip-rule="evenodd"
								/><path
									d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
								/></svg
							>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							PostgreSQL
							<a
								href="https://www.postgresql.org/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 mr-3"
									viewBox="0 0 22 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g clip-path="url(#clip0_4151_63004)"
										><path
											d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
											fill="#0ACF83"
										/><path
											d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
											fill="#A259FF"
										/><path
											d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
											fill="#F24E1E"
										/><path
											d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
											fill="#FF7262"
										/><path
											d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
											fill="#1ABCFE"
										/></g
									><defs
										><clipPath id="clip0_4151_63004"
											><rect
												width="22"
												height="30.1244"
												fill="white"
												transform="translate(0 -0.000244141)"
											/></clipPath
										></defs
									></svg
								>
								<span class="w-full">Link</span>
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
							Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of
							new templates to help you get started.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
								/><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							MilvusDB
							<a
								href="https://milvus.io/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 mr-3"
									viewBox="0 0 22 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g clip-path="url(#clip0_4151_63004)"
										><path
											d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
											fill="#0ACF83"
										/><path
											d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
											fill="#A259FF"
										/><path
											d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
											fill="#F24E1E"
										/><path
											d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
											fill="#FF7262"
										/><path
											d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
											fill="#1ABCFE"
										/></g
									><defs
										><clipPath id="clip0_4151_63004"
											><rect
												width="22"
												height="30.1244"
												fill="white"
												transform="translate(0 -0.000244141)"
											/></clipPath
										></defs
									></svg
								>
								<span class="w-full">Link</span>
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
							Audit-proof software built for critical financial operations like month-end close and
							quarterly budgeting.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
								/></svg
							>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							MinIO
							<a
								href="https://min.io/"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 mr-3"
									viewBox="0 0 22 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g clip-path="url(#clip0_4151_63004)"
										><path
											d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
											fill="#0ACF83"
										/><path
											d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
											fill="#A259FF"
										/><path
											d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
											fill="#F24E1E"
										/><path
											d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
											fill="#FF7262"
										/><path
											d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
											fill="#1ABCFE"
										/></g
									><defs
										><clipPath id="clip0_4151_63004"
											><rect
												width="22"
												height="30.1244"
												fill="white"
												transform="translate(0 -0.000244141)"
											/></clipPath
										></defs
									></svg
								>
								<span class="w-full">Link</span>
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
							Craft beautiful, delightful experiences for both marketing and product with real
							cross-company collaboration.
						</p>
					</div>
					<div>
						<div
							class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
						>
							<svg
								class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<h3 class="mb-2 text-2xl font-bold dark:text-white">
							Flask
							<a
								href="flask.pocoo.org"
								class="h-[20px] ml-2 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 mr-3"
									viewBox="0 0 22 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g clip-path="url(#clip0_4151_63004)"
										><path
											d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
											fill="#0ACF83"
										/><path
											d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
											fill="#A259FF"
										/><path
											d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
											fill="#F24E1E"
										/><path
											d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
											fill="#FF7262"
										/><path
											d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
											fill="#1ABCFE"
										/></g
									><defs
										><clipPath id="clip0_4151_63004"
											><rect
												width="22"
												height="30.1244"
												fill="white"
												transform="translate(0 -0.000244141)"
											/></clipPath
										></defs
									></svg
								>
								<span class="w-full">Link</span>
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
							Keep your company’s lights on with customizable, iterative, and structured workflows
							built for all efficient teams and individual.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>

	<section
		class="gradient w-full mx-auto text-center pt-6 pb-12 h-screen flex justify-center items-center"
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
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<FooterCopyright href="/" by="Xsearch™" />
	</Footer>
</body>

<style>
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

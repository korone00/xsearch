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
	<nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-6">
		<div
			class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
		>
			<div class="pl-4 flex items-center text-black">
				<FooterBrand href="#" src="/xsearchlogo.png" alt="Xsearch Logo" />
				<a class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
					<path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
					Xsearch
				</a>
			</div>

			<div class="block lg:hidden pr-4">
				<button
					id="nav-toggle"
					class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
				>
					<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
		</div>
	</nav>

	<div class="container mx-auto h-screen">
		<!-- bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] -->
		<div
			class="text-center px-3 lg:px-10 p-20 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700"
		>
			<h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
				Xsearch : Best Way to find image
			</h1>
			<p
				class="leading-normal text-indigo-900 text-base md:text-xl lg:text-3xl mb-8 font-extrabold"
			>
				You can find images At Once
			</p>

			<button
				class="mx-auto lg:mx-0 border p-10 border-black bg-white hover:bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-400 rounded-lg hover:font-extrabold text-gray-800 rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48 hover:bolder-0"
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

		<Blockquote alignment="center" size="2xl">
			"Xsearch is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."
		</Blockquote>

		<figcaption class="flex justify-center items-center mt-6 space-x-3 p-10">
			<img
				class="w-6 h-6 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
				alt="Micheal Gough profile"
			/>
			<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
				<cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
				<cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
			</div>
		</figcaption>
	</figure>

	<!-- sample  -->
	<div class="scroll-down" />

	<Info />

	<section class="bg-white py-8">
		<div class="container mx-auto flex flex-wrap pt-4 pb-12 pr-10 pl-10">
			<h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 pb-10">
				How It Works
			</h2>
			<Timeline order="vertical" class="items-center p-10">
				<TimelineItem title="Upload the image you want" date="Released on January 13th, 2022">
					<svelte:fragment slot="icon">
						<span
							class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
						>
							<svg
								aria-hidden="true"
								class="w-3 h-3 text-primary-600 dark:text-primary-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
					</svelte:fragment>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts, kanban board,
						calendar, and pre-order E-commerce & Marketing pages.
					</p>
				</TimelineItem>
				<TimelineItem
					title="Extract image vector features using Resnet50"
					date="Released on December 7th, 2021"
				>
					<svelte:fragment slot="icon">
						<span
							class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
						>
							<svg
								aria-hidden="true"
								class="w-3 h-3 text-primary-600 dark:text-primary-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
					</svelte:fragment>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between
						the two versions even as we update the project.
					</p>
				</TimelineItem>
				<TimelineItem
					title="Finding similarity distance L2 between images"
					date="Released on December 2nd, 2021"
				>
					<svelte:fragment slot="icon">
						<span
							class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
						>
							<svg
								aria-hidden="true"
								class="w-3 h-3 text-primary-600 dark:text-primary-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
					</svelte:fragment>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements built on top of
						Tailwind CSS.
					</p>
				</TimelineItem>
				<TimelineItem title="Get similar images you want!" date="Released on December 7th, 2021">
					<svelte:fragment slot="icon">
						<span
							class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
						>
							<svg
								aria-hidden="true"
								class="w-3 h-3 text-primary-600 dark:text-primary-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
					</svelte:fragment>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between
						the two versions even as we update the project.
					</p>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<section class="bg-white border-b py-12">
		<div class="container mx-auto flex flex-wrap items-center justify-between pb-12">
			<h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 pb-10">
				Technology Stack
			</h2>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
			</div>

			<div
				class="flex flex-1 flex-wrap max-w-5xl mx-auto items-center justify-between text-xl text-gray-500 font-bold opacity-75"
			>
				<span class="w-1/2 p-4 md:w-auto flex items-center"
					><svg
						class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z" /></svg
					>
					>SvelteKit</span
				>

				<span class="w-1/2 p-4 md:w-auto flex items-center"
					><svg
						class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"
						/></svg
					>
					>NestJS</span
				>

				<span class="w-1/2 p-4 md:w-auto flex items-center"
					><svg
						class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 0 0 8 0z"
						/></svg
					>
					>PostgreSQL</span
				>

				<span class="w-1/2 p-4 md:w-auto flex items-center"
					><svg
						class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z"
						/></svg
					>
					>MilvusDB</span
				>
				<span class="w-1/2 p-4 md:w-auto flex items-center"
					><svg
						class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z"
						/></svg
					>
					>MinIO</span
				>
			</div>
		</div>
	</section>

	<section class="gradient w-full mx-auto text-center pt-6 pb-12">
		<h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-white">
			Call to Action
		</h2>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
		</div>

		<h3 class="my-4 text-3xl font-extrabold">Just Use It Right Now</h3>

		<button
			class="mx-auto lg:mx-0 hover:bg-blue-800 hover:text-white bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg"
		>
			<a href="/login"> Get Started </a>
		</button>
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

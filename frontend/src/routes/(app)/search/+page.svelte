<script lang="ts">
	import { Card, Label, Button, Fileupload } from 'flowbite-svelte';

	let value: any;
	export let urls: any[] = [];
	let loading = false;

	async function handleSubmit(event: Event) {
		console.log('submit start');
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		loading = true;

		const response = await fetch(form.action, {
			method: 'POST',
			body: formData
		});

		const result = await response.json();

		if (result.data) {
			urls = JSON.parse(result.data).slice(2, 7);
		} else {
			console.error('Unexpected data format received:', result);
		}

		loading = false;
	}
</script>

<div class="flex justify-center items-center">
	<div class="m-20">
		<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				Xsearch
			</span>
		</h1>

		<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10 mb-5">
			<span class="text-2xl font-extrabold text-black">Xsearch</span> The only thing you need to do is
			insert a file of type png or jpeg and press the button!
		</p>
		<div class="flex items-center justify-center">
			<Card class="mx-auto py-8 flex flex-col space-y-6 m-10 w-full h-full">
				<h1 class="text-3xl font-extrabold text-gray-900 dark:text-white p-0">XSearch</h1>
				<form method="POST" action="?/search" on:submit|preventDefault={handleSubmit}>
					<Label class="space-y-4 mb-2">
						<span />
						<Fileupload bind:value name="file" />
					</Label>
					<Button
						type="submit"
						class="w-full mt-5 bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-white hover:font-extrabold "
						disabled={loading}>Search</Button
					>
				</form>
			</Card>
		</div>

		<!-- Show file data image on top -->
		{#if value && value instanceof File}
			<script>
				console.log('File Value:', value);
			</script>
			<img
				src={URL.createObjectURL(value)}
				alt="Uploaded content"
				class="mt-4 mb-4 w-full object-cover"
			/>
		{/if}
		<!-- List 5 image URLs -->
		<div class="relative mt-8 justify-center items-center">
			<div class="rounded-lg shadow-xl bg-gray-50 w-120 h-auto mt-5 p-5">
				<p class="text-xl font-bold text-center">
					Is the image you searched for similar to the one above?
				</p>
				{#if loading}
					<div role="status" class="flex justify-center items-center p-10">
						<svg
							aria-hidden="true"
							class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
				{/if}
				<div class="flex space-x-4 mt-4">
					{#each urls as url (url)}
						<div class="w-1/5 mt-4 flex flex-col">
							<img
								src={url}
								alt=""
								class="h-40 w-40 object-cover rounded transition duration-500 group-hover:scale-105 mx-auto shadow-lg"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="h-40" />
	</div>
</div>

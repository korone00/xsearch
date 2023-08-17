<script lang="ts">
	import { enhance } from '$app/forms';
	import { Card, Label, Input, Button, Fileupload } from 'flowbite-svelte';

	let value: any;
	export let urls: any[] = [];
	let loading = false;

	async function handleSubmit(event: Event) {
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		loading = true;

		const response = await fetch(form.action, {
			method: "POST",
			body: formData,
		});

		const result = await response.json(); 

		if (result.data) {
			urls = JSON.parse(result.data).slice(2, 7);
		} else {
			console.error("Unexpected data format received:", result);
		}

		loading = false;
	}
</script>

<div class="flex justify-center items-center min-h-screen mx-auto">
	<div class="m-20 w-full max-w-2xl">
		<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				Xsearch
			</span>
			Search
		</h1>

		<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10 mb-5">
			<span class="text-2xl font-extrabold text-black">Xsearch</span> The only thing you need to do is insert a file of type png or jpeg and press the button!
		</p>

		<Card class="mx-auto py-8 flex flex-col space-y-6">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">XSearch</h3>
			<form method="POST" action="?/search" on:submit|preventDefault="{handleSubmit}">
				<Label class="space-y-4 mb-2">
					<span></span>
					<Fileupload bind:value name="file" />
				</Label>
				<Button type="submit" class="w-full" disabled={loading}>Search</Button>
			</form>
		</Card>		

		<!-- Show file data image on top -->
		{#if value && value instanceof File}
			<script>
				console.log("File Value:", value);
			</script>
			<img src={URL.createObjectURL(value)} alt="Uploaded content" class="mt-4 mb-4 w-full object-cover"/>
		{/if}
		<!-- List 5 image URLs -->
		<div class="relative mt-8">
			<p class="absolute top-[-20px] left-0 right-0 text-xl font-bold text-center">
				Is the image you searched for similar to the one above?
			</p>
			<div class="flex space-x-4 mt-4">
				{#each urls as url (url)}
					<div class="w-1/5 mt-4 flex flex-col">
						<img src={url} alt="" class="object-cover rounded shadow-lg h-32 w-32 mx-auto"/> <!-- h-32와 w-32로 높이와 너비를 지정 -->
					</div>
				{/each}
			</div>
		</div>		
	</div>
</div>

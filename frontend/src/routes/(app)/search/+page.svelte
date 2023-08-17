<script lang="ts">
	import { enhance } from '$app/forms';
	import { Card, Label, Input, Button, Fileupload } from 'flowbite-svelte';
  
	let value: any;
	export let urls: any[] = []; // initialize with an empty array for safety
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
			urls = JSON.parse(result.data).slice(2, 7); // Update the exported `urls`
		} else {
			console.error("Unexpected data format received:", result);
		}

		loading = false;
	}
</script>
  
<section class="flex items-center justify-center min-h-screen mx-auto">
	<Card class="w-96 py-8 flex flex-col space-y-6">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">XSearch</h3>
		<form method="POST" action="?/search" on:submit|preventDefault="{handleSubmit}">
			<Label class="space-y-2 mb-2">
		  		<span>Upload file</span>
		  		<Fileupload bind:value name="file" />
			</Label>
			<Button type="submit" class="w-full" disabled={loading}>Search</Button>
		</form>
	</Card>
</section>

<body>
	<!-- Show file data image on top -->
	{#if value && value instanceof File}
		<script>
			console.log("File Value:", value);
		</script>
		<img src={URL.createObjectURL(value)} alt="Uploaded content" class="mb-4"/>
	{/if}
	
	<!-- List 5 image URLs -->
	{#each urls as url (url)}
		<img src={url} alt="" class="mb-4"/>
	{/each}
</body>
  




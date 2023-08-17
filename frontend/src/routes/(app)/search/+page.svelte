<script lang="ts">
	import { enhance } from '$app/forms';
	import { Card, Label, Input, Button, Fileupload } from 'flowbite-svelte';
	// import { page } from '@sveltejs/kit/assets/runtime/app/stores';
    import { onMount } from 'svelte';
	let value: any;

    let imageUrls = [];

//    onMount(async () => {
//        const response = await fetch(page.url); // 페이지 URL에 따른 응답을 가져옴
//        imageUrls = await response.json(); // 응답을 JSON으로 파싱하여 imageUrls에 저장
//    });
</script>


<section class="flex items-center justify-center min-h-screen mx-auto">
	<form method="POST" action="?/search" use:enhance>
		<Card class="w-96 py-8 flex flex-col space-y-6">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">XSearch</h3>

			<Label class="space-y-2 mb-2">
				<span>Upload file</span>
				<Fileupload bind:value name="file" />
			</Label>
			
			<Button type="submit" class="w-full">Search</Button>

		</Card>
	</form>
</section>
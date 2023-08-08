<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	export let data;
	console.log(data);
	import { page } from '$app/stores';
	import { Pagination } from 'flowbite-svelte';

	$: activeUrl = $page.url.searchParams.get('page'); // parameter의 page 값.
	let pages = [{ name: '1', href: '/userlist/1', active: false }];
	const total = data.meta.totalPages;
	for (let i = 2; i <= total; i++) {
		pages.push({
			name: `${i}`,
			href: `${i}`,
			active: false
		});
	}

	$: {
		pages.forEach((page) => {
			// page 변수는 pages 배열의 각 객체를 참조
			let splitUrl = page.href.split('?');
			let queryString = splitUrl.slice(1).join('?');
			const hrefParams = new URLSearchParams(queryString);
			let hrefValue = hrefParams.get('page'); // href의 page 값.
			if (hrefValue === activeUrl) {
				page.active = true;
			} else {
				page.active = false;
			}
		});
		pages = pages;
	}

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
</script>

<Table hoverable={true}>
	<TableHead class="text-indigo-600">
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Email</TableHeadCell>
		<TableHeadCell>Phone</TableHeadCell>
		<TableHeadCell>Role</TableHeadCell>
		<TableHeadCell>
			<span class="sr-only">Edit</span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each data.data as item (item.id)}
			<TableBodyRow>
				<TableBodyCell>{item.id}</TableBodyCell>
				<TableBodyCell>{item.name}</TableBodyCell>
				<TableBodyCell>{item.email}</TableBodyCell>
				<TableBodyCell>{item.phone}</TableBodyCell>
				<TableBodyCell>{item.role}</TableBodyCell>
				<TableBodyCell>
					<a
						href="/tables"
						class="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
					>
						Edit
					</a>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
<Pagination
	class="flex justify-center items-center mt-6"
	{pages}
	on:previous={previous}
	on:next={next}
/>

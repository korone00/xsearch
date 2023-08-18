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

<div class="m-20">
	<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
		<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
			>User</span
		> Profiles
	</h1>
	<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10 mb-5">
		This is a list of users. Only admins can see this page. Admins can edit member information or
		delete account information for members who have requested to leave.
	</p>
</div>
<div class="m-10">
	<Table hoverable={true}>
		<TableHead
			class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-xl font-semibold"
		>
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
							href="/profile?userId={item.id}"
							class="font-semibold text-emerald-600 hover:underline"
						>
							Edit
						</a>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
<Pagination
	class="flex justify-center items-center mt-6"
	{pages}
	on:previous={previous}
	on:next={next}
/>

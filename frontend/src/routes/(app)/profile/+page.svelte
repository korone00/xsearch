<script>
	import {
		Card,
		MenuButton,
		Dropdown,
		DropdownItem,
		Avatar,
		Listgroup,
		ListgroupItem
	} from 'flowbite-svelte';
	export let data;
	let properties = ['name', 'phone', 'email']; // 사용자 정보 추가
</script>

<div class="flex justify-center items-center">
	<Card padding="sm" class="min-w-[360px]">
		<div class="flex justify-end">
			<MenuButton />
			<Dropdown class="w-36">
				<DropdownItem href="/profile/edit" class="text-base font-semibold">Edit</DropdownItem>
				{#if data.accessRole === 'admin'}
					<DropdownItem href="/delete" class="text-base font-semibold">Delete</DropdownItem>
				{/if}
			</Dropdown>
		</div>
		<div class="flex flex-col items-center pb-4">
			<Avatar size="lg" />
			<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.id}</h5>
			<span class="text-sm text-gray-500 dark:text-gray-400">{data.role}</span>
			<div class="mt-8">
				<Listgroup>
					{#each properties as property}
						<ListgroupItem class="text-base font-medium hover:bg-gray-100">
							{data[property]}
						</ListgroupItem>
					{/each}
				</Listgroup>
			</div>
		</div>
	</Card>
</div>

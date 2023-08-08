<script>
	import { Card, MenuButton, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
	export let data;
</script>

<div class="flex justify-center items-center">
	<Card padding="sm">
		<div class="flex justify-end">
			<MenuButton />
			<Dropdown class="w-36">
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<!--delete는 관리자에게만 보이게-->
			</Dropdown>
		</div>
		<div class="flex flex-col items-center pb-4">
			<Avatar size="lg" />
			<!--src="" 추가해야함-->
			<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.id}</h5>
			<span class="text-sm text-gray-500 dark:text-gray-400">{data.role}</span>
			<div class="flex mt-4 space-x-3 lg:mt-6">
				<Button>Add friend</Button>
				<Button color="light" class="dark:text-white">Message</Button>
			</div>
		</div>
	</Card>
</div>

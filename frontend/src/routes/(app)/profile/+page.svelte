<script lang="ts">
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
	import * as api from '../../../lib/api';
	import { goto } from '$app/navigation';
	console.log(data.token);
	let properties = ['name', 'phone', 'email'];
	async function deleteUser() {
		if (confirm('정말 사용자를 삭제하시겠습니까?')) {
			console.log(await api.post('auth/delete', { userId: data.id }, data.token));
			alert(data.id + '님 삭제 완료');
			goto('/userlist');
		} else {
			alert('사용자 정보 삭제를 취소하셨습니다.');
		}
	}
</script>

<div class="m-20">
	<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
		<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
			>Your</span
		> Profile
	</h1>
	<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10 mb-5">
		<span class="text-2xl font-extrabold text-black">Hello, {data.id} 🖐️</span>. Here is your
		account information. You can easily edit the info. Just click the edit button!
	</p>
	<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
		The more often you change your password, the better. For administrator accounts, changing your
		password is mandatory due to the risk of your initial password being compromised. P.S. To cancel
		your membership, contact site administrator.
	</p>
	<br />
	<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
		P.S. To cancel your membership, contact site administrator.
	</p>
</div>
<div class="flex justify-center items-center mt-10">
	<Card padding="sm" class="min-w-[360px]">
		<div class="flex justify-end">
			<MenuButton />
			<Dropdown class="w-36">
				{#if data.accessRole === 'user'}
					<DropdownItem href="/profile/edit" class="text-base font-semibold">Edit</DropdownItem>
				{/if}
				{#if data.accessRole === 'admin'}
					<DropdownItem href="/profile/edit?userId={data.id}" class="text-base font-semibold"
						>Edit</DropdownItem
					>
					<DropdownItem on:click={deleteUser} class="text-base font-semibold">Delete</DropdownItem>
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

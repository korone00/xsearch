<script>
	import { Input, Label, Checkbox, Button, A, Radio } from 'flowbite-svelte';
	// import { ActionData, PageData } from './$types'; // 내일 대표님께 여쭤보기
	export let form; //:ActionData
	$: {
		console.log('test');
	}
	let colors = 'purple';
</script>

<form action="?/register" method="POST">
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="id" class="mb-2 text-indigo-400">ID</Label>
			<Input type="text" id="id" name="id" placeholder="kangin" required />
		</div>
		<div>
			<Label for="name" class="mb-2 text-indigo-400">Name</Label>
			<Input type="text" id="name" name="name" placeholder="이강인" required />
		</div>
		<div>
			<Label for="phone" class="mb-2 text-indigo-400">📞 Phone number</Label>
			<Input type="tel" id="phone" name="phone" placeholder="010-5917-7550" required />
		</div>
		<div class="grid grid-cols-2 gap-6">
			<!--	<Label for="role" class="mb-2 text-indigo-400">Role</Label> -->
			<Radio
				name="role"
				class="w-full p-4 bg-white"
				bind:group={colors}
				color="purple"
				value="admin">admin</Radio
			>
			<Radio name="role" class="w-full p-4 bg-white" bind:group={colors} color="purple" value="user"
				>user</Radio
			>
		</div>
	</div>
	<div class="mb-6">
		<Label for="email" class="mb-2 text-indigo-400">✉️ Email address</Label>
		<Input type="email" id="email" name="email" placeholder="kangin@gmail.com" required />
	</div>
	{#if form?.incorrecting}<p class="error text-red-500">Password Mismatch!</p>{/if}
	<!--incorrect (x) incorrecting (o)-->
	<div class="mb-6">
		<Label for="password" class="mb-2 text-indigo-400">🔒 Password</Label>
		<Input type="password" id="password" name="password" placeholder="•••••••••" required />
	</div>
	<div class="mb-6">
		<Label for="confirm_password" class="mb-2 text-indigo-400">✔️ Confirm password</Label>
		<Input
			type="password"
			id="confirm_password"
			name="confirm_password"
			placeholder="•••••••••"
			required
		/>
		<!--로직 구현해야함-->
	</div>
	<Checkbox checked color="purple" class="mb-6 space-x-1 text-indigo-400" required
		>I agree with the <A href="/" class="text-indigo-300 hover:underline">terms and conditions</A
		>.</Checkbox
	>
	<Button
		type="submit"
		class="bg-indigo-500 font-semibold hover:text-indigo-500 hover:bg-indigo-400">Submit</Button
	>
</form>

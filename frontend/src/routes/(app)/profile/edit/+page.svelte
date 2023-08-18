<script lang="ts">
	import { enhance } from '$app/forms';
	import { Input, Label, Checkbox, Button, A, Card } from 'flowbite-svelte';
	export let data;
	console.log(data);
	export let form;
</script>

<Card class="max-w-lg mx-auto mt-8 mb-8">
	<form action="?/modify" method="POST" use:enhance>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<Label for="id" class="mb-2 text-indigo-400">ID</Label>
				<Input type="text" id="id" name="id" placeholder="kangin" required value={data.id} />
			</div>
			<div>
				<Label for="name" class="mb-2 text-indigo-400">Name</Label>
				<Input type="text" id="name" name="name" placeholder="이강인" required value={data.name} />
			</div>
			<div>
				<Label for="phone" class="mb-2 text-indigo-400">📞 Phone number</Label>
				<Input
					type="tel"
					id="phone"
					name="phone"
					placeholder="010-5917-7550"
					required
					value={data.phone}
				/>
			</div>
		</div>
		<div class="mb-6">
			<Label for="email" class="mb-2 text-indigo-400">✉️ Email address</Label>
			<Input
				type="email"
				id="email"
				name="email"
				placeholder="kangin@gmail.com"
				required
				value={data.email}
			/>
		</div>
		<!-- {#if form?.incorrecting}<p class="error text-red-500">Password Mismatch!</p>{/if} -->
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
</Card>

<script>
	import { Input, Label, Checkbox, Button, A, Radio } from 'flowbite-svelte';
	let colors = 'purple';
</script>

<form>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="id" class="mb-2 text-indigo-400">ID</Label>
			<Input type="text" id="id" placeholder="kangin" required />
		</div>
		<div>
			<Label for="name" class="mb-2 text-indigo-400">Name</Label>
			<Input type="text" id="name" placeholder="이강인" required />
		</div>
		<div>
			<Label for="phone" class="mb-2 text-indigo-400">📞 Phone number</Label>
			<Input
				type="tel"
				id="phone"
				placeholder="010-5917-7550"
				pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
				required
			/>
		</div>
		<div class="grid grid-cols-2 gap-6">
			<!--	<Label for="role" class="mb-2 text-indigo-400">Role</Label> -->
			<div class="rounded border border-gray-200 dark:border-gray-700">
				<Radio
					name="role"
					class="w-full p-4 bg-white"
					bind:group={colors}
					color="purple"
					value="text-indigo-500">admin</Radio
				>
			</div>
			<div class="rounded border border-gray-200 dark:border-gray-700">
				<Radio
					name="role"
					class="w-full p-4 bg-white"
					bind:group={colors}
					color="purple"
					value="text-indigo-500">user</Radio
				>
			</div>
		</div>
	</div>
	<div class="mb-6">
		<Label for="email" class="mb-2 text-indigo-400">✉️ Email address</Label>
		<Input type="email" id="email" placeholder="kangin@gmail.com" required />
	</div>
	<div class="mb-6">
		<Label for="password" class="mb-2 text-indigo-400">🔒 Password</Label>
		<Input type="password" id="password" placeholder="•••••••••" required />
	</div>
	<div class="mb-6">
		<Label for="confirm_password" class="mb-2 text-indigo-400">✔️ Confirm password</Label>
		<Input type="password" id="confirm_password" placeholder="•••••••••" required />
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

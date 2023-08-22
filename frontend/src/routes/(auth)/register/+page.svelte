<script>
	import { Input, Label, Checkbox, Button, A, Card } from 'flowbite-svelte';
	export let form;
</script>

<div class="flex m-10 justify-center">
	<div>
		<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
				>Welcome</span
			> to XSearch!
		</h1>
		<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10 mb-5">
			You can sign up with just a few fields. You can only set your ID once, so be careful.
		</p>
	</div>
</div>
<Card class="max-w-lg mx-auto mb-8">
	<div>
		<form action="?/register" method="POST">
			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<Label for="id" class="mb-2 text-sky-500 font-semibold">ID</Label>
					<Input type="text" id="id" name="id" placeholder="kangin" required />
				</div>
				{#if form?.incorrect}<p class="error text-red-500">{form.message}</p>{/if}
				<div>
					<Label for="name" class="mb-2 text-sky-500 font-semibold">Name</Label>
					<Input type="text" id="name" name="name" placeholder="이강인" required />
				</div>
				<div>
					<Label for="phone" class="mb-2 text-sky-500 font-semibold">📞 Phone number</Label>
					<Input type="tel" id="phone" name="phone" placeholder="010-5917-7550" required />
				</div>
			</div>
			<div class="mb-6">
				<Label for="email" class="mb-2 text-sky-500 font-semibold">✉️ Email address</Label>
				<Input type="email" id="email" name="email" placeholder="kangin@gmail.com" required />
			</div>
			{#if form?.incorrecting}<p class="error text-red-500">Password Mismatch!</p>{/if}
			<!--incorrect (x) incorrecting (o)-->
			<div class="mb-6">
				<Label for="password" class="mb-2 text-sky-500 font-semibold">🔒 Password</Label>
				<Input type="password" id="password" name="password" placeholder="•••••••••" required />
			</div>
			<div class="mb-6">
				<Label for="confirm_password" class="mb-2 text-sky-500 font-semibold"
					>✔️ Confirm password</Label
				>
				<Input
					type="password"
					id="confirm_password"
					name="confirm_password"
					placeholder="•••••••••"
					required
				/>
			</div>
			<Checkbox checked color="sky" class="mb-6 space-x-1 text-sky-500" required
				>I agree with the <A href="/" class="text-sky-300 hover:underline">terms and conditions</A
				>.</Checkbox
			>
			<Button
				type="submit"
				class="bg-gradient-to-r to-emerald-600 from-sky-400 font-semibold hover:text-sky-200"
				>Submit</Button
			>
		</form>
	</div>
</Card>

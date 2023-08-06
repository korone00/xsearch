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
</script>

<Table hoverable={true}>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Email</TableHeadCell>
		<TableHeadCell>Phone</TableHeadCell>
		<TableHeadCell>Role</TableHeadCell>
		<TableHeadCell>
			<span class="sr-only"> Edit </span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y"
		><!--정상 작동-->
		<TableBodyRow>
			<TableBodyCell>{data.data[0].id}</TableBodyCell>
			<TableBodyCell>{data.data[0].name}</TableBodyCell>
			<TableBodyCell>{data.data[0].email}</TableBodyCell>
			<TableBodyCell>{data.data[0].phone}</TableBodyCell>
			<TableBodyCell>{data.data[0].role}</TableBodyCell>
			<TableBodyCell>
				<a
					href="/tables"
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
				>
					Edit
				</a>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>{data.data[1].id}</TableBodyCell>
			<TableBodyCell>{data.data[1].name}</TableBodyCell>
			<TableBodyCell>{data.data[1].email}</TableBodyCell>
			<TableBodyCell>{data.data[1].phone}</TableBodyCell>
			<TableBodyCell>{data.data[1].role}</TableBodyCell>
			<TableBodyCell>
				<a
					href="/tables"
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
				>
					Edit
				</a>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>{data.data[2].id}</TableBodyCell>
			<TableBodyCell>{data.data[2].name}</TableBodyCell>
			<TableBodyCell>{data.data[2].email}</TableBodyCell>
			<TableBodyCell>{data.data[2].phone}</TableBodyCell>
			<TableBodyCell>{data.data[2].role}</TableBodyCell>
			<TableBodyCell>
				<a
					href="/tables"
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
				>
					Edit
				</a>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>{data.data[3].id}</TableBodyCell>
			<TableBodyCell>{data.data[3].name}</TableBodyCell>
			<TableBodyCell>{data.data[3].email}</TableBodyCell>
			<TableBodyCell>{data.data[3].phone}</TableBodyCell>
			<TableBodyCell>{data.data[3].role}</TableBodyCell>
			<TableBodyCell>
				<a
					href="/tables"
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
				>
					Edit
				</a>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>{data.data[4].id}</TableBodyCell>
			<TableBodyCell>{data.data[4].name}</TableBodyCell>
			<TableBodyCell>{data.data[4].email}</TableBodyCell>
			<TableBodyCell>{data.data[4].phone}</TableBodyCell>
			<TableBodyCell>{data.data[4].role}</TableBodyCell>
			<TableBodyCell>
				<a
					href="/tables"
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
				>
					Edit
				</a>
			</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>

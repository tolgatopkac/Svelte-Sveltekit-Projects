<script>
	export let index;
	export let todo;
	export let editTodo;
	export let removeTodo;
</script>

<div class="todo">
	<p>
		{index + 1}. {todo}
	</p>
	<div class="actions">
		<svg
			on:click={() => {
				editTodo(index);
			}}
			on:keydown={() => {}}
			viewbox="0 0 32 32"
			width="24"
			height="24"
			stroke="currentColor"
			fill="currentColor"
			><path
				d="M31 3.9a1 1 0 0 1 0 1.4L28.9 7.4l-4-4L27 1.3a1 1 0 0 1 1.4 0l2.6 2.6z m-3.5 4.9l-4-4L9.9 18.4a1 1 0 0 0-0.3 0.4l-1.6 4.8a0.5 0.5 0 0 0 0.7 0.7l4.8-1.6a1 1 0 0 0 0.4-0.3l13.6-13.6z"
				_id="63ce591f68c532f5f3660f0d"
				_parent="63ce591f68c532f5f3660f0c"
				fill-rule="evenodd"
			/><path
				d="M2 27A3 3 0 0 0 5 30h22a3 3 0 0 0 3-3v-12a1 1 0 0 0-2 0v12a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1H18a1 1 0 0 0 0-2H5A3 3 0 0 0 2 5v22z"
			/></svg
		>
		<svg
			on:click={() => {
				removeTodo(index);
			}}
			on:keydown={() => {}}
			viewbox="0 0 32 32"
			width="24"
			height="24"
			stroke="currentColor"
			fill="currentColor"
			><path
				d="M22 3v2h7a1 1 0 0 1 0 2h-1.1l-1.7 21.3A4 4 0 0 1 22.2 32h-12.4a4 4 0 0 1-4-3.7L4.1 7H3a1 1 0 0 1 0-2H10v-2A3 3 0 0 1 13 0h6A3 3 0 0 1 22 3Zm-10 0v2h8v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1ZM9 10.1l1 17a1 1 0 1 0 2-0.2l-1-17a1 1 0 1 0-2 0.2Zm13.1-1.1a1 1 0 0 0-1.1 0.9l-1 17a1 1 0 0 0 2 0.2l1-17a1 1 0 0 0-0.9-1.1ZM16 9a1 1 0 0 0-1 1v17a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1Z"
			/></svg
		>
	</div>
</div>

<style>
	.todo {
		border-left: 1px solid cyan;
		padding: 8px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 1.3rem;
	}

	.actions svg {
		cursor: pointer;
	}
	.actions svg:hover {
		color: coral;
	}
</style>

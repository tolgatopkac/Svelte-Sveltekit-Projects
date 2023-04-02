<script>
	import { authHandlers, authStore } from '../../lib/store/store';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { db } from '../../lib/firebase/firebase';
	import TodoItem from '../../lib/components/TodoItem.svelte';

	let todoList = [];
	let currTodo = '';
	let error = false;

	authStore.subscribe((curr) => {
		todoList = curr.data.todos;
	});

	function addTodo() {
		error = false;
		if (!currTodo) {
			error = true;
		}
		todoList = [...todoList, currTodo];
		currTodo = '';
	}

	function editTodo(index) {
		let newTodoList = todoList.filter((val, i) => {
			return i !== index;
		});
		currTodo = todoList[index];
		todoList = newTodoList;
	}

	function removeTodo(index) {
		let newTodoList = todoList.filter((val, i) => {
			return i !== index;
		});

		todoList = newTodoList;
	}

	async function saveTodos() {
		try {
			const userRef = doc(db, 'users', $authStore.user.uid);
			await setDoc(userRef, { todos: todoList }, { merge: true });
		} catch (err) {
			console.log('There was an error saving your information', err);
		}
	}
</script>

{#if !$authStore.loading}
	<div class="mainContainer">
		<div class="headerContainer">
			<h1>Todo List</h1>
			<div class="headerBtns">
				<button on:click={saveTodos}
					><svg viewbox="0 0 16 16" width="16" height="16" stroke="currentColor" fill="currentColor"
						><path
							d="M13 2H5.7A1 1 0 0 0 5 2.3L2.3 5A1 1 0 0 0 2 5.7V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 11H3V5.7L5.7 3H9.5v1.5H6a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0.5-0.5V3h2.5Zm-5-6a2.3 2.3 0 1 0 2.3 2.3 2.3 2.3 0 0 0-2.3-2.3Zm0 3.5a1.3 1.3 0 1 1 1.3-1.3 1.3 1.3 0 0 1-1.3 1.3Z"
						/></svg
					>Save</button
				>

				<button on:click={() => authHandlers.logout()}
					><svg viewbox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="currentColor"
						><path
							d="M17 7l-1.4 1.4L18.2 11H8v2h10.2l-2.6 2.6L17 17l5-5zM4 5h8V3H4c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h8v-2H4V5z"
						/></svg
					>Logout</button
				>
			</div>
		</div>
		<main>
			{#if todoList.length === 0}
				<p>You have nothing to do!</p>
			{/if}
			{#each todoList as todo, index}
				<TodoItem {todo} {index} {removeTodo} {editTodo} />
			{/each}
		</main>
		<div class={'enterTodo ' + 'error'}>
			<input bind:value={currTodo} type="text" placeholder="Enter Todo" />
			<button on:click={addTodo}>ADD</button>
		</div>
	</div>
{/if}

<style>
	.mainContainer {
		display: flex;
		flex-direction: column;
		gap: 24px;
		min-height: 100vh;
		padding: 24px;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	.headerContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.headerBtns {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.headerContainer button {
		background: #003c6b;
		color: white;
		padding: 14px 18px;
		border-radius: 4px;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.headerContainer button svg {
		font-size: 1.1rem;
	}
	.headerContainer button:hover {
		opacity: 0.7;
	}
	main {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 1;
	}

	.todo {
		border-left: 1px solid cyan;
		padding: 8px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.enterTodo {
		display: flex;
		align-items: stretch;
		border: 1px solid cyan;
		border-radius: 5px;
		overflow: hidden;
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
	.enterTodo input {
		background: transparent;
		border: none;
		padding: 14px;
		color: white;
		flex: 1;
	}

	.enterTodo input:focus {
		outline: none;
	}

	.enterTodo button {
		padding: 0 14px;
		background: #003c6b;
		border: none;
		color: cyan;
		font-weight: 600;
		cursor: pointer;
	}

	.enterTodo button:hover {
		background: transparent;
	}
</style>

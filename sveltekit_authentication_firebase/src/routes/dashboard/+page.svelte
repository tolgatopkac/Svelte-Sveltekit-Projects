<script>
	import AuthReset from '../../lib/components/AuthReset.svelte';
	import { auth } from '../../lib/firebase/firebase.client';
	import { authHandlers, authStore } from '../../lib/stores/authStore';

	let email;
	authStore.subscribe((curr) => {
		email = curr?.currentUser?.email;
	});
</script>

{#if $authStore.currentUser}
	<div>
		<h1>Current User : {email}</h1>
		<AuthReset />
		<button on:click={authHandlers.logout}>Logout</button>
	</div>
{:else}
	<div>Loading...</div>
{/if}

<style>
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		text-align: center;
	}
</style>

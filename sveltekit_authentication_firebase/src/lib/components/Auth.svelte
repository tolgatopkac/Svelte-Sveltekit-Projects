<script>
	import { authHandlers, authStore } from '../stores/authStore';

	let register = true;

	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}

		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}

		if ($authStore.currentUser) {
			window.location.href = '/dashboard';
		}
	}
</script>

<div class="container">
	<h1>{register ? 'Register' : 'Log In'}</h1>
	<form>
		<label for="">
			<input bind:value={email} type="email" placeholder="Email" />
		</label>
		<label for="">
			<input bind:value={password} type="password" placeholder="Password" />
		</label>
		{#if register}
			<label for="">
				<input bind:value={confirmPassword} type="password" placeholder="Confirm Password" />
			</label>
		{/if}
		<button on:click={handleSubmit}>Submit</button>
	</form>
	{#if register}
		<button
			on:click={() => {
				register = false;
			}}
		>
			Already have an account? <p>Log In</p>
		</button>
	{:else}
		<button
			on:click={() => {
				register = true;
			}}
		>
			Don't have an account ? <p>Sign Up</p>
		</button>
		<button on:click={() => authHandlers.resetPassword(email)}> Forgot Password </button>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.container form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>

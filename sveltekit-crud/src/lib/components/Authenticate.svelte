<script>
	let email = '';
	let password = '';
	let confirmPss = '';
</script>

<div class="authContainer">
	<form>
		<h1>Register</h1>
		<label>
			<input bind:value={email} type="email" placeholder="Email" />
		</label>
		<label>
			<input bind:value={password} type="password" placeholder="Password" />
		</label>
		<label>
			<input bind:value={confirmPss} type="password" placeholder="Confirm Password" />
		</label>
		<button type="button">Submit</button>
	</form>
</div>

<style>
	.authContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 24px;
		flex: 1;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 14px;
		width: 400px;
		max-width: 100%;
		margin: 0 auto;
	}

	form input {
		width: 100%;
	}
	h1 {
		text-align: center;
		font-size: 3rem;
	}
	form label {
		position: relative;
		border: 1px solid navy;
		border-radius: 5px;
	}

	form input {
		border: none;
		background-color: transparent;
		color: white;
		padding: 14px;
	}

	form input:focus {
		border: none;
		outline: none;
	}

	form button {
		background-color: navy;
		color: white;
		border: none;
		padding: 14px 0;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1.2rem;
	}

	form button:hover {
		background: blue;
	}
</style>

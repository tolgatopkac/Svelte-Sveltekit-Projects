<script>
	import { page } from '$app/stores';

	$: console.log($page);

	$: routeId = $page.route.id;
</script>

<nav>
	<div class="container">
		<h1>Blog Sveltekit</h1>
		<ul>
			<li>
				<a href="/" class:active={routeId == '/'}>Home</a>
			</li>
			<li>
				<a href="/about" class:active={routeId == '/about'}>About</a>
			</li>
			<li>
				<a href="/services" class:active={routeId == '/services'}>Services</a>
			</li>
			<li>
				<a href="/contact" class:active={routeId == '/contact'}>Contact</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		padding: 0.5em;
		background-color: #343a40;
		color: white;
	}
	.container {
		display: flex;
	}
	ul {
		display: flex;
		margin: 0;
		margin-left: auto;
		list-style: none;
		font-size: 1em;
	}
	li {
		margin-right: 20px;
	}
	h1 {
		margin: 0;
		font-size: 1.3em;
		font-weight: normal;
	}
	a {
		text-decoration: none;
		color: #aaa;
	}
	.active {
		color: white;
	}
</style>

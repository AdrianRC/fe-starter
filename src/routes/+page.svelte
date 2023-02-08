<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Front-end Starter Kit" />
</svelte:head>

<div>
	<h1>Front-end starter kit</h1>
	<p><a href="https://kit.svelte.dev">SvelteKit docs</a></p>
	SVG example<img src={logo} alt="Svelte logo" />
</div>

<div>
	<h2>Form examples</h2>
	<section>
		<h3>Submit, receive and store data</h3>
		{#if data.name}
			<h4>Hello {data.name}!</h4>
			<form method="POST" action="?/delete" use:enhance>
				<button type="submit" value="Submit">Delete cookie</button>
			</form>
		{:else}
			<form method="POST" action="?/create" use:enhance>
				<label>
					What's your name?
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		{/if}
	</section>

	<section>
		<h3>Trigger and display errors</h3>
		<form method="POST" action="?/error" use:enhance>
			<label>
				Trigger error
				<input type="submit" value="Error!" />
			</label>
		</form>

		{#if form?.error}
			<h4>Error message: {JSON.stringify(form.error)}</h4>
		{/if}
	</section>
</div>

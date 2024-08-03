<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.products?.length}
	{#each data.products as { title, handle } (title)}
		<a href="products/{handle}">{title}</a>
	{/each}
{:else}
	<h1>Uh oh, no products</h1>
{/if}

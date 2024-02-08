<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.movies as movie (movie.title)}
	<a href="movies/{movie.slug}">{movie.title}</a>
{/each}

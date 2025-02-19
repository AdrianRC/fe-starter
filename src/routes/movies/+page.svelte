<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

{#each data.movies as movie (movie.title)}
	<a href="movies/{movie.slug}">{movie.title}</a>
{/each}

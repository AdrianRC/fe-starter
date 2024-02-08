<script lang="ts">
	import { imageBuilder } from '$lib/sanity/image';
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { title, releaseDate, overview, poster, castMembers } = data.movie;
</script>

{#if poster}
	<img src={imageBuilder(poster).url()} alt="poster for {title}" />
{/if}
<h1>{title}</h1>
<p>{releaseDate}</p>
<PortableText value={overview} />
<h2>Cast members:</h2>
{#each castMembers as { characterName, person }}
	<p>character: {characterName}</p>
	<p>actor: {person?.name}</p>
	{#if person?.image}
		<img src={imageBuilder(person.image).url()} alt={person.name} />
	{/if}
{/each}

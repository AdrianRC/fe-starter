<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import CoverImage from '$lib/components/CoverImage.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomeContent } = data);
	$: ({ allPosts, site, blog } = $HomeContent.data || {
		allPosts: [],
		site: null,
		blog: null
	});

	$: headTags = blog && site ? blog.seo.concat(site.favicon) : [];
</script>

<Head {headTags} />

{#each allPosts as { slug, coverImage, title, excerpt, date }}
	<a href="/posts/{slug}">
		{#if coverImage}
			<CoverImage {coverImage} {title} />
		{/if}
		<h3>{title} - {date}</h3>
		<p>{excerpt}</p>
	</a>
{/each}

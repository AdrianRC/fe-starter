<script lang="ts">
	import StructuredText from '$lib/components/StructuredText.svelte';
	import CoverImage from '$lib/components/CoverImage.svelte';
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ PostContent } = data);
	$: ({ site, post } = $PostContent.data || {
		site: null,
		post: null
	});
	$: headTags = post && site ? post.seo.concat(site.favicon) : [];
</script>

<Head {headTags} />

{#if post}
	<article>
		<h1>{post.title} - {post.date}</h1>
		{#if post.coverImage}
			<CoverImage title={post.title} coverImage={post.coverImage} />
		{/if}
		{#if post.content}
			<StructuredText structuredText={post.content} />
		{/if}
	</article>
{/if}

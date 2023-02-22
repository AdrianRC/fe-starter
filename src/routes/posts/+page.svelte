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

{#each allPosts as post}
	<a href="/posts/{post.slug}">
		{#if post.coverImage}
			<CoverImage coverImage={post.coverImage} title={post.title} />
		{/if}
		<h3>{post.title} - {post.date}</h3>
		<p>{post.excerpt}</p>
	</a>
{/each}

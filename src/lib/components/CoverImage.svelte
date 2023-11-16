<script lang="ts">
	import { fragment, graphql, ImageFragment } from '$houdini';
	import Image from './Image.svelte';

	export let title: string | null = null;
	export let slug: string | null = null;
	export let coverImage: ImageFragment;

	$: coverImageFragment = fragment(
		coverImage,
		graphql(`
			fragment ImageFragment on FileField {
				responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
					base64
					src
					width
					height
					alt
					title
				}
			}
		`)
	);
</script>

<div>
	{#if slug}
		<a href={`posts/${slug}`} aria-label={title}>
			<Image
				data={{
					...$coverImageFragment.responsiveImage,
					alt: `Cover Image for ${title}`
				}}
			/>
		</a>
	{:else}
		<Image
			data={{
				...$coverImageFragment.responsiveImage,
				alt: `Cover Image for ${title}`
			}}
		/>
	{/if}
</div>

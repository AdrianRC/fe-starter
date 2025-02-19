<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div>
	<h1>{data.product.title}</h1>
	<p>{@html data.product.descriptionHtml}</p>
	{#if data.product.featuredImage}
		{@const image = data.product.featuredImage}
		<img src={image.url} alt={image.altText} width={image.width} height={image.height} />
	{/if}
</div>

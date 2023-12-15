<script lang="ts">
	import tweenIn from '$lib/transitions/tweenIn';
	import tweenOut from '$lib/transitions/tweenOut';

	let visible = true;
	const duration = 1;
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<div class="box" in:tweenIn={duration} out:tweenOut={duration} />
{/if}

<style>
	.box {
		width: 100px;
		height: 100px;
		background: black;
	}
</style>

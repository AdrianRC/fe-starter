<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let boxesContainer: HTMLElement | null;
	const tl = gsap.timeline({ paused: true });

	const toggleTimeline = () => {
		tl.reversed(!tl.reversed());
	};

	onMount(() => {
		const ctx = gsap.context((self) => {
			if (!self.selector || !boxesContainer) return;
			const boxes = self.selector('.box');
			tl.to(boxes[0], { x: 120, rotation: 360 })
				.to(boxes[1], { x: -120, rotation: -360 }, '<')
				.to(boxes[2], { y: -166 })
				.reverse();
		}, boxesContainer as Element); // <- Scope!

		return () => ctx.revert(); // <- Cleanup!
	});
</script>

<section class="boxes-container" bind:this={boxesContainer}>
	<h1>Use the button to toggle a Timeline</h1>
	<div>
		<button on:click={toggleTimeline}>Toggle Timeline</button>
	</div>
	<div class="box">Box 1</div>
	<div class="box">Box 2</div>
	<div class="box">Box 3</div>
</section>

<style lang="postcss">
	button {
		padding: 0.5rem;
	}

	.boxes-container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}

	.box {
		background-color: #28a92b;
		width: 100px;
		height: 100px;
		line-height: 100px;
		border-radius: 10px;
		font-size: 1.5rem;
		text-align: center;
	}
</style>

import gsap from 'gsap';

export default function tweenIn(node: HTMLDivElement, duration = 1) {
	const tl = gsap.timeline();

	tl.from(node, {
		duration,
		opacity: 0
	}).from(
		node,
		{
			duration,
			xPercent: 100,
			rotation: -90,
			yPercent: 100,
			ease: 'bounce.out'
		},
		`-=${duration * 0.75}`
	);

	return {
		/* GSAP's duration is in seconds. Svelte's is in miliseconds */
		duration: duration * 1000,
		tick: (t: number) => {
			tl.progress(t);
		}
	};
}

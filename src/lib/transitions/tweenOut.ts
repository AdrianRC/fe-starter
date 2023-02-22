import gsap from 'gsap';

export default function (node: HTMLDivElement, duration = 1) {
	const tl = gsap.timeline();

	tl.to(node, {
		duration,
		yPercent: 100,
		ease: 'back.in'
	}).to(
		node,
		{
			duration: duration * 0.25,
			opacity: 0
		},
		`-=${duration * 0.25}`
	);

	return {
		/* GSAP's duration is in seconds. Svelte's is in miliseconds */
		duration: duration * 1000,
		tick: (t: number, u: number) => {
			tl.progress(u);
		}
	};
}

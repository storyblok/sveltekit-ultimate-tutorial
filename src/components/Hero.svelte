<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
	let heroClasses = blok.layout === 'constrained' ? 'container mx-auto' : '';
</script>

<div
	use:storyblokEditable={blok}
	class={'min-h-[500px] relative flex items-end justify-center p-9 my-6 rounded-[5px] overflow-hidden ' +
		`${heroClasses}`}
>
	<div class="relative z-10 text-center">
		<h1 class="text-6xl text-white font-bold mb-3">
			{blok.headline}
		</h1>
		<h2 class="text-4xl text-white font-light">
			{blok.subheadline}
		</h2>
	</div>
	<img
		src={blok.background_image.filename}
		alt={blok.background_image.alt}
		class="absolute top-0 left-0 z-0 w-full h-full object-cover"
	/>
</div>

<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<h2 use:storyblokEditable={blok} class="py-32 text-6xl text-[#50b0ae] font-bold text-center">
	{blok.headline}
</h2>

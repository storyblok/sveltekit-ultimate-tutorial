<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;

	$: console.log('BLOK PAGE changed ', blok.body);
</script>

<div use:storyblokEditable={blok} class="px-4">
	{#each blok.body as b}
		{#key b}
			<StoryblokComponent blok={b} />
		{/key}
	{/each}
</div>

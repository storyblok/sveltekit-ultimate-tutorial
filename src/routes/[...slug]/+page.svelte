<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	const lang = writable();
	lang.set(data.language);
	setContext('lang', lang);

	onMount(() => {
		if (data.story) {
			const resolveRelations = ['popular-articles.articles'];
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory), {
				resolveRelations: resolveRelations, 
				preventClicks: true
			});
		}
	});
</script>

<svelte:head>
	<title>{data.story.name}</title>
</svelte:head>
{#key data}
	<div>
		{#if data.story}
			<StoryblokComponent blok={data.story.content} />
		{/if}
	</div>
{/key}

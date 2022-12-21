<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		if (data.story) {
			const resolveRelations = ['popular-articles.articles'];
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory), {
				resolveRelations: resolveRelations
			});
		}
	});
</script>

<svelte:head>
	<title>{data.story.name}</title>
</svelte:head>
<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>

<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
import Header from '../../components/Header.svelte';
	export let data;

	onMount(() => {
    console.log("ONMOUNT", data.story)
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory),
      { preventClicks: true}
      );
		}
	});
</script>

<svelte:head>
  <title>{data.story.name}</title>
</svelte:head>
<div>
	{#if data.story}

  <Header header={data.story.content} />


	{/if}
</div>

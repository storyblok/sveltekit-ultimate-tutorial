<script context="module">
	import { useStoryblokApi } from '@storyblok/svelte';

	export async function load({ params }) {
		const storyblokApi = useStoryblokApi();
		let slug = params.slug;
		let path = 'cdn/stories/part-2/';
		if (slug) {
			path += slug;
		} else {
			path += 'home';
		}
		const data = await storyblokApi.get(path, { version: 'draft' });
		return {
			props: { story: data.data.story }
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let story;

	onMount(() => {
		useStoryblokBridge(story.id, (newStory) => (story = newStory));
	});
</script>

<div>
	{#if story}
		<StoryblokComponent blok={story.content} />
	{/if}
</div>
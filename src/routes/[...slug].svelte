<script context="module">
	import { useStoryblokApi } from '@storyblok/svelte';

	export async function load({ params }) {
		const storyblokApi = useStoryblokApi();

		// let slug = "home"
		// if (params.slug === "") {
		// 	slug = "home"
		// } else {
		// 	slug = params.slug
		// }
		let slug = `cdn/stories/${params.slug}` 
		const data = await storyblokApi.get(slug ? slug : 'home', { version: 'draft' });

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

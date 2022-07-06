<script>
	import { useStoryblokApi } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	export let headerMenu;

	onMount(async () => {
		const storyblokApi = useStoryblokApi();

		const data = await storyblokApi.get('cdn/stories/part-3/config/', {
			version: 'draft',
			resolve_links: 'url'
		});

		headerMenu = data.data.story.content.header_menu;
	});
</script>

<header class="w-full h-24 bg-[#f7f6fd]">
	<div class="container h-full mx-auto flex items-center justify-between">
		<a href="home">
			<h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok SvelteKit</h1>
		</a>
		{#if headerMenu}
			<nav>
				<ul class="flex space-x-8 text-lg font-bold">
					{#each headerMenu as blok}
						<li class="hover:text-[#50b0ae]">
							<a href={blok.link.story.slug}> {blok.link.story.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</header>
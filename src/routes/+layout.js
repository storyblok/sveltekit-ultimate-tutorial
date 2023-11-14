import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';
import Hero from '../components/Hero.svelte';
import Article from '../components/Article.svelte';
import PopularArticles from '../components/PopularArticles.svelte';
import AllArticles from '../components/AllArticles.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'MX4ACP2TErhMWLJh8QIFlwtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			hero: Hero,
			article: Article,
			'popular-articles': PopularArticles,
			'all-articles': AllArticles
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi	};
}

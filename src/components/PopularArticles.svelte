<script>
	import ArticleCard from './ArticleCard.svelte';
	export let blok;
</script>

<div class="py-24">
	<h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{blok.headline}</h2>
	<div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
		{#each blok.articles as article}
			<ArticleCard article={article.content} slug={article.full_slug} />
		{/each}
	</div>
</div>

<script>
	import { getContext } from "svelte";
	const languages = ['en', 'es']
	let currentLang = getContext('lang');
</script>

<header class="w-full h-24 bg-[#f7f6fd]">
	<div class="container h-full mx-auto flex items-center justify-between">
		<a href="/home">
			<h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok SvelteKit</h1>
		</a>
			<nav>
				<ul class="flex space-x-8 text-lg font-bold">
					<li class="hover:text-[#50b0ae]">
						<a href="/about"> About</a>
					</li>
					<li class="hover:text-[#50b0ae]">
						<a href="/blog">Blog</a>
					</li>
					{#each languages as lang}
						<li>
							<a data-sveltekit-reload class:active={$currentLang === lang}
							href={`/${lang}/home`} class="hover:text-[#50b0ae]" >{lang}</a>
						</li>
					{/each}
				</ul>
			</nav>
	</div>
</header>

<style>
	nav a.active {
		color: #50b0ae;
	}
</style>
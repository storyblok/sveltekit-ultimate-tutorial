<script>
	export let header;

</script>

<header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
        <a href="home">
            <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok SvelteKit</h1>
        </a>
        {#if header}
            <nav>
                <ul class="flex space-x-8 text-lg font-bold">
                    {#each header as blok}
                        <li class="hover:text-[#50b0ae]">
                            <a href={blok.link.story.slug}> {blok.link.story.name}</a>
                        </li>
                    {/each}
                </ul>
            </nav>
        {/if}
    </div>
</header>

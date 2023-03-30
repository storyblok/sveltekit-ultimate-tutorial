<script>
  import { storyblokEditable } from '@storyblok/svelte';
	export let header;


</script>


<header use:storyblokEditable={header} class="w-full h-24 bg-[#f7f6fd]">

    <div class="container h-full mx-auto flex items-center justify-between">
        <a href="home">
            <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok SvelteKit</h1>
        </a>
        {#if header.header_menu}

            <nav>
                <ul class="flex space-x-8 text-lg font-bold">
                    {#each header.header_menu as blok}
                        <li class="hover:text-[#50b0ae]" use:storyblokEditable={blok}>
                            <a href={blok.link.slug}> {blok.name}</a>
                        </li>
                    {/each}
                </ul>
            </nav>
        {/if}
    </div>
</header>

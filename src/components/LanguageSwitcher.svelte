<script>
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';
    import { writable } from 'svelte/store';

    const lang = getContext('lang');
    const currentLang = writable('en');

    onMount(async () => {
        currentLang.set($lang);
	});

    function toggleLanguage() {
        currentLang.update(lang => (lang === 'en' ? 'es' : 'en'));
    }

</script>
  
<div>
    <a class="hover:bg-gray-200 px-2 underline " href={`/${$currentLang}/home`} on:click={toggleLanguage}>
        {$currentLang}
    </a>
</div>

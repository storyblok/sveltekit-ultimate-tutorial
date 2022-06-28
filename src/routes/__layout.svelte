<script context="module">
    import { storyblokInit, apiPlugin } from "@storyblok/svelte";
    import Feature from '../components/Feature.svelte';
    import Grid from '../components/Grid.svelte';
    import Page from '../components/Page.svelte';
    import Teaser from '../components/Teaser.svelte';
    import Header from '../components/Header.svelte';
   
    storyblokInit({
      accessToken: "WTz76vWjF0zkH9sKjg0Hdgtt",
      use: [apiPlugin],
      components: {
        feature: Feature,
        grid: Grid,
        page: Page,
        teaser: Teaser,
      },
    });
    
  </script>
  <main>
    <Header />
      <slot/>
  </main>
import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "U4mv54ozRXmfv2EraUpiTwtt",
    use: [apiPlugin],
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    },
    // if you are using a space located in US region
    // you have to use apiOptions.region:
    /*
    apiOptions: {
      region: "us" // region code here
    }
    */
  });
  let storyblokApi = await useStoryblokApi();
  const dataConfig = await storyblokApi.get('cdn/stories/config/', {
    version: 'draft',
    resolve_links: 'url'
  });

  return {
    storyblokApi: storyblokApi,
    header: dataConfig.data.story.content.header_menu
  };
}

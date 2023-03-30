
import Header from "../../components/Header.svelte";
import Config from "../../components/Config.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "u2fPkA4eCxmoae9rZlsqVgtt",
    use: [apiPlugin],
    components: {
      config: Config,
    },
  });
  let storyblokApi = await useStoryblokApi();

  return {
    storyblokApi: storyblokApi,
  };
}

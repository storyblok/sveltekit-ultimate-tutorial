import { getStoryblokApi } from "@storyblok/svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

  let storyblokApi = await getStoryblokApi();

  if (!storyblokApi) {
    storyblokInit({
      accessToken: "W1vLyxT5rQ15jBpANjnv0gtt",
      use: [apiPlugin],
    });
    storyblokApi = await getStoryblokApi();
  }
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return { story: data.story };

}

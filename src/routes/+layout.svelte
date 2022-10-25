
<script>
  import "../app.css";
  import { useStoryblokBridge } from "@storyblok/svelte";
  import { onMount } from "svelte";

  export let data;
  let { story } = data;
  onMount(() => {
    if (story) {
      useStoryblokBridge(story.id, (newStory) => (story = newStory));
    }

  });
</script>

<main>
  <slot />
</main>

<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";
  import Header from "./Header.svelte";

  export let blok;

</script>

{#key blok}
  <div use:storyblokEditable={blok}>
    <Header header={blok.header_menu} />
  </div>
{/key}

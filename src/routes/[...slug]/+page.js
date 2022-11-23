/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const { storyblokApi } = await parent();
  let slug = params.slug;
  let path = 'cdn/stories/';
  if (slug) {
    path += slug;
  } else {
    path += 'home';
  }
  const dataStory = await storyblokApi.get(path, {
    version: 'draft'
  });
  return {
    story: dataStory.data.story
  };

}

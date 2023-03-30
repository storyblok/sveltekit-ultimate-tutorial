/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const { storyblokApi } = await parent();
  let path = 'cdn/stories/config';
  const dataConfig = await storyblokApi.get(path, {
    version: 'draft',
    resolve_links: 'url'
  });

  return {
    story: dataConfig.data.story

  };

}

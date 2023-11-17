/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  let languages = ['en', 'es']
  let language = ''
  const { storyblokApi } = await parent();
  let slug = params.slug;
  let path = 'cdn/stories/';

  if (slug) {
    let urlParts = slug.split('/')
    if (languages.includes(urlParts[0])){
      language = urlParts[0]
      urlParts.shift()
      path += urlParts.join('/')
    }
    else {
      path += slug;
    }
  }
  else {
    path += 'home'
  }
  const resolveRelations = ['popular-articles.articles']
  const dataStory = await storyblokApi.get(path, {
    version: 'draft',
    resolve_relations: resolveRelations, 
    language: 'es'
  });  

  return {
    story: dataStory.data.story
  };

}



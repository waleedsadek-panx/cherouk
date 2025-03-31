import { g as getCollection } from './_astro_content_CP3JaPUP.mjs';
import { d as defaultLocale } from './site.config_CJ5kdoCv.mjs';

async function getCollectionStaticPaths(collectionName, locale) {
  const collection = await getCollection(collectionName);
  const visibleItems = collection.filter((item) => {
    return !item.data.hidden;
  });
  const paths = visibleItems.map((item) => {
    const [lang, ...slug] = item.slug.split("/");
    let localizedSlug = slug;
    {
      localizedSlug = slug[0] === "homepage" || slug[0] === "index" ? [] : slug;
    }
    if (lang !== defaultLocale && true) {
      localizedSlug = [lang, ...localizedSlug];
    }
    return {
      params: {
        lang,
        slug: localizedSlug.join("/") || void 0
      },
      props: {
        data: item
      }
    };
  });
  let pathsRes = paths;
  return pathsRes;
}

export { getCollectionStaticPaths as g };

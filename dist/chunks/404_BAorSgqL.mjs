import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_ByHVkS3h.mjs';
import 'kleur/colors';
import { $ as $$Link, a as $$Container } from './Link_BBbFmZrG.mjs';
import { $ as $$Title } from './Title_BsLnKLS_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Chr11PKn.mjs';

const $$NotFound = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "tag": "section", "class": "pt-52 pb-40 md:pb-48 md:pt-64" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto text-center flex flex-col max-w-xl gap-12"> <div class="flex flex-col gap-4"> ${renderComponent($$result2, "Title", $$Title, { "level": 4, "tag": 2 }, { "default": ($$result3) => renderTemplate`404` })} ${renderComponent($$result2, "Title", $$Title, { "level": 3, "tag": 1 }, { "default": ($$result3) => renderTemplate`Whoops! La pagina che stai cercando non è stata trovata.` })} </div> <div class="flex flex-col gap-2"> <p class="text-gray-500 dark:text-gray-400">
Ecco alcune pagine che potresti visitare:
</p> <ul class="flex flex-wrap justify-center items-center gap-x-4 text-gray-500 dark:text-gray-400"> <li> ${renderComponent($$result2, "Link", $$Link, { "href": "/" }, { "default": ($$result3) => renderTemplate`Home` })} </li> <li> ${renderComponent($$result2, "Link", $$Link, { "href": "https://tally.so/r/3lzAdo" }, { "default": ($$result3) => renderTemplate`حجز تذكرة` })} </li> </ul> </div> </div> ` })}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/NotFound.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotFound", $$NotFound, {})} ` })}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/pages/404.astro", void 0);

const $$file = "C:/Users/yourn/Downloads/shrouk/shrouk/src/pages/404.astro";
const $$url = "/cherouk/404";

export { $$404 as default, $$file as file, $$url as url };

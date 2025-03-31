import { b as createAstro, c as createComponent, r as renderComponent, d as renderSlot, a as renderTemplate } from './astro/server_ByHVkS3h.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://ganabo.xyz/cherouk");
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  let { level = 2, tag, class: className, ...rest } = Astro2.props;
  tag = tag ?? level;
  const Element = `h${tag}`;
  return renderTemplate`${renderComponent($$result, "Element", Element, { "class:list": [
    level === 1 && "sm:text-6xl text-5xl xl:text-8xl",
    level === 2 && "sm:text-4xl text-3xl xl:text-5xl",
    level === 3 && "text-3xl md:text-4xl",
    level === 4 && "text-xl md:text-2xl",
    level === 5 && "text-lg md:text-xl",
    level === 6 && "text-lg md:text-xl",
    className
  ], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/primitives/Title.astro", void 0);

export { $$Title as $ };

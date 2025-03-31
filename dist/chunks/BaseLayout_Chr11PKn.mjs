import { b as createAstro, c as createComponent, e as addAttribute, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, f as renderHead, d as renderSlot, F as Fragment, m as maybeRenderHead, g as createTransitionScope } from './astro/server_ByHVkS3h.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { d as defaultLocale } from './site.config_CJ5kdoCv.mjs';
import { g as getCollection } from './_astro_content_CP3JaPUP.mjs';
import { $ as $$Link, a as $$Container, b as $$Icon } from './Link_BBbFmZrG.mjs';

const $$Astro$d = createAstro("https://ganabo.xyz/cherouk");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro/components/ViewTransitions.astro", void 0);

const pwaAssetsHead = {"links":[]};

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/cheroukmanifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/cheroukmanifest.webmanifest\">"}};

const phone = "00966123456789";
const mail = "info@ganabo.xyz";
const socials = [
	{
		title: "Facebook",
		link: "https://facebook.com",
		icon: "ic:baseline-facebook"
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com/",
		icon: "mdi:instagram"
	},
	{
		title: "Youtube",
		link: "https://www.youtube.com/",
		icon: "mdi:youtube"
	}
];
const contacts = {
	phone: phone,
	mail: mail,
	socials: socials
};

const title$1 = "احجز مكانك في الحدث العقاري الأهم الآن!";
const copyright = "الشروق لتنظيم المعارض والمؤتمرات ٢٠٢٥ ©";
const buttons = [
	{
		text: "احجز مقعدك الآن",
		url: "https://tally.so/r/3lzAdo"
	}
];
const footerIt = {
	title: title$1,
	copyright: copyright,
	buttons: buttons
};

const logo = {
	imagePath: "/src/assets/global/navigation/logo.svg"
};
const pages = [
	{
		title: "الصفحة الرئيسية",
		link: "/"
	},
	{
		title: "حجز تذكرة",
		link: "https://tally.so/r/3lzAdo"
	}
];
const actions = [
];
const headerIt = {
	logo: logo,
	pages: pages,
	actions: actions
};

const title = "Agenzia Web Leader nelle Soluzioni di Web Design Performanti - Your Company Studio";
const description = "Your Company Studio eccelle nella creazione di siti web veloci e facili da usare con un focus sul design estetico e l'ottimizzazione SEO, garantendo una presenza online di spicco";
const author = "Your Company";
const seoIt = {
	title: title,
	description: description,
	author: author
};

const theme = {
	colors: {
		primary: "#439db4",
		secondary: "#407492",
		tileColor: "#ffffff"
	}
};
const style = {
	theme: theme
};

const enabled = false;
const icon = "whatsapp";
const link = "https://api.whatsapp.com/send?phone= +390438980026";
const widget = {
	enabled: enabled,
	icon: icon,
	link: link
};

const settings = {
  ar: {
    header: headerIt,
    footer: footerIt,
    contacts,
    seo: seoIt,
    style,
    widget
  }
};
function getLocalizedSettings(locale) {
  return settings[locale ?? defaultLocale] ?? settings[defaultLocale];
}
function translatePath(l, path) {
  return l === defaultLocale ? path : `/${l}${path}`;
}

const $$Astro$c = createAstro("https://ganabo.xyz/cherouk");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$b = createAstro("https://ganabo.xyz/cherouk");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$a = createAstro("https://ganabo.xyz/cherouk");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$9 = createAstro("https://ganabo.xyz/cherouk");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$8 = createAstro("https://ganabo.xyz/cherouk");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$7 = createAstro("https://ganabo.xyz/cherouk");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$6 = createAstro("https://ganabo.xyz/cherouk");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$5 = createAstro("https://ganabo.xyz/cherouk");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://ganabo.xyz/cherouk");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Head;
  const currentLocale = Astro2.currentLocale;
  const { seo: defaultSeo, style } = getLocalizedSettings(currentLocale);
  const { seo: seoProp } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const pathWithSlash = Astro2.url.pathname.endsWith("/") ? Astro2.url.pathname : `${Astro2.url.pathname}/`;
  const shareImage = new URL(
    "og.png",
    new URL(pathWithSlash, Astro2.site)
  ).toString();
  const baseSeo = {
    title: seoProp?.title ?? defaultSeo.title,
    description: seoProp?.description ?? defaultSeo.description,
    charset: "UTF-8",
    canonical: canonicalURL,
    openGraph: {
      basic: {
        url: canonicalURL,
        title: seoProp?.title ?? defaultSeo.title,
        type: "website",
        image: shareImage
      },
      optional: {
        description: seoProp?.description ?? defaultSeo.description,
        siteName: seoProp?.title ?? defaultSeo.title
      }
    },
    twitter: {
      site: canonicalURL
    },
    extend: {
      meta: [
        {
          name: "publisher",
          content: seoProp?.author ?? defaultSeo.author
        },
        {
          name: "author",
          content: seoProp?.author ?? defaultSeo.author
        },
        {
          name: "msapplication-TileColor",
          content: style.theme.colors.tileColor
        }
      ]
    }
  };
  const seo = {
    ...baseSeo,
    ...seoProp
  };
  return renderTemplate(_a || (_a = __template(['<head><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">', "", "", "", '<!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-MYSZERF2E1"><\/script><!-- PRECONNECT FONTS --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- FONTS --><link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><!-- LIBS --><script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.13.5/dist/cdn.min.js"><\/script><script defer src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-clipboard@2.3.0/dist/alpine-clipboard.js"><\/script>', "", "</head>"])), renderComponent($$result, "SEO", $$SEO, { ...seo }), pwaAssetsHead.themeColor && renderTemplate`<meta name="theme-color"${addAttribute(pwaAssetsHead.themeColor.content, "content")}>`, pwaAssetsHead.links.map((link) => renderTemplate`<link${spreadAttributes(link)}>`), pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.webManifest.linkTag)}` })}`, renderSlot($$result, $$slots["default"]), renderHead());
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/Head.astro", void 0);

const $$Astro$3 = createAstro("https://ganabo.xyz/cherouk");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLocale = Astro2.currentLocale;
  const { footer, contacts } = getLocalizedSettings(currentLocale);
  const pages = await getCollection("pages");
  pages.map((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return {
      ...page,
      lang,
      slug: page.slug.startsWith("/") ? page.slug : `/${page.slug}`
    };
  }).filter(
    (page) => page.lang === currentLocale && page.data.type === "informational"
  ).slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<div class="flex-col text-sm font-medium justify-end pb-10 px-4 lg:px-20 pt-16 flex bg-black" dir="rtl"> ${renderComponent($$result, "Container", $$Container, {}, { "default": async ($$result2) => renderTemplate` <div class="items-center flex-col w-full"> <div class="items-center flex-col justify-center flex text-white text-center"> <h3 class="text-4xl lg:text-6xl leading-normal text-center max-w-4xl">${unescapeHTML(footer.title)}</h3> <div class="mt-12 flex gap-4 flex-row-reverse justify-center"> ${footer?.buttons?.map(({ text, url }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": url, "style": "buttonLight", "icon": "iconamoon:arrow-top-left-1-thin", "class": "flex items-center gap-x-2" }, { "default": async ($$result3) => renderTemplate`${text}` })}`)} </div> </div> <div class="grid grid-cols-1 lg:grid-cols-1 mt-16 gap-10">  <!-- Centered Contact Section --> <hr class="border-t border-gray-300 w-16 my-8 mx-auto"> <div class="flex gap-6 mt-6 justify-center"> <!-- Snapchat --> <a href="https://snapchat.com/[YOUR_SNAPCHAT_URL]" target="_blank" class="text-white hover:text-gray-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" class="h-6 w-6" fill="currentColor"> <path d="M30.893,22.837c-.208-.567-.606-.871-1.058-1.122-.085-.05-.163-.09-.23-.12-.135-.07-.273-.137-.41-.208-1.41-.747-2.51-1.69-3.274-2.808-.217-.315-.405-.648-.562-.996-.065-.186-.062-.292-.015-.389,.046-.074,.108-.138,.18-.188,.242-.16,.492-.323,.661-.432,.302-.195,.541-.35,.695-.46,.579-.405,.983-.835,1.236-1.315,.357-.672,.404-1.466,.13-2.175-.383-1.009-1.336-1.635-2.49-1.635-.243,0-.486,.025-.724,.077-.064,.014-.127,.028-.189,.044,.011-.69-.005-1.418-.066-2.135-.218-2.519-1.1-3.84-2.02-4.893-.589-.66-1.283-1.218-2.053-1.653-1.396-.797-2.979-1.202-4.704-1.202s-3.301,.405-4.698,1.202c-.773,.434-1.468,.994-2.057,1.656-.92,1.053-1.802,2.376-2.02,4.893-.061,.717-.077,1.449-.067,2.135-.062-.016-.125-.031-.189-.044-.238-.051-.481-.077-.724-.077-1.155,0-2.109,.626-2.491,1.635-.276,.71-.23,1.505,.126,2.178,.254,.481,.658,.911,1.237,1.315,.153,.107,.393,.262,.695,.46,.163,.106,.402,.261,.635,.415,.082,.053,.151,.123,.204,.205,.049,.1,.051,.208-.022,.408-.155,.341-.34,.668-.553,.976-.747,1.092-1.815,2.018-3.179,2.759-.723,.383-1.474,.639-1.791,1.502-.239,.651-.083,1.391,.525,2.015h0c.223,.233,.482,.429,.766,.58,.592,.326,1.222,.578,1.876,.75,.135,.035,.263,.092,.379,.169,.222,.194,.19,.486,.485,.914,.148,.221,.336,.412,.555,.564,.619,.428,1.315,.455,2.053,.483,.666,.025,1.421,.054,2.283,.339,.357,.118,.728,.346,1.158,.613,1.032,.635,2.446,1.503,4.811,1.503s3.789-.873,4.829-1.51c.427-.262,.796-.488,1.143-.603,.862-.285,1.617-.313,2.283-.339,.737-.028,1.433-.055,2.053-.483,.259-.181,.475-.416,.632-.69,.212-.361,.207-.613,.406-.789,.109-.074,.229-.129,.356-.162,.662-.173,1.301-.428,1.901-.757,.302-.162,.575-.375,.805-.63l.008-.009c.57-.61,.714-1.329,.48-1.964Zm-2.102,1.13c-1.282,.708-2.135,.632-2.798,1.059-.563,.363-.23,1.144-.639,1.426-.503,.347-1.989-.025-3.909,.609-1.584,.524-2.594,2.029-5.442,2.029s-3.835-1.502-5.444-2.033c-1.916-.634-3.406-.262-3.909-.609-.409-.282-.077-1.064-.639-1.426-.664-.427-1.516-.351-2.798-1.055-.816-.451-.353-.73-.081-.862,4.645-2.249,5.386-5.721,5.419-5.979,.04-.312,.084-.557-.259-.875-.332-.307-1.804-1.218-2.213-1.503-.676-.472-.973-.944-.754-1.523,.153-.401,.527-.552,.92-.552,.124,0,.248,.014,.369,.041,.742,.161,1.462,.533,1.879,.633,.05,.013,.102,.02,.153,.021,.222,0,.3-.112,.285-.366-.048-.812-.162-2.394-.034-3.872,.176-2.034,.831-3.042,1.61-3.934,.374-.428,2.132-2.286,5.493-2.286s5.123,1.85,5.497,2.276c.78,.891,1.436,1.899,1.61,3.934,.128,1.479,.018,3.061-.034,3.872-.018,.268,.063,.366,.285,.366,.052,0,.103-.008,.153-.021,.417-.1,1.137-.472,1.879-.633,.121-.027,.245-.041,.369-.041,.395,0,.766,.153,.92,.552,.219,.579-.077,1.051-.753,1.523-.409,.285-1.881,1.196-2.213,1.503-.344,.317-.299,.563-.259,.875,.033,.261,.773,3.734,5.419,5.979,.274,.137,.737,.416-.079,.871Z"></path> </svg> </a> <!-- Instagram --> <a href="https://instagram.com/[YOUR_INSTAGRAM_URL]" target="_blank" class="text-white hover:text-gray-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" class="h-6 w-6" fill="currentColor"> <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path> </svg> </a> <!-- TikTok --> <a href="https://tiktok.com/[YOUR_TIKTOK_URL]" target="_blank" class="text-white hover:text-gray-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" class="h-6 w-6" fill="currentColor"> <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path> </svg> </a> <!-- WhatsApp --> <a href="https://wa.me/[PHONE_NUMBER]" target="_blank" class="text-white hover:text-gray-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" class="h-6 w-6" fill="currentColor"> <path d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" fill-rule="evenodd"></path> </svg> </a> </div> <div class="col-span-1 text-white text-center"> <div class="flex justify-center mb-5"> <div class="border-2 border-white rounded-3xl px-5 py-3 font-semibold uppercase">
ابقى على تواصل
</div> </div> <div class="mt-10 text-lg"> <div class="flex flex-col items-center"> <a class="ltr border-b-2 border-white pb-1 mb-3 mx-auto"${addAttribute(`tel:${contacts.phone}`, "href")}> ${contacts.phone} </a> <a class="ltr border-b-2 border-white pb-1 mb-3 mx-auto"${addAttribute(`mailto:${contacts.mail}`, "href")}> ${contacts.mail} </a> </div> </div> </div> </div> <!-- Centered Copyright --> <div class="mt-16 text-center"> <p class="text-white/[0.78] text-base mx-auto"> ${footer.copyright} </p> </div> </div> ` })} </div> ${renderSlot($$result, $$slots["default"])}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/footers/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://ganabo.xyz/cherouk");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentLocale = Astro2.currentLocale;
  const { header, contacts } = getLocalizedSettings(currentLocale);
  header.logo?.imagePath;
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full z-30" data-astro-cid-h44wcsux> <div class="items-center auto-cols-fr grid-cols-2 lg:grid-cols-2 grid-rows-[auto] justify-between left-0 py-3.5 px-6 lg:px-20 right-0 top-0 grid gap-4" data-astro-cid-h44wcsux> <div class="justify-self-start col-span-1 row-span-1 z-40 col-start-1" data-astro-cid-h44wcsux> <div class="items-center justify-center relative flex h-16 lg:w-24 lg:h-24" data-astro-cid-h44wcsux> <div class="menu-icon" data-astro-cid-h44wcsux> <input id="menu-toggle" class="menu-icon__checkbox" type="checkbox" data-astro-cid-h44wcsux> <div data-astro-cid-h44wcsux> <span data-astro-cid-h44wcsux></span> <span data-astro-cid-h44wcsux></span> </div> </div> </div> </div> <div class="col-start-2 hidden lg:flex justify-center items-center h-full" data-astro-cid-h44wcsux> <a data-company-name class="pb-4 group"${addAttribute(translatePath(currentLocale ?? defaultLocale, "/"), "href")} data-astro-cid-h44wcsux> <div class="w-20 h-1 bg-slate-200 rounded-full group-hover:bg-slate-600 transition-colors duration-500" data-astro-cid-h44wcsux></div> </a> </div> <div class="items-center flex-wrap justify-end relative flex text-blue-700 z-20 col-start-3" data-astro-cid-h44wcsux> <a${addAttribute(translatePath(currentLocale ?? defaultLocale, "/"), "href")} id="header-logo" class="text-blue-700 justify-self-start lg:justify-self-center underline inline-block max-w-full" data-astro-cid-h44wcsux> <svg version="1.1" id="CompanyLogo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 510 597"${addAttribute(40, "width")}${addAttribute(40, "height")} class="w-8 h-8 lg:w-10 lg:h-10" preserveAspectRatio="xMidYMid meet" data-astro-cid-h44wcsux> <style type="text/css">
        .logo-path-mask {
            fill: #000000;
            stroke: #000000;
            stroke-width: 28;
            stroke-miterlimit: 10;
        }
    </style> <g transform="translate(0 597) scale(0.1 -0.1)" data-astro-cid-h44wcsux> <path class="logo-path-mask" d="M3172 5912 c-37 -35 -48 -40 -101 -44 -33 -2 -64 -7 -68 -11 -4 -4 -9 -35 -11 -68 -4 -53 -9 -64 -44 -101 l-39 -41 40 -41 c37 -37 41 -47 41 -91 0 -66 10 -78 62 -81 24 -1 48 -2 54 -3 7 -1 30 -19 53 -41 22 -22 44 -40 47 -40 4 0 26 18 50 40 38 35 49 40 92 40 63 0 82 20 82 83 0 40 6 53 35 86 19 21 35 44 35 52 0 7 -16 29 -35 49 -30 31 -35 43 -38 94 -4 68 -13 76 -82 76 -44 0 -54 4 -91 41 l-41 40 -41 -39z" data-astro-cid-h44wcsux></path> <path class="logo-path-mask" d="M2712 5309 c-39 -38 -45 -41 -104 -42 l-63 -2 -3 -64 c-3 -61 -5 -66 -48 -109 l-44 -46 45 -44 c42 -42 45 -49 45 -96 0 -67 9 -79 56 -76 63 4 71 2 107 -35 19 -19 41 -35 50 -35 9 0 32 16 51 35 38 38 41 39 101 36 55 -3 80 23 73 77 -6 44 3 66 43 104 16 15 29 33 29 40 0 6 -16 28 -35 48 -30 31 -35 43 -38 94 -4 68 -13 76 -82 76 -46 0 -55 4 -90 40 -21 22 -42 40 -46 40 -4 0 -25 -18 -47 -41z" data-astro-cid-h44wcsux></path> <path class="logo-path-mask" d="M3628 5303 c-34 -34 -40 -36 -92 -34 -30 1 -57 -3 -61 -9 -3 -5 -7 -35 -9 -65 -3 -51 -7 -60 -47 -101 l-43 -44 48 -47 c44 -44 47 -51 43 -88 -2 -22 0 -51 5 -63 7 -20 14 -23 51 -22 62 4 65 3 103 -35 19 -19 43 -35 54 -35 11 0 35 16 54 35 38 38 41 39 103 35 37 -1 44 2 51 22 5 12 7 39 5 58 -4 31 1 41 41 84 25 26 46 51 46 54 0 4 -19 25 -41 48 -38 38 -42 48 -45 99 -2 30 -6 60 -9 65 -4 6 -31 9 -61 8 -50 -2 -56 0 -92 35 -21 20 -44 37 -53 37 -8 0 -31 -16 -51 -37z" data-astro-cid-h44wcsux></path> <path class="logo-path-mask" d="M1746 4481 c-3 -5 -3 -16 0 -25 3 -9 1 -23 -6 -31 -6 -8 -10 -34 -9 -57 3 -30 -2 -52 -15 -71 -19 -28 -19 -28 3 -57 26 -36 26 -42 0 -66 -18 -16 -20 -26 -14 -71 6 -46 4 -54 -12 -60 -31 -11 -83 -53 -83 -68 0 -8 -6 -18 -14 -22 -22 -13 -28 -73 -33 -310 l-4 -221 -27 7 c-29 9 -66 0 -77 -19 -5 -8 -12 -5 -22 9 -16 23 -51 28 -58 8 -3 -7 -7 -539 -8 -1182 -3 -1316 1 -1247 -75 -1335 -24 -28 -49 -50 -56 -50 -8 0 -16 -7 -20 -15 -3 -9 -18 -15 -36 -15 -17 0 -41 -5 -52 -11 -24 -13 -127 5 -168 29 -34 21 -100 84 -100 96 0 5 -8 18 -18 29 -15 17 -17 56 -22 421 -3 220 -2 412 3 426 4 14 6 221 5 460 l-3 435 -42 3 -42 3 -3 -58 c-4 -75 -22 -75 -26 1 l-3 59 -45 -7 -44 -6 0 217 c0 173 -3 227 -17 269 -18 57 -62 112 -106 132 -28 12 -29 15 -22 61 6 42 4 52 -14 70 -25 25 -26 34 -6 51 20 17 19 65 -2 96 -12 20 -14 30 -6 43 8 12 8 23 0 36 -5 10 -10 33 -9 51 1 24 -4 34 -18 39 -27 8 -40 -1 -40 -29 0 -13 -7 -36 -15 -52 -10 -20 -11 -32 -3 -41 7 -9 6 -22 -6 -47 -21 -44 -20 -68 3 -98 19 -24 19 -24 -5 -47 -27 -26 -30 -51 -11 -82 10 -18 9 -23 -11 -37 -56 -40 -94 -77 -110 -106 -15 -27 -18 -74 -22 -329 -3 -185 -9 -298 -15 -300 -6 -1 -11 23 -13 54 l-3 56 -85 1 -84 0 3 -917 c4 -885 7 -986 35 -1038 7 -12 12 -29 12 -38 0 -33 95 -212 151 -285 68 -90 215 -240 234 -240 4 0 24 -13 44 -28 38 -30 158 -92 177 -92 7 0 17 -7 24 -15 7 -8 22 -15 34 -15 12 0 27 -5 33 -11 19 -19 126 -31 318 -36 231 -6 336 12 464 79 30 15 59 28 66 28 7 0 31 14 53 30 23 17 45 30 48 30 23 0 215 181 269 255 32 43 37 50 88 135 85 142 127 295 130 475 l2 120 1458 3 1457 2 0 1140 0 1140 -29 0 c-19 0 -35 -8 -44 -21 -10 -14 -17 -17 -22 -9 -11 19 -48 28 -77 19 l-27 -7 -4 221 c-3 122 -8 240 -12 262 -10 52 -56 109 -106 132 -33 14 -39 21 -34 38 18 53 17 75 -4 101 l-21 27 21 34 c19 30 20 36 6 56 -8 13 -18 47 -21 77 -3 30 -8 69 -10 85 -2 26 -7 30 -32 30 -23 0 -29 -4 -27 -20 2 -11 -2 -30 -9 -42 -6 -12 -8 -40 -5 -62 4 -31 1 -44 -14 -57 -24 -22 -24 -46 1 -69 25 -23 25 -36 -1 -59 -18 -15 -20 -24 -15 -69 7 -52 7 -52 -29 -71 -48 -26 -91 -82 -100 -131 -4 -22 -9 -140 -12 -261 l-4 -222 -41 11 c-37 9 -43 8 -58 -10 -16 -20 -17 -20 -28 -2 -14 22 -50 25 -58 6 -2 -7 -6 -330 -7 -718 l-2 -704 -315 -5 c-173 -3 -321 -3 -327 -1 -10 2 -13 159 -15 720 l-3 716 -33 -2 c-18 0 -41 -8 -51 -17 -15 -14 -18 -13 -29 5 -8 13 -21 19 -35 17 -19 -3 -23 -11 -27 -61 -3 -31 -9 -57 -15 -57 -6 0 -11 106 -12 292 -1 161 -4 302 -7 314 -8 31 -85 114 -106 114 -31 0 -41 23 -25 54 13 25 13 32 -1 62 -9 19 -20 37 -25 40 -5 3 0 19 12 35 21 30 21 31 4 69 -11 25 -15 49 -11 65 5 18 1 36 -9 52 -9 13 -15 34 -13 46 3 18 -2 22 -27 22 -27 0 -29 -3 -33 -40 -2 -22 -3 -59 -3 -81 1 -26 -5 -46 -14 -54 -19 -16 -19 -64 0 -80 8 -7 15 -18 15 -25 0 -7 -7 -15 -15 -19 -11 -4 -15 -22 -15 -71 0 -59 -2 -66 -22 -75 -31 -12 -62 -40 -82 -72 -37 -57 -46 -126 -46 -344 0 -116 -3 -214 -7 -217 -3 -4 -13 2 -21 14 -8 12 -23 19 -35 17 -19 -3 -23 -11 -27 -61 -3 -31 -9 -57 -15 -57 -5 0 -12 26 -15 57 -4 48 -8 58 -25 61 -52 6 -50 37 -52 -720 -2 -386 -4 -706 -5 -710 -4 -10 -585 -11 -600 -2 -5 3 -8 314 -8 710 1 388 -2 709 -5 714 -11 17 -43 11 -58 -11 -10 -14 -17 -17 -22 -9 -12 19 -48 28 -77 19 l-28 -8 -1 207 c0 121 -5 231 -12 264 -15 72 -70 142 -118 152 -27 5 -30 9 -24 28 18 56 17 83 -4 107 -20 23 -20 24 -1 49 24 30 25 55 5 72 -10 8 -15 31 -15 66 0 29 -5 56 -10 59 -6 4 -9 19 -8 33 3 23 -1 28 -24 30 -14 2 -29 -1 -32 -7z m2914 -875 c3 -47 4 -91 2 -96 -5 -14 -79 -12 -88 2 -9 14 -9 146 0 175 8 27 34 34 61 18 17 -10 21 -26 25 -99z m-2922 91 c9 -10 16 -123 13 -184 -1 -17 -77 -17 -87 -1 -9 15 -9 147 0 176 8 25 56 31 74 9z m157 -11 c12 -18 15 -44 13 -102 l-3 -79 -52 -3 c-38 -2 -53 1 -54 10 -3 57 4 165 12 180 15 27 65 24 84 -6z m1281 2 c11 -34 9 -167 -3 -179 -6 -6 -28 -9 -49 -7 l-39 3 -3 79 c-3 93 11 126 58 126 21 0 31 -6 36 -22z m150 0 c11 -34 9 -167 -3 -179 -6 -6 -28 -9 -49 -7 l-39 3 -3 82 c-3 101 6 123 53 123 26 0 35 -5 41 -22z m1479 -2 c12 -18 15 -44 13 -102 l-3 -79 -52 -3 c-38 -2 -53 1 -54 10 -3 57 4 165 12 180 15 27 65 24 84 -6z m-3241 -625 c14 -15 16 -36 14 -117 l-3 -99 -47 1 c-26 0 -51 4 -55 8 -4 4 -9 40 -11 80 -5 94 16 146 58 146 15 0 35 -8 44 -19z m166 -9 c3 -12 3 -64 0 -115 l-5 -92 -35 -3 c-56 -4 -62 5 -62 99 0 46 5 97 11 112 10 25 15 28 48 25 29 -2 38 -8 43 -26z m158 7 c14 -22 20 -194 8 -207 -4 -3 -28 -6 -54 -6 l-47 -1 -3 99 c-2 81 0 102 14 117 23 26 66 24 82 -2z m173 -6 c6 -16 11 -66 11 -112 0 -94 -6 -103 -62 -99 l-35 3 -3 104 c-1 58 0 111 2 118 3 7 21 13 41 13 29 0 37 -5 46 -27z m935 10 c9 -12 13 -50 14 -115 l0 -97 -34 -6 c-69 -13 -71 -11 -74 99 -2 81 0 102 14 117 21 24 63 24 80 2z m158 -2 c14 -15 16 -36 14 -117 -3 -110 -5 -112 -74 -99 l-34 6 0 89 c0 106 12 140 50 140 15 0 35 -8 44 -19z m167 -8 c6 -16 11 -66 11 -112 0 -94 -6 -103 -62 -99 l-35 3 -3 104 c-1 58 0 111 2 118 3 7 21 13 41 13 29 0 37 -5 46 -27z m168 13 c8 -9 11 -50 9 -117 l-3 -104 -35 -3 c-58 -4 -63 5 -61 108 1 51 6 101 12 111 12 23 61 26 78 5z m986 -10 c12 -18 15 -46 13 -117 l-3 -94 -47 1 c-26 0 -51 4 -55 8 -4 4 -9 40 -11 80 -5 95 16 146 59 146 19 0 34 -8 44 -24z m160 -96 l0 -115 -35 -3 c-57 -4 -62 5 -62 106 1 113 10 134 60 130 l37 -3 0 -115z m163 99 c14 -22 20 -194 8 -207 -4 -3 -28 -6 -54 -6 l-47 -1 -3 97 c-2 57 2 106 8 118 15 28 71 27 88 -1z m173 -6 c16 -42 14 -194 -3 -204 -17 -11 -75 -11 -82 0 -8 12 -9 208 -1 220 3 6 22 11 41 11 28 0 36 -5 45 -27z m-4606 -69 c13 -13 15 -34 13 -108 l-3 -91 -35 -3 c-53 -4 -61 6 -61 84 -1 97 -1 101 17 118 20 20 48 20 69 0z m149 -3 c14 -15 16 -35 14 -107 l-3 -89 -35 -3 c-53 -4 -61 6 -61 84 -1 97 -1 101 17 118 21 21 47 20 68 -3z m1315 -494 c20 -23 21 -31 19 -163 l-3 -139 -70 0 -70 0 -3 133 c-2 122 -1 136 18 163 27 37 76 40 109 6z m1439 -17 c22 -33 23 -43 20 -152 -2 -64 -7 -120 -11 -125 -5 -4 -36 -8 -70 -8 l-62 0 -3 144 c-3 166 4 184 67 179 28 -2 41 -11 59 -38z m1472 13 c19 -24 20 -37 18 -162 l-3 -136 -70 0 -70 0 -3 139 c-2 132 -1 140 19 163 32 33 81 31 109 -4z m-1241 -37 c12 -14 20 -190 9 -201 -9 -9 -74 -13 -87 -5 -10 6 -13 34 -12 106 2 89 4 101 24 116 22 17 43 12 66 -16z m-1944 8 c24 -15 25 -21 25 -114 0 -110 -1 -111 -70 -101 l-45 6 -3 80 c-2 66 1 86 18 113 22 36 39 40 75 16z m511 -5 c16 -17 19 -37 19 -112 l0 -92 -45 -6 c-25 -3 -51 -4 -57 -2 -20 8 -17 182 3 211 19 28 55 28 80 1z m924 1 c26 -26 32 -52 28 -135 l-3 -70 -45 -6 c-69 -10 -70 -9 -70 99 0 75 4 99 17 114 21 23 48 23 73 -2z m1477 -2 c21 -19 23 -30 23 -114 0 -103 -1 -104 -70 -95 l-45 6 0 92 c0 75 3 95 19 112 24 27 44 27 73 -1z m509 1 c16 -17 19 -37 19 -112 l0 -92 -45 -6 c-69 -10 -70 -9 -70 99 0 75 4 99 17 114 22 24 55 23 79 -3z m-4776 -11 c16 -17 20 -37 22 -92 1 -77 0 -108 -6 -114 -3 -2 -23 -6 -46 -9 -30 -4 -45 -2 -51 8 -5 8 -9 55 -9 106 0 84 2 93 22 107 30 21 43 20 68 -6z m166 8 c15 -12 20 -31 25 -98 7 -102 -4 -128 -56 -128 -18 0 -37 5 -41 11 -3 6 -6 54 -5 107 1 78 5 100 18 110 22 16 35 15 59 -2z m164 -4 c20 -16 22 -27 22 -111 0 -51 -3 -95 -6 -98 -3 -3 -25 -8 -50 -10 -41 -5 -46 -3 -51 18 -3 13 -5 62 -3 109 3 79 5 85 28 97 32 16 34 16 60 -5z m163 6 c13 -10 17 -32 18 -110 1 -53 -1 -101 -5 -106 -9 -15 -74 -12 -87 4 -13 16 -16 157 -4 193 5 18 20 27 51 30 5 0 18 -5 27 -11z m-250 -447 c18 -7 26 -20 31 -47 9 -46 11 -243 2 -251 -7 -7 -135 -5 -148 3 -4 3 -8 52 -8 110 0 161 37 217 123 185z m-255 -43 c8 -10 17 -159 13 -215 -1 -17 -87 -17 -97 -1 -11 17 -7 170 5 201 8 21 17 27 40 27 15 0 33 -6 39 -12z m505 -5 c11 -13 16 -42 17 -108 1 -49 2 -96 1 -102 -1 -17 -87 -17 -97 -1 -11 17 -4 188 7 210 12 23 51 23 72 1z m-488 -489 c24 -15 25 -21 25 -113 0 -53 -4 -102 -9 -110 -11 -17 -90 -9 -102 11 -5 7 -9 48 -9 91 0 74 2 80 29 108 34 34 34 34 66 13z m156 3 c24 -18 32 -53 32 -134 0 -84 -11 -103 -60 -103 -44 0 -49 14 -45 133 3 86 5 96 25 105 28 14 29 14 48 -1z m183 -23 c7 -19 10 -194 3 -200 -3 -3 -24 -8 -47 -11 -30 -4 -45 -2 -51 8 -5 8 -9 55 -9 106 0 86 1 93 26 112 21 16 30 18 49 9 13 -6 26 -17 29 -24z m143 18 c20 -15 22 -27 24 -114 1 -53 -2 -101 -5 -107 -10 -16 -72 -13 -86 4 -8 9 -12 48 -12 107 1 84 3 93 24 110 28 22 28 22 55 0z" data-astro-cid-h44wcsux></path> </g> </svg> </a> </div> </div> <nav id="navigation" class="items-center bottom-0 text-sm font-medium justify-center left-0 fixed right-0 top-0 flex h-screen z-30 text-right" data-astro-cid-h44wcsux> <div id="navigation-background" class="bg-white w-full h-full absolute top-0 left-0 opacity-0" data-astro-cid-h44wcsux></div> <div class="items-center font-semibold flex-wrap justify-center flex flex-col overflow-hidden z-20 w-full" data-astro-cid-h44wcsux> <div class="flex flex-col items-end md:items-center pt-10" data-astro-cid-h44wcsux> ${header.pages.map((page, index) => renderTemplate`<a data-nav-item${addAttribute(translatePath(
    currentLocale ?? defaultLocale,
    page.link
  ), "href")} class="items-center justify-end flex overflow-hidden gap-4 relative pl-10" data-astro-cid-h44wcsux> <div data-nav-text-reveal class="cursor-pointer overflow-hidden text-4xl xs:text-5xl md:text-[5.63rem] !leading-[1.15] text-black" data-astro-cid-h44wcsux> ${page.title} </div> <div data-nav-border-reveal data-nav-text-reveal class="text-black items-center cursor-pointer justify-center pt-1 flex w-9 h-9 border-2 border-black border-solid rounded-full" data-astro-cid-h44wcsux>
0${index + 1} </div> </a>`)} </div> </div> </nav> </header> `;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/headers/Navigation.astro", void 0);

const $$LinesWrapper = createComponent(($$result, $$props, $$slots) => {
  const columnsClasses = [
    "line-full _20",
    "line-full _20",
    "line-full _5",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full _20",
    "line-full",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full _5",
    "line-full _20",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full _20",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bottom-0 left-0 opacity-60 fixed right-0 top-0 pointer-events-none -z-10" data-astro-cid-3qatqyip> <div class="absolute-lines" data-astro-cid-3qatqyip> ${columnsClasses.map((className) => renderTemplate`<div${addAttribute(className, "class")} data-astro-cid-3qatqyip></div>`)} </div> </div> `;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/primitives/LinesWrapper.astro", void 0);

const $$LoadingIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="astro-loading-indicator" class="astro-loading-indicator bg-primary-950 fixed pointer-events-none z-50 top-0 left-0 w-full h-1" data-astro-cid-6efmjswq${addAttribute(createTransitionScope($$result, "2n62j4uy"), "data-astro-transition-persist")}></div>  `;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/primitives/LoadingIndicator.astro", "self");

const $$Astro$1 = createAstro("https://ganabo.xyz/cherouk");
const $$Widget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Widget;
  const currentLocale = Astro2.currentLocale;
  const { widget } = getLocalizedSettings(currentLocale);
  return renderTemplate`${maybeRenderHead()}<a id="whatsapp-widget" data-widget-appear${addAttribute(widget.link, "href")} class="group fixed w-14 h-14 bottom-5 lg:bottom-10 opacity-0 right-5 lg:right-10 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg z-20" target="_blank"${addAttribute(createTransitionScope($$result, "53mktq27"), "data-astro-transition-persist")}> ${renderComponent($$result, "Icon", $$Icon, { "name": widget.icon, "size": 30, "class": "group-hover:scale-105 transition-all" })} </a> `;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/primitives/Widget.astro", "self");

const $$Astro = createAstro("https://ganabo.xyz/cherouk");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const currentLocale = Astro2.currentLocale;
  const { widget } = getLocalizedSettings(currentLocale);
  const { seo } = Astro2.props;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> ${renderComponent($$result, "Head", $$Head, { "seo": seo }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})}` })}${maybeRenderHead()}<body> ${renderComponent($$result, "LoadingIndicator", $$LoadingIndicator, {})} ${renderComponent($$result, "LinesWrapper", $$LinesWrapper, {})} ${renderComponent($$result, "Navigation", $$Navigation, { "showTopBar": true })} ${renderSlot($$result, $$slots["default"])} ${widget.enabled && renderTemplate`${renderComponent($$result, "Widget", $$Widget, {})}`} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };

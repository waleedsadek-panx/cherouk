import { c as createComponent, a as renderTemplate, h as renderUniqueStylesheet, i as renderScriptElement, u as unescapeHTML, j as createHeadAndContent, r as renderComponent, k as isHTMLString, b as createAstro, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, d as renderSlot } from './astro/server_ByHVkS3h.mjs';
import 'kleur/colors';
import Markdoc$1 from '@markdoc/markdoc';
import Slugger from 'github-slugger';
import { A as AstroError, E as ExpectedImageOptions, f as ExpectedImage, r as resolveSrc, i as isRemoteImage, F as FailedToFetchRemoteImageDimensions, g as isESMImportedImage, h as isLocalService, D as DEFAULT_HASH_PROPS, j as InvalidImageService, k as ImageMissingAlt } from './astro/assets-service_CZ491Ond.mjs';
import 'clsx';
import { b as $$Icon, $ as $$Link, a as $$Container } from './Link_BBbFmZrG.mjs';
/* empty css                                                            */
/* empty css                                                            */
import { $ as $$Title } from './Title_BsLnKLS_.mjs';

const ComponentNode = createComponent({
  factory(result, { treeNode }) {
    if (treeNode.type === "text") return renderTemplate`${treeNode.content}`;
    const slots = {
      default: () => renderTemplate`${treeNode.children.map(
        (child) => renderComponent(result, "ComponentNode", ComponentNode, { treeNode: child })
      )}`
    };
    if (treeNode.type === "component") {
      let styles = "", links = "", scripts = "";
      if (Array.isArray(treeNode.collectedStyles)) {
        styles = treeNode.collectedStyles.map(
          (style) => renderUniqueStylesheet(result, {
            type: "inline",
            content: style
          })
        ).join("");
      }
      if (Array.isArray(treeNode.collectedLinks)) {
        links = treeNode.collectedLinks.map((link) => {
          return renderUniqueStylesheet(result, {
            type: "external",
            src: link[0] === "/" ? link : "/" + link
          });
        }).join("");
      }
      if (Array.isArray(treeNode.collectedScripts)) {
        scripts = treeNode.collectedScripts.map((script) => renderScriptElement(script)).join("");
      }
      const head = unescapeHTML(styles + links + scripts);
      let headAndContent = createHeadAndContent(
        head,
        renderTemplate`${renderComponent(
          result,
          treeNode.component.name,
          treeNode.component,
          treeNode.props,
          slots
        )}`
      );
      result._metadata.propagators.add({
        init() {
          return headAndContent;
        }
      });
      return headAndContent;
    }
    return renderComponent(result, treeNode.tag, treeNode.tag, treeNode.attributes, slots);
  },
  propagation: "self"
});
async function createTreeNode(node) {
  if (isHTMLString(node)) {
    return { type: "text", content: node };
  } else if (typeof node === "string" || typeof node === "number") {
    return { type: "text", content: String(node) };
  } else if (node === null || typeof node !== "object" || !Markdoc$1.Tag.isTag(node)) {
    return { type: "text", content: "" };
  }
  const children = await Promise.all(node.children.map((child) => createTreeNode(child)));
  if (typeof node.name === "function") {
    const component = node.name;
    const props = node.attributes;
    return {
      type: "component",
      component,
      props,
      children
    };
  } else if (isPropagatedAssetsModule(node.name)) {
    const { collectedStyles, collectedLinks, collectedScripts } = node.name;
    const component = (await node.name.getMod()).default;
    const props = node.attributes;
    return {
      type: "component",
      component,
      collectedStyles,
      collectedLinks,
      collectedScripts,
      props,
      children
    };
  } else {
    return {
      type: "element",
      tag: node.name,
      attributes: node.attributes,
      children
    };
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

const $$Astro$7 = createAstro("https://ganabo.xyz/cherouk");
const $$Renderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Renderer;
  //! astro-head-inject
  const { stringifiedAst, config } = Astro2.props;
  const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
  const content = await Markdoc$1.transform(ast, config);
  return renderTemplate`${Array.isArray(content) ? content.map(async (c) => renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(c) })}`) : renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(content) })}`}`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/@astrojs/markdoc/components/Renderer.astro", void 0);

class MarkdocError extends Error {
  loc;
  title;
  hint;
  frame;
  type = "MarkdocError";
  constructor(props, ...params) {
    super(...params);
    const { title = "MarkdocError", message, stack, location, hint, frame } = props;
    this.title = title;
    if (message) this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
}
const componentConfigSymbol = Symbol.for("@astrojs/markdoc/component-config");

function getSlug(attributes, children, headingSlugger) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  const textContent = attributes.content ?? getTextContent(children);
  let slug = headingSlugger.slug(textContent);
  if (slug.endsWith("-")) slug = slug.slice(0, -1);
  return slug;
}
const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 }
  },
  transform(node, config) {
    const { level, ...attributes } = node.transformAttributes(config);
    const children = node.transformChildren(config);
    if (!config.ctx?.headingSlugger) {
      throw new MarkdocError({
        message: "Unexpected problem adding heading IDs to Markdoc file. Did you modify the `ctx.headingSlugger` property in your Markdoc config?"
      });
    }
    const slug = getSlug(attributes, children, config.ctx.headingSlugger);
    const render = config.nodes?.heading?.render ?? `h${level}`;
    const tagProps = (
      // For components, pass down `level` as a prop,
      // alongside `__collectHeading` for our `headings` collector.
      // Avoid accidentally rendering `level` as an HTML attribute otherwise!
      typeof render === "string" ? { ...attributes, id: slug } : { ...attributes, id: slug, __collectHeading: true, level }
    );
    return new Markdoc$1.Tag(render, tagProps, children);
  }
};
function setupHeadingConfig() {
  const headingSlugger = new Slugger();
  return {
    ctx: {
      headingSlugger
    },
    nodes: {
      heading
    }
  };
}

async function setupConfig(userConfig = {}, options) {
  let defaultConfig = setupHeadingConfig();
  if (userConfig.extends) {
    for (let extension of userConfig.extends) {
      if (extension instanceof Promise) {
        extension = await extension;
      }
      defaultConfig = mergeConfig(defaultConfig, extension);
    }
  }
  let merged = mergeConfig(defaultConfig, userConfig);
  return merged;
}
function setupConfigSync(userConfig = {}, options) {
  const defaultConfig = setupHeadingConfig();
  let merged = mergeConfig(defaultConfig, userConfig);
  return merged;
}
function mergeConfig(configA, configB) {
  return {
    ...configA,
    ...configB,
    ctx: {
      ...configA.ctx,
      ...configB.ctx
    },
    tags: {
      ...configA.tags,
      ...configB.tags
    },
    nodes: {
      ...configA.nodes,
      ...configB.nodes
    },
    functions: {
      ...configA.functions,
      ...configB.functions
    },
    variables: {
      ...configA.variables,
      ...configB.variables
    },
    partials: {
      ...configA.partials,
      ...configB.partials
    },
    validation: {
      ...configA.validation,
      ...configB.validation
    }
  };
}
function resolveComponentImports(markdocConfig, tagComponentMap, nodeComponentMap) {
  for (const [tag, render] of Object.entries(tagComponentMap)) {
    const config = markdocConfig.tags[tag];
    if (config) config.render = render;
  }
  for (const [node, render] of Object.entries(nodeComponentMap)) {
    const config = markdocConfig.nodes[node];
    if (config) config.render = render;
  }
  return markdocConfig;
}
function getTextContent(childNodes) {
  let text = "";
  for (const node of childNodes) {
    if (typeof node === "string" || typeof node === "number") {
      text += node;
    } else if (typeof node === "object" && Markdoc$1.Tag.isTag(node)) {
      text += getTextContent(node.children);
    }
  }
  return text;
}
const headingLevels = [1, 2, 3, 4, 5, 6];
function collectHeadings(children, collectedHeadings) {
  for (const node of children) {
    if (typeof node !== "object" || !Markdoc$1.Tag.isTag(node)) continue;
    if (node.attributes.__collectHeading === true && typeof node.attributes.level === "number") {
      collectedHeadings.push({
        slug: node.attributes.id,
        depth: node.attributes.level,
        text: getTextContent(node.children)
      });
      continue;
    }
    for (const level of headingLevels) {
      if (node.name === "h" + level) {
        collectedHeadings.push({
          slug: node.attributes.id,
          depth: level,
          text: getTextContent(node.children)
        });
      }
    }
    collectHeadings(node.children, collectedHeadings);
  }
}
function createGetHeadings(stringifiedAst, userConfig, options) {
  return function getHeadings() {
    const config = setupConfigSync(userConfig);
    const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
    const content = Markdoc$1.transform(ast, config);
    let collectedHeadings = [];
    collectHeadings(Array.isArray(content) ? content : [content], collectedHeadings);
    return collectedHeadings;
  };
}
function createContentComponent(Renderer, stringifiedAst, userConfig, options, tagComponentMap, nodeComponentMap) {
  return createComponent({
    async factory(result, props) {
      const withVariables = mergeConfig(userConfig, { variables: props });
      const config = resolveComponentImports(
        await setupConfig(withVariables),
        tagComponentMap,
        nodeComponentMap
      );
      return renderComponent(result, Renderer.name, Renderer, { stringifiedAst, config }, {});
    },
    propagation: "self"
  });
}

function startsWithDotDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  const c3 = path[2];
  return c1 === "." && c2 === "." && c3 === "/";
}
function startsWithDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  return c1 === "." && c2 === "/";
}
function isRelativePath(path) {
  return startsWithDotDotSlash(path) || startsWithDotSlash(path);
}

const Markdoc = Markdoc$1;
const nodes = { ...Markdoc.nodes, heading };
function defineMarkdocConfig(config) {
  return config;
}
function component(pathnameOrPkgName, namedExport) {
  return {
    type: isNpmPackageName(pathnameOrPkgName) ? "package" : "local",
    path: pathnameOrPkgName,
    namedExport,
    [componentConfigSymbol]: true
  };
}
function isNpmPackageName(pathname) {
  return !isRelativePath(pathname) && !pathname.startsWith("/");
}

const markdocConfig = defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document,
      // Apply defaults for other options
      render: void 0
      // default 'article'
    },
    heading: {
      attributes: {
        ...nodes.heading.attributes,
        // Use the correct base attributes for a heading
        // Additional custom attributes if needed
        title: { type: String, render: "title" },
        level: { type: Number, render: "level" }
      },
      render: component("./src/components/primitives/Title.astro")
    },
    link: {
      render: "a",
      attributes: {
        href: { type: String },
        target: { type: String, default: "_blank" },
        rel: { type: String, default: "noopener noreferrer" }
      }
    }
  },
  tags: {
    Container: {
      attributes: {
        class: { type: String, render: "class" }
      },
      children: ["*"],
      render: component("./src/components/primitives/Container.astro")
    },
    ContainerFluid: {
      attributes: {
        class: { type: String, render: "class" }
      },
      children: ["*"],
      render: component("./src/components/primitives/ContainerFluid.astro")
    },
    Prose: {
      attributes: {
        class: { type: String, render: "class" }
      },
      children: ["*"],
      render: component("./src/components/primitives/Prose.astro")
    },
    Flex: {
      attributes: {
        class: { type: String, render: "class" },
        direction: { type: String, render: "direction" },
        verticalAlign: { type: String, render: "verticalAlign" },
        horizontalAlign: { type: String, render: "horizontalAlign" },
        itemsAlignment: { type: String, render: "itemsAlignment" },
        gap: { type: Number, render: "gap" },
        wrap: { type: Boolean, render: "wrap" }
      },
      children: ["*"],
      render: component("./src/components/primitives/Flex.astro")
    },
    Hero: {
      attributes: {
        title: { type: String, render: "title", required: true },
        subtitle: { type: String, render: "subtitle", required: true },
        buttons: { type: Array, render: "buttons", required: true }
      },
      render: component("./src/components/sections/Hero.astro")
    },
    LogoCloud: {
      attributes: {
        title: { type: String, render: "title", required: true },
        logos: { type: Array, render: "logos", required: true }
      },
      render: component("./src/components/sections/LogoCloud.astro")
    },
    Services: {
      attributes: {
        title: { type: String, render: "title", required: true },
        services: { type: Array, render: "services", required: true }
      },
      render: component("./src/components/sections/Services.astro")
    },
    EventDetails: {
      attributes: {
        title: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        location: { type: String, required: true },
        icons: { type: Object, required: true }
      },
      render: component("./src/components/sections/EventDetails.astro")
    },
    Logos: {
      attributes: {
        logos: { type: Array, required: true }
      },
      render: component("./src/components/sections/Logos.astro")
    },
    Results: {
      attributes: {
        title: { type: String, render: "title", required: true },
        results: { type: Array, render: "results", required: true }
      },
      render: component("./src/components/sections/Results.astro")
    }
  }
});

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1)
      return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength)
      return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
      return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox)
      return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_CZ491Ond.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$6 = createAstro("https://ganabo.xyz/cherouk");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro("https://ganabo.xyz/cherouk");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const assetsConfig = {
  nodes: {
    image: {
      attributes: {
        ...Markdoc$1.nodes.image.attributes,
        __optimizedSrc: { type: "Object" }
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        if (node.type === "image" && "__optimizedSrc" in node.attributes) {
          const { __optimizedSrc, ...rest } = node.attributes;
          return new Markdoc$1.Tag($$Image, { ...rest, src: __optimizedSrc }, children);
        } else {
          return new Markdoc$1.Tag("img", attributes, children);
        }
      }
    }
  }
};

const promoVideo = "/cherouk/_astro/promo.8ev6z6da.webm";

const $$Astro$4 = createAstro("https://ganabo.xyz/cherouk");
const $$Blob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Blob;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-zxqwhg62> <canvas id="blob"${addAttribute(["touch:pointer-events-none", className], "class:list")} data-astro-cid-zxqwhg62></canvas> <video id="video-blob" autoplay loop muted controls data-astro-cid-zxqwhg62> <source${addAttribute(promoVideo, "src")} data-astro-cid-zxqwhg62>
Your browser does not support the video tag.
</video> <div id="blob-cursor-follower" class="follower" data-astro-cid-zxqwhg62> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:play-circle", "size": 100, "data-astro-cid-zxqwhg62": true })} </div> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/sections/Blob.astro", void 0);

const $$Astro$3 = createAstro("https://ganabo.xyz/cherouk");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const defaultButtons = [
    {
      title: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
      href: "/contact",
      style: "button",
      icon: "iconamoon:arrow-top-left-1-thin"
      // Changed arrow direction for RTL
    }
  ];
  const { title, subtitle, buttons = defaultButtons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="items-center text-sm font-medium justify-center pb-48 lg:px-20 pt-32 lg:pt-44 relative flex min-h-[100svh]" dir="rtl" data-astro-cid-anhloy43> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <div class="items-center flex-col w-full m-auto" data-astro-cid-anhloy43> <div class="items-center auto-cols-fr grid-cols-1 lg:grid-cols-2 grid-rows-[auto] grid gap-[3.13rem]" data-astro-cid-anhloy43> <!-- Image comes first in RTL --> <div class="justify-self-center col-span-1 row-span-1" data-astro-cid-anhloy43> ${renderComponent($$result2, "Blob", $$Blob, { "class": "xl:pr-32", "data-astro-cid-anhloy43": true })} <!-- Changed padding for RTL --> </div> <!-- Text section --> <div class="items-end flex-col justify-start flex gap-2 row-start-1 text-right" data-astro-cid-anhloy43> <h1 data-hero-reveal class="text-4xl md:text-7xl leading-tight my-3 mx-0" data-astro-cid-anhloy43>${unescapeHTML(title)}</h1> <div class="lg:mt-20" data-astro-cid-anhloy43> <div data-astro-cid-anhloy43> <p data-hero-reveal class="text-3xl font-semibold mb-3" data-astro-cid-anhloy43>${unescapeHTML(subtitle)}</p> <div class="mt-10 text-white" data-astro-cid-anhloy43> ${buttons.map(
    ({ title: title2, href, style, icon }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "data-hero-reveal": true, "href": href, "style": style, "icon": icon, "data-astro-cid-anhloy43": true }, { "default": ($$result3) => renderTemplate`${title2}` })}`
  )} </div> </div> </div> </div> </div> </div>  <div class="items-center bottom-[3.13rem] justify-center left-0 absolute right-0 z-10 flex max-w-[80%] overflow-hidden m-auto text-blue-700" data-astro-cid-anhloy43> <div class="items-center flex" data-astro-cid-anhloy43> <button id="scroll-down-button" class="scroll-down-button items-start justify-center underline flex w-5 h-7 max-w-full border-2 border-black border-solid rounded-xl m-auto" data-astro-cid-anhloy43> <div class="bg-black cursor-pointer w-0.5 h-1 mt-1.5" data-astro-cid-anhloy43></div> </button> </div> </div> ` })} </div>  `;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/sections/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://ganabo.xyz/cherouk");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const { title, services } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/pages/about/about.png": () => import('./about_BlLH8GWf.mjs'),"/src/assets/pages/homepage/cactus.svg": () => import('./cactus_D95lVD6_.mjs'),"/src/assets/pages/homepage/google-white.png": () => import('./google-white_BmDlLdP1.mjs'),"/src/assets/pages/homepage/hitech.svg": () => import('./hitech_DFfZeznQ.mjs'),"/src/assets/pages/homepage/marketing-service.png": () => import('./marketing-service_BnOGNmzy.mjs'),"/src/assets/pages/homepage/paidmedia-service.png": () => import('./paidmedia-service_CDz2zCzC.mjs'),"/src/assets/pages/homepage/plaque.svg": () => import('./plaque_Cbi6Flw1.mjs'),"/src/assets/pages/homepage/play.svg": () => import('./play_B51VRewM.mjs'),"/src/assets/pages/homepage/rise.svg": () => import('./rise_CganwGtl.mjs'),"/src/assets/pages/homepage/socialmedia-service.png": () => import('./socialmedia-service_DEoYjFk1.mjs'),"/src/assets/pages/homepage/terra.svg": () => import('./terra_DgPYIn1Q.mjs'),"/src/assets/pages/homepage/vision.svg": () => import('./vision_BF81jYUR.mjs')

});
  return renderTemplate`${maybeRenderHead()}<div class="pt-36 text-right" id="services" dir="rtl"> <p class="text-[2.13rem] leading-9 font-semibold lg:max-w-[64%] mb-3">${unescapeHTML(title)}</p> <div class="mt-16"> <div class="auto-cols-fr grid-cols-1 md:grid-cols-3 grid-rows-[auto] grid gap-10"> ${services.map(({ title: title2, description, icon }) => renderTemplate`<div class="items-stretch flex-col flex h-full max-w-[90%] m-auto col-span-1 row-span-1 text-right"> ${renderComponent($$result, "Image", $$Image, { "src": images[icon](), "alt": `\u0627\u0644\u062E\u062F\u0645\u0629: ${title2}`, "class": "align-middle inline-block w-12 h-12 max-w-full" })} <div class="mt-16 text-[1.38rem] leading-7 font-semibold"> <h3 class="mb-3">${title2}</h3> </div> <div class="mt-3.5 text-lg"> <p class="mb-3">${description}</p> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/sections/Services.astro", void 0);

const calendarIcon = new Proxy({"src":"/cherouk/_astro/calendar.DcL0HFDq.svg","width":128,"height":128,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/icons/calendar.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/icons/calendar.svg");
							return target[name];
						}
					});

const clockIcon = new Proxy({"src":"/cherouk/_astro/clock.C5HOP7Cj.svg","width":512,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/icons/clock.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/icons/clock.svg");
							return target[name];
						}
					});

const locationIcon = new Proxy({"src":"/cherouk/_astro/location.Ihd0UtmT.svg","width":64,"height":64,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/icons/location.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/icons/location.svg");
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://ganabo.xyz/cherouk");
const $$EventDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventDetails;
  const { title, date, time, location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-black text-white rounded-2xl p-8 text-center my-12 min-h-[450px] flex flex-col justify-center"> <h2 class="text-2xl font-bold mb-6">${title}</h2> <div class="space-y-6 text-lg"> <div class="flex items-center justify-center gap-4 flex-row-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": calendarIcon, "width": 24, "height": 24, "alt": "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "class": "invert brightness-200" })} <span>${date}</span> </div> <div class="flex items-center justify-center gap-4 flex-row-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": clockIcon, "width": 24, "height": 24, "alt": "\u0627\u0644\u0648\u0642\u062A", "class": "invert brightness-200" })} <span>${time}</span> </div> <div class="flex items-center justify-center gap-4 flex-row-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": locationIcon, "width": 24, "height": 24, "alt": "\u0627\u0644\u0645\u0643\u0627\u0646", "class": "invert brightness-200" })} <span>${location}</span> </div> </div> </section>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/sections/EventDetails.astro", void 0);

const $$Astro = createAstro("https://ganabo.xyz/cherouk");
const $$Logos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logos;
  const { logos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="text-center py-16 px-4 my-12 flex flex-col items-center"> <h2 class="text-3xl font-semibold mb-8">برعاية وتنظيم</h2> <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16"> ${logos.map((logo) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 350, "height": 350, "alt": "\u0634\u0639\u0627\u0631", "class": "w-[350px] h-[350px] object-contain" })}`)} </div> </section>`;
}, "C:/Users/yourn/Downloads/shrouk/shrouk/src/components/sections/Logos.astro", void 0);

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Hero": $$Hero,
"Container": $$Container,
"Services": $$Services,
"EventDetails": $$EventDetails,
"Logos": $$Logos,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,5],\"inline\":false,\"attributes\":{\"title\":\"اكتشف <b>مستقبل العقارات</b> في المملكة.\",\"subtitle\":\"انضم إلى فعالية شروق، حيث يلتقي قادة القطاع لاستعراض أحدث المشاريع والفرص الاستثمارية. <span class=\\\"text-neutral-400\\\">سجل الآن لضمان مقعدك!</span>\",\"buttons\":[{\"title\":\"سجل الآن\",\"href\":\"https://tally.so/r/3lzAdo\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-left-1-thin\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Hero\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"اكتشف <b>مستقبل العقارات</b> في المملكة.\"},{\"type\":\"attribute\",\"name\":\"subtitle\",\"value\":\"انضم إلى فعالية شروق، حيث يلتقي قادة القطاع لاستعراض أحدث المشاريع والفرص الاستثمارية. <span class=\\\"text-neutral-400\\\">سجل الآن لضمان مقعدك!</span>\"},{\"type\":\"attribute\",\"name\":\"buttons\",\"value\":[{\"title\":\"سجل الآن\",\"href\":\"https://tally.so/r/3lzAdo\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-left-1-thin\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":5}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7,32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,11],\"inline\":false,\"attributes\":{\"title\":\"استكشف الفرص العقارية <span class=\\\"text-neutral-400\\\">وتواصل مع كبار المستثمرين.</span>\",\"services\":[{\"title\":\"عروض المشاريع\",\"description\":\"تعرف على أحدث المشاريع العقارية واستكشف الفرص الاستثمارية المميزة.\",\"icon\":\"/src/assets/pages/homepage/marketing-service.png\"},{\"title\":\"الندوات والحوارات\",\"description\":\"شارك في جلسات نقاشية يقودها خبراء العقارات لمواكبة أحدث التوجهات في السوق.\",\"icon\":\"/src/assets/pages/homepage/socialmedia-service.png\"},{\"title\":\"التواصل والشراكات\",\"description\":\"فرصة للتواصل مع رواد الأعمال والمستثمرين لإنشاء شراكات استراتيجية ناجحة.\",\"icon\":\"/src/assets/pages/homepage/paidmedia-service.png\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Services\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"استكشف الفرص العقارية <span class=\\\"text-neutral-400\\\">وتواصل مع كبار المستثمرين.</span>\"},{\"type\":\"attribute\",\"name\":\"services\",\"value\":[{\"title\":\"عروض المشاريع\",\"description\":\"تعرف على أحدث المشاريع العقارية واستكشف الفرص الاستثمارية المميزة.\",\"icon\":\"/src/assets/pages/homepage/marketing-service.png\"},{\"title\":\"الندوات والحوارات\",\"description\":\"شارك في جلسات نقاشية يقودها خبراء العقارات لمواكبة أحدث التوجهات في السوق.\",\"icon\":\"/src/assets/pages/homepage/socialmedia-service.png\"},{\"title\":\"التواصل والشراكات\",\"description\":\"فرصة للتواصل مع رواد الأعمال والمستثمرين لإنشاء شراكات استراتيجية ناجحة.\",\"icon\":\"/src/assets/pages/homepage/paidmedia-service.png\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":11}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,23],\"inline\":false,\"attributes\":{\"title\":\"تفاصيل الفعالية\",\"date\":\"٢٥ مارس ٢٠٢٥\",\"time\":\"الساعة ٨ مساءً\",\"location\":\"قاعة المؤتمرات، الرياض\",\"icons\":{\"date\":\"/src/assets/icons/calendar.svg\",\"time\":\"/src/assets/icons/clock.svg\",\"location\":\"/src/assets/icons/location.svg\"}},\"children\":[],\"type\":\"tag\",\"tag\":\"EventDetails\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"تفاصيل الفعالية\"},{\"type\":\"attribute\",\"name\":\"date\",\"value\":\"٢٥ مارس ٢٠٢٥\"},{\"type\":\"attribute\",\"name\":\"time\",\"value\":\"الساعة ٨ مساءً\"},{\"type\":\"attribute\",\"name\":\"location\",\"value\":\"قاعة المؤتمرات، الرياض\"},{\"type\":\"attribute\",\"name\":\"icons\",\"value\":{\"date\":\"/src/assets/icons/calendar.svg\",\"time\":\"/src/assets/icons/clock.svg\",\"location\":\"/src/assets/icons/location.svg\"}}],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":23}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,30],\"inline\":false,\"attributes\":{\"logos\":[\"/src/assets/logos/sponsor1.png\",\"/src/assets/logos/sponsor2.png\"]},\"children\":[],\"type\":\"tag\",\"tag\":\"Logos\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"logos\",\"value\":[\"/src/assets/logos/sponsor1.png\",\"/src/assets/logos/sponsor2.png\"]}],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":30}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };

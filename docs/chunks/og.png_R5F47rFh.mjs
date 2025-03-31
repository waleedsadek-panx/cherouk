import { g as getCollectionStaticPaths } from './collection-helpers_IH9mzo28.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import satori from 'satori';
import sharp from 'sharp';
import { s as siteTitle } from './site.config_CJ5kdoCv.mjs';

const Template = (props) => /* @__PURE__ */ jsxs(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      color: "#ffffff",
      background: "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
      padding: "2rem",
      border: "5px solid #333333",
      backgroundPosition: "left",
      backgroundRepeat: "no-repeat",
      alignItems: "center",
      position: "relative"
    },
    children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            flex: "1",
            padding: "2rem 1rem",
            fontSize: "3rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontWeight: "bold",
            wordBreak: "break-word"
          },
          children: props.title
        }
      ),
      props.cover && /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            margin: "2.5rem"
          },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: props.cover,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px"
              },
              alt: "Cover"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("span", { style: { position: "absolute", bottom: "20px", right: "20px", zIndex: 100 }, children: props.author })
    ]
  }
);
const generateOgImage = async (text = siteTitle, author = "Your Company", date = /* @__PURE__ */ new Date(), cover, logo) => {
  const openSansBoldRes = await fetch("https://www.1001fonts.com/download/font/open-sans.extrabold.ttf");
  const openSansBold = await openSansBoldRes.arrayBuffer();
  const openSansRegularRes = await fetch("https://www.1001fonts.com/download/font/open-sans.regular.ttf");
  const openSansRegular = await openSansRegularRes.arrayBuffer();
  const options = {
    width: 600,
    height: 315,
    embedFont: true,
    fonts: [
      {
        name: "Open Sans",
        data: openSansBold,
        weight: 900,
        style: "normal"
      },
      {
        name: "Open Sans",
        data: openSansRegular,
        weight: 600,
        style: "normal"
      }
    ]
  };
  const svg = await satori(
    Template({
      title: text,
      author,
      cover}),
    options
  );
  const sharpSvg = Buffer.from(svg);
  const buffer = await sharp(sharpSvg).toBuffer();
  return buffer;
};

const prerender = true;
const GET = async ({ props: { data: page } }) => {
  const response = await generateOgImage(page?.data.title, siteTitle, page?.data.lastUpdateDate);
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png"
    }
  });
};
async function getStaticPaths() {
  return await getCollectionStaticPaths("pages");
}

export { GET, getStaticPaths, prerender };

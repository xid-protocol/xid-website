import { c as createComponent, d as createAstro, e as addAttribute, h as renderScript, a as renderTemplate, r as renderComponent, m as maybeRenderHead, s as spreadAttributes, F as Fragment, u as unescapeHTML } from './astro/server_Dy-IgqSj.mjs';
/* empty css                         */

const $$Astro$4 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/root/code/xid-website/node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@2.4.2_lightningcss@1.30.1_rol_a53a484f489a7497d059c47e4d8473d0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/code/xid-website/node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@2.4.2_lightningcss@1.30.1_rol_a53a484f489a7497d059c47e4d8473d0/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$3 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/screenshot.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/Alexandria-Bold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Alexandria-Bold.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/Alexandria-Light.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Alexandria-Light.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/Alexandria-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Alexandria-Regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/Alexandria-SemiBold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Alexandria-SemiBold.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/Kablammo-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Kablammo-Regular.woff" as="font" type="font/woff" crossorigin><!-- Primary Meta Tags --><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/root/code/xid-website/src/components/BaseHead.astro", void 0);

const $$Astro$2 = createAstro();
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href = "", text = "", style = "primary", class: className, ...props } = Astro2.props;
  const types = {
    primary: "hover:shadow-pblueHover",
    secondary: "hover:shadow-pgreenHover",
    tertiary: "hover:shadow-ppinkHover"
  };
  const getType = (style2) => {
    return types[style2] || "";
  };
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, `rounded-md border-black inline-block px-5 py-2 hover:border-1 ${getType(style)} transition ease-in-out`, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${text} </a> `;
}, "/root/code/xid-website/src/components/HeaderLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header> <nav class="flex container mx-auto md:p-10 px-4 py-6 items-center justify-between"> <a class="flex items-center gap-2" href="/"> <p class="font-kablamo text-ppink text-4xl md:text-5xl">S</p> <p class="pt-2 md:text-lg font-semibold flex"> <span class="hidden md:block">Joaqu\xEDn</span> Sorolla\n</p> </a> <ul class="items-center md:gap-8 text-nowrap hidden md:flex"> <li>', "</li> <li>", "</li> <li>", '</li> </ul> <div class="md:hidden z-40"> <button class="hamburger hamburger--elastic" type="button"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span> </button> <div id="navigation" class="fixed top-0 left-0 w-full h-full bg-white transform -translate-y-full transition-transform duration-300 ease-in-out"> <ul class="flex flex-col items-center justify-center h-full gap-8 text-nowrap"> <li>', "</li> <li>", "</li> <li>", '</li> </ul> </div> </div> </nav> </header> <script>\n  function init(){\n    const hamburger = document.querySelector(".hamburger");\n    const menu = document.getElementById("navigation");\n\n    if (hamburger && menu) {\n      hamburger.addEventListener("click", () => {\n        hamburger.classList.toggle("is-active");\n        menu.classList.toggle("-translate-y-full");\n        menu.classList.toggle("translate-y-0");\n      });\n    }\n  }\n  init();\n  document.addEventListener("astro:after-swap", init);\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Link", $$HeaderLink, { "href": "/", "text": "Home", "style": "primary" }), renderComponent($$result, "Link", $$HeaderLink, { "href": "/about", "text": "What I do", "style": "secondary" }), renderComponent($$result, "Link", $$HeaderLink, { "href": "/blog", "text": "My work", "style": "tertiary" }), renderComponent($$result, "Link", $$HeaderLink, { "href": "/", "text": "Home", "style": "primary" }), renderComponent($$result, "Link", $$HeaderLink, { "href": "/about", "text": "What I do", "style": "secondary" }), renderComponent($$result, "Link", $$HeaderLink, { "href": "/blog", "text": "My work", "style": "tertiary" }));
}, "/root/code/xid-website/src/components/Header.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1750780883,"icons":{"1":{"body":"<path fill=\"currentColor\" d=\"M7.343 3.988c-1.856 0-3.032 1.316-3.484 2.808l-.06.2H2.497a.5.5 0 0 0-.5.5c0 .685.19 1.328.522 1.813.117.17.256.327.415.458l-.299.725a1.094 1.094 0 0 0 1.012 1.51H4.72c.424 0 .81-.244.99-.628l.304-.645a10.7 10.7 0 0 0 2.746 0l.303.645c.18.384.567.629.99.629h1.063a1.093 1.093 0 0 0 1.012-1.512l-.202-.49h.965c.617 0 1.112-.524 1.112-1.132v-.62c0-.94-.734-1.75-1.69-1.75h-1.464c-.534-1.385-1.793-2.51-3.506-2.51m4.244 5.013L11.154 7.5h1.159c.357 0 .69.314.69.75v.62a.14.14 0 0 1-.041.097c-.028.028-.055.035-.071.035zm-.655 1.214.271.657a.094.094 0 0 1-.087.13h-1.062a.09.09 0 0 1-.086-.054l-.189-.401q.582-.134 1.153-.332m-5.937.332-.19.401a.09.09 0 0 1-.085.055H3.647a.094.094 0 0 1-.087-.13l.272-.66q.575.2 1.163.335M3.496 7.996l-.202.67a2.1 2.1 0 0 1-.25-.67zm1.32-.91c.367-1.211 1.243-2.098 2.527-2.098 1.304 0 2.29.91 2.65 2.095l.63 2.181a9.75 9.75 0 0 1-6.467.003z\"/>","width":16,"height":16},"2":{"body":"<path fill=\"currentColor\" d=\"M10.5 3.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m10 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-6.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM5 10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m.854-4.854a.5.5 0 1 0-.708.708l.5.5a.5.5 0 1 0 .708-.708zm-.708 9.708a.5.5 0 0 0 .708 0l.5-.5a.5.5 0 0 0-.708-.708l-.5.5a.5.5 0 0 0 0 .708m9-9.708a.5.5 0 0 1 .708.708l-.5.5a.5.5 0 0 1-.708-.708zm.708 9.708a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.5.5a.5.5 0 0 1 0 .708\"/>","width":20,"height":20},"3":{"body":"<path fill=\"currentColor\" d=\"M7.75 2a5.75 5.75 0 1 0 0 11.5h5a.75.75 0 0 0 .75-.75v-5A5.75 5.75 0 0 0 7.75 2M3.5 7.75a4.25 4.25 0 0 1 8.5 0V12H7.75A4.25 4.25 0 0 1 3.5 7.75M7.75 26a5.75 5.75 0 0 1 0-11.5h5a.75.75 0 0 1 .75.75v5A5.75 5.75 0 0 1 7.75 26M3.5 20.25a4.25 4.25 0 0 0 8.5 0V16H7.75a4.25 4.25 0 0 0-4.25 4.25M26 7.75a5.75 5.75 0 0 0-11.5 0v5c0 .414.336.75.75.75h5A5.75 5.75 0 0 0 26 7.75M20.25 3.5a4.25 4.25 0 0 1 0 8.5H16V7.75a4.25 4.25 0 0 1 4.25-4.25m0 22.5a5.75 5.75 0 0 0 0-11.5h-5a.75.75 0 0 0-.75.75v5A5.75 5.75 0 0 0 20.25 26m4.25-5.75a4.25 4.25 0 0 1-8.5 0V16h4.25a4.25 4.25 0 0 1 4.25 4.25\"/>","width":28,"height":28},"4":{"body":"<path fill=\"currentColor\" d=\"M9.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3 1a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.5 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M13.25 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m.447-11.008c-2.754-1.415-5.554-1.28-7.927.174-1.21.742-2.517 2.303-3.254 3.893-.37.8-.617 1.646-.614 2.434.004.801.268 1.566.938 2.112.61.498 1.142.748 1.656.773.518.026.922-.184 1.238-.37l.197-.119c.242-.147.441-.268.69-.346.28-.09.637-.122 1.155.036.19.058.306.144.386.244.086.106.155.254.206.466.052.213.08.464.1.76.009.11.016.237.023.369.012.192.023.397.039.586.054.67.17 1.436.574 2.132.414.713 1.1 1.303 2.203 1.68 1.602.548 3.066.103 4.206-.8 1.126-.891 1.956-2.24 2.371-3.589 1.315-4.273-.211-8.393-4.187-10.435M6.292 4.019c2.065-1.265 4.492-1.4 6.948-.138 3.507 1.802 4.873 5.4 3.688 9.252-.366 1.19-1.094 2.354-2.036 3.1-.929.735-2.043 1.053-3.261.637-.904-.31-1.384-.757-1.663-1.236-.288-.497-.39-1.078-.442-1.712-.015-.189-.025-.36-.035-.534l-.025-.41a6 6 0 0 0-.126-.925 2.2 2.2 0 0 0-.4-.86 1.75 1.75 0 0 0-.872-.57c-.702-.215-1.265-.187-1.75-.034-.375.12-.698.317-.946.47l-.146.087c-.285.169-.472.244-.68.234-.213-.01-.543-.118-1.074-.55-.385-.314-.567-.763-.57-1.34-.002-.591.186-1.288.521-2.01.674-1.453 1.862-2.844 2.87-3.461\"/>","width":20,"height":20},"5":{"body":"<path fill=\"currentColor\" d=\"M15.72 2.22a.75.75 0 0 1 1.061 1.06L15.56 4.5h2.19c.318 0 .6.2.707.498l1.25 3.5A.75.75 0 0 1 19 9.5h-1.045l-1.587 10.05c-.21 1.465-1.46 2.45-2.97 2.45h-2.796c-1.511 0-2.761-.985-2.969-2.44L6.045 9.5H5.001a.75.75 0 0 1-.707-1.002l1.25-3.5a.75.75 0 0 1 .707-.498h7.188zm.717 7.28H7.563l1.555 9.837c.099.695.692 1.163 1.484 1.163H13.4c.792 0 1.385-.468 1.486-1.174zm.785-3.5H6.78l-.714 2h11.871z\"/>"},"beach":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M2 15.75S3.795 15 7 15c5 0 9 3 15 3M2 21h20M12.594 3.228c-2.846.816-4.695 3.624-4.59 6.647.022.628.033.942.301 1.08.269.14.547-.057 1.104-.45l1.242-.878a.98.98 0 0 1 .63-.181l2.917.187 2.438-1.723a.98.98 0 0 1 .63-.18l1.522.097c.653.042.98.063 1.141-.188s.03-.523-.233-1.067c-1.31-2.702-4.24-4.165-7.102-3.344M14.5 9.5l2 7.5M12.286 3 12 2\" color=\"currentColor\"/>"},"github":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.6 4.6 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.3 8.3 0 0 1 2.22-5.77 7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69 8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5\"/>","width":48,"height":48},"linkedin":{"body":"<g fill=\"currentColor\"><path d=\"M19.515 11.952c-.678 0-1.18.171-1.573.387-.063-.224-.27-.388-.514-.339h-2.984c-.295-.049-.534.19-.443.5v11c-.091.28.148.52.443.5h2.984c.295.02.534-.22.534-.515l-.001-6.648c-.001-.003-.012-.321.189-.54.161-.174.438-.263.821-.263.638 0 .922.261 1.028.845v6.606c-.105.295.134.535.429.515h3.145c.295.02.534-.22.428-.515v-6.828c.105-3.472-2.368-4.705-4.486-4.705M23.038 23h-2.076v-6.121c0-1.181-.763-1.913-1.99-1.913-.694 0-1.234.204-1.606.606-.517.56-.477 1.27-.366 1.428v6h-2.022v-9.98h1.916v.336a.532.532 0 0 0 .86.423l.14-.108c.405-.319.824-.65 1.622-.65.826 0 3.523.263 3.523 3.637zM11 6.966c-1.122 0-2.034.912-2.034 2.034s.912 2.034 2.034 2.034 2.034-.912 2.034-2.034S12.122 6.966 11 6.966m0 3c-.532 0-.966-.434-.966-.966s.434-.966.966-.966.966.434.966.966-.434.966-.966.966m1.428 1.985H9.46c-.295 0-.534.239-.46.549v11c-.074.28.165.52.46.5h2.968c.295.02.534-.22.534-.515v-11a.534.534 0 0 0-.534-.534M12 23H9.994v-9.98H12z\"/><path d=\"M16-.034C7.158-.034-.034 7.158-.034 16S7.158 32.034 16 32.034 32.034 24.842 32.034 16 24.842-.034 16-.034m0 31C7.748 30.966 1.034 24.252 1.034 16S7.748 1.034 16 1.034 30.966 7.748 30.966 16 24.252 30.966 16 30.966\"/></g>","width":32,"height":32},"paint":{"body":"<path fill=\"currentColor\" d=\"M224 28c-20.29 0-43.16 11.24-68 33.4-18.47 16.49-34.39 35.83-45 49.93A56 56 0 0 0 36 164c0 33.22-21.26 48-22.22 48.68A4 4 0 0 0 16 220h76a56 56 0 0 0 52.67-75c14.11-10.63 33.44-26.55 49.93-45C216.76 75.16 228 52.29 228 32a4 4 0 0 0-4-4M92 212H26.35C33.91 203.69 44 188.08 44 164a48 48 0 1 1 48 48m26.52-97.31c4.13-5.44 9.32-12 15.29-18.9a80.1 80.1 0 0 1 26.4 26.4c-6.94 6-13.46 11.16-18.9 15.29a56.3 56.3 0 0 0-22.79-22.79m47.77 2.14a88.2 88.2 0 0 0-27.12-27.12c21.83-24.28 52.09-51.08 80.65-53.53-2.45 28.56-29.25 58.82-53.53 80.65\"/>","width":256,"height":256},"web":{"body":"<path fill=\"currentColor\" d=\"M2 11.5v-1h3v1zm3.054 5.666-.708-.72 2.1-2.1.72.708zm1.392-9.512-2.1-2.1.708-.72 2.112 2.112zM16.962 18.5l-4.443-4.442-.942 2.903-2.193-7.23 7.308 2.192-2.892 1.03 4.354 4.355zM10.116 6V3h1v3zm4.669 1.654-.72-.708 2.112-2.111.708.707z\"/>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/root/code/xid-website/node_modules/.pnpm/astro-icon@1.1.5/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center container mx-auto p-10 text-center gap-10 pb-40">
&copy; ${today.getFullYear()} Your name here. All rights reserved.
<div class="flex items-center gap-6 text-5xl"> <a href="https://jramma.com" target="_blank" class="py-1 pl-3 rounded-md border-1 border-black bg-ppink shadow-card hover:shadow-hover transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "web" })} </a> <a href="https://github.com/jramma" target="_blank" class="border-1 p-1 border-black rounded-full bg-pblue shadow-card hover:shadow-hover transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github" })} </a> <a href="https://www.linkedin.com/in/jramma/" target="_blank" class="border-1 p-1 border-black rounded-full bg-pgreen shadow-card hover:shadow-hover transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin" })} </a> </div> <a href="https://buymeacoffee.com/jramma" target="_blank" rel="noopener noreferrer" class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-xl shadow-md flex items-center gap-2 transition duration-200">
☕ Invítame a un café
</a> </footer>`;
}, "/root/code/xid-website/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/root/code/xid-website/src/components/FormattedDate.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b, $$FormattedDate as c, $$Icon as d };

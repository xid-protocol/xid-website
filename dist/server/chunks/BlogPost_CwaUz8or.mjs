import { c as createComponent, d as createAstro, r as renderComponent, b as renderHead, e as addAttribute, u as unescapeHTML, f as renderSlot, g as renderTransition, a as renderTemplate } from './astro/server_Dy-IgqSj.mjs';
import { $ as $$BaseHead, a as $$Header, c as $$FormattedDate, d as $$Icon, b as $$Footer } from './FormattedDate_BPBGl1El.mjs';
import { g as getCollection } from './_astro_content_C77pxz3Z.mjs';
import { $ as $$Image } from './_astro_assets_Df_OtnA3.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title = "",
    description,
    pubDate,
    updatedDate,
    heroImage = "/fran.jpg",
    icon,
    tags
  } = Astro2.props;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const bgClasses = [
    "hover:shadow-ppinkHover",
    "hover:shadow-pgreenHover",
    "hover:shadow-pblueHover",
    "hover:shadow-pyellow"
  ];
  const images = /* #__PURE__ */ Object.assign({"/src/assets/adriana.jpg": () => import('./adriana_C80nUCd5.mjs'),"/src/assets/euro.jpg": () => import('./euro_BPGpdLfC.mjs'),"/src/assets/fran.jpg": () => import('./fran_BFXUscJD.mjs'),"/src/assets/hero.png": () => import('./hero_Bg17gxlc.mjs')});
  if (!images[heroImage]) throw new Error(`"${heroImage}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  const getRandomClass = () => {
    return bgClasses[Math.floor(Math.random() * bgClasses.length)];
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto md:px-10 text-white"> <article> <div class="relative mb-20"${addAttribute(renderTransition($$result, "fdw4rlwh", "fade"), "data-astro-transition-scope")}> <span class="bg-black bg-opacity-25 w-full h-full absolute"></span> <div class="absolute bottom-10 md:left-20 left-6"> <h1 class="text-4xl md:text-9xl font-semibold text-shadow"> <span class="font-kablamo text-ppink">${title.charAt(0)}</span>${title.slice(1)} </h1> <p>${unescapeHTML(description)}</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": images[heroImage](), "alt": title, "class": "h-96 w-full object-cover" })} </div> <div class="text-black px-6 md:px-0"> <div class=""> <div class="text-sm text-pblack flex items-center justify-between"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "text-5xl", "data-astro-transition-scope": renderTransition($$result, "fnpln3sg", "fade") })} </div> <hr> </div> <div class="flex justify-between py-10 md:flex-row flex-col"> <div class="prose md:w-1/2 flex flex-col gap-6"> ${renderSlot($$result, $$slots["default"])} </div> <div class="flex flex-col gap-6"${addAttribute(renderTransition($$result, "6b5o5s4z", "slide"), "data-astro-transition-scope")}> <ul class="flex flex-col gap-2 pt-10 md:pt-0 items-start md:items-end"> <p class="md:hidden font-semibold">Related:</p> ${posts.map((post) => {
    return renderTemplate`<li${addAttribute(`text-left rounded-lg border-1 border-black shadow-card group hover:shadow-hover transition  px-2 py-2 ${getRandomClass()}`, "class")}> <a${addAttribute(`/blog/${post.id}/`, "href")}> <h4>${post.data.title}</h4> </a> </li>`;
  })} </ul> <hr> <p>Written by</p> <div class="flex -mt-4 gap-2"> <div class="bg-pgreen rounded-full w-12 h-12 aspect-square object-contain overflow-hidden "> ${renderComponent($$result, "Image", $$Image, { "src": images["/src/assets/hero.png"](), "alt": "Fran" })} </div> <div> <h3>Joaquín Sorolla</h3> <p class="text-pblack">UX UI designer based<br>in Steve Jobs</p> </div> </div> <hr> <div> <p>Contributors:</p> <div class="flex items-center gap-6 text-xl"> <a href="https://jramma.com" target="_blank" class="py-1 pl-3 rounded-md border-1 border-black bg-ppink shadow-card hover:shadow-hover transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "web" })} </a> <a href="https://github.com/jramma" target="_blank" class="border-1 p-1 border-black rounded-full bg-pblue shadow-card hover:shadow-hover transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github" })} </a> <a href="https://www.linkedin.com/in/jramma/" target="_blank" class="border-1 p-1 border-black rounded-full bg-pgreen shadow-card hover:shadow-hover transition"> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin" })} </a> </div> </div> </div> </div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/root/code/xid-website/src/layouts/BlogPost.astro", "self");

export { $$BlogPost as $ };

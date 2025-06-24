/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as renderHead } from '../chunks/astro/server_Dy-IgqSj.mjs';
import { d as $$Icon, $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/FormattedDate_BPBGl1El.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DtsrwfYD.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Df_OtnA3.mjs';
import { $ as $$WhatIDo } from '../chunks/WhatIDo_BBDzvZ78.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const images = /* #__PURE__ */ Object.assign({"/src/assets/adriana.jpg": () => import('../chunks/adriana_C80nUCd5.mjs'),"/src/assets/euro.jpg": () => import('../chunks/euro_BPGpdLfC.mjs'),"/src/assets/fran.jpg": () => import('../chunks/fran_BFXUscJD.mjs'),"/src/assets/hero.png": () => import('../chunks/hero_Bg17gxlc.mjs')

});
  return renderTemplate`${maybeRenderHead()}<section class="py-20 flex md:flex-row flex-col px-4 md:px-0 gap-10 md:gap-0"> <div class="flex flex-col gap-6 justify-start items-start md:w-1/2"> <h1 class="text-pblack">Hi, my name is Joaquín Sorolla</h1> <p class="text-6xl font-bold">Duels with the sun are fewer.</p> <p>
I am Joaquín Sorolla y Bastida, a Spanish painter. A prolific artist, I
      left behind more than 2,200 cataloged works.
</p> <a rel="noopener noreferrer" href="https://jramma.com" target="_blank" class="bg-pgreen px-5 py-3 border-1 border-black rounded-lg shadow-card hover:shadow-hover transition">
Work together
</a> </div> <div class="md:w-1/2 object-contain flex items-center justify-center p-10 group"> <a rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Sorolla" target="_blank"> <div class="bg-pblue border-3 border-black rounded-2xl h-52 w-60 shadow-card group-hover:shadow-hover flex transition relative"> <div class="absolute -top-8 -left-12 text-5xl bg-ppink px-5 py-1 z-10 shadow-card group-hover:shadow-hover transition rounded-t-2xl border-3 border-black rounded-bl-2xl rounded-br-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "paint" })} </div> <div class="absolute top-16 -right-16 text-5xl bg-pyellow p-2 z-10 shadow-card group-hover:shadow-hover transition rounded-full border-3 border-black"> ${renderComponent($$result, "Icon", $$Icon, { "name": "beach" })} </div> <div class="absolute text-nowrap flex items-center gap-4 -bottom-12 right-0 pr-4 bg-pgreen pl-1 z-10 shadow-card1 group-hover:shadow-card transition rounded-full border-3 border-black"> ${renderComponent($$result, "Icon", $$Icon, { "name": "beach" })} <p>Joaquín Sorolla</p> </div> <div class="h-80 w-60 overflow-hidden relative -mt-30 rounded-2xl"> ${renderComponent($$result, "Image", $$Image, { "class": "object-bottom absolute bottom-0 group-hover:scale-105 transition", "src": images["/src/assets/hero.png"](), "alt": "Sorolla, photo wiki" })} </div> </div></a> </div> </section>`;
}, "/root/code/xid-website/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="p-0 m-0 max-w-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto md:px-10"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "WhatIDo", $$WhatIDo, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/root/code/xid-website/src/pages/index.astro", void 0);

const $$file = "/root/code/xid-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

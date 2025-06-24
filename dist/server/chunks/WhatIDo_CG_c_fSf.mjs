import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, u as unescapeHTML, a as renderTemplate } from './astro/server_Dy-IgqSj.mjs';
import { g as getCollection } from './_astro_content_C77pxz3Z.mjs';
import { d as $$Icon, c as $$FormattedDate } from './FormattedDate_D1q6u5iW.mjs';

const $$WhatIDo = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const bgClasses = [
    "bg-pgreen rounded-full",
    "bg-pblue rounded-2xl",
    "bg-ppink ",
    "bg-pyellow rounded-md"
  ];
  const getRandomClass = () => {
    return bgClasses[Math.floor(Math.random() * bgClasses.length)];
  };
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col text-center gap-4 "> <p class="text-pblack">It is necessary to observe.</p> <h2 class="text-4xl font-bold">Treated like a portrait.</h2> <ul class="flex flex-wrap justify-center md:justify-start gap-8 py-20"> ${posts.map((post) => {
    const randomClass = getRandomClass();
    return renderTemplate`<li class="w-72 text-left rounded-3xl border-1 border-black shadow-card group hover:shadow-hover transition  px-4 py-6 flex flex-col gap-6"> <a${addAttribute(`/blog/${post.id}/`, "href")} class="flex flex-col gap-4"> <div${addAttribute(`${randomClass} text-4xl p-2 self-start border-1 border-black shadow-card1 group-hover:shadow-card transition`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": post.data.icon })} </div> <h4 class="text-xl font-semibold">${post.data.title}</h4> <p class="date -mt-4 text-sm font-light"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> </a> <div>${unescapeHTML(post.data.description)}</div> </li>`;
  })} </ul> </section>`;
}, "/root/code/xid-website/src/components/WhatIDo.astro", void 0);

export { $$WhatIDo as $ };

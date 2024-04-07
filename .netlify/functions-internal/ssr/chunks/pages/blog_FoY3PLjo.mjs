import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_zZdweKQ3.mjs';
import 'kleur/colors';
import { b as $$BlogPost, c as $$BaseLayout } from './_tag__CoOsidNL.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_Dcb13a74.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_Bu5knzS8.mjs'),"./posts/post-3.md": () => import('./post-3_EHoKckFy.mjs'),"./posts/post-4.md": () => import('./post-4_C_WpBQgN.mjs'),"./posts/post-5.md": () => import('./post-5_DTkPuN0m.mjs')}), () => "../pages/posts/*.md");
  const pageTitle = "My Astro Learning Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((posts) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": posts.url, "title": posts.frontmatter.title })}`)} </ul> ` })}`;
}, "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };

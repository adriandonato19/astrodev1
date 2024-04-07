import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_Dcb13a74.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_Bu5knzS8.mjs'),"./posts/post-3.md": () => import('./post-3_EHoKckFy.mjs'),"./posts/post-4.md": () => import('./post-4_C_WpBQgN.mjs'),"./posts/post-5.md": () => import('./post-5_DTkPuN0m.mjs')})),
    customData: `<language>en-us</language>`,
  });
}

export { GET };

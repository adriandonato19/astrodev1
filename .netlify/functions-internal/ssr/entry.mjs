import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BFpFXY9w.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DvSkaRUf.mjs');
const _page1 = () => import('./chunks/about_DuTGyju8.mjs');
const _page2 = () => import('./chunks/blog_DpKmYqqy.mjs');
const _page3 = () => import('./chunks/post-1_DdvZAoYa.mjs');
const _page4 = () => import('./chunks/post-2_BrwjKI4G.mjs');
const _page5 = () => import('./chunks/post-3_DjVDEr_4.mjs');
const _page6 = () => import('./chunks/post-4_YRrPUL5w.mjs');
const _page7 = () => import('./chunks/post-5_DKSJTeOO.mjs');
const _page8 = () => import('./chunks/rss_DkymdR0O.mjs');
const _page9 = () => import('./chunks/_tag__Ib_kmyfR.mjs');
const _page10 = () => import('./chunks/index_BsOnHraZ.mjs');
const _page11 = () => import('./chunks/index_BccZRcIE.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/posts/post-1.md", _page3],
    ["src/pages/posts/post-2.md", _page4],
    ["src/pages/posts/post-3.md", _page5],
    ["src/pages/posts/post-4.md", _page6],
    ["src/pages/posts/post-5.md", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/tags/[tag].astro", _page9],
    ["src/pages/tags/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "74c3cde8-3b0c-4c3e-ab95-d45522aa81df"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

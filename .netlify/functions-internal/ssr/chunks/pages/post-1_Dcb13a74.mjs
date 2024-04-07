import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, h as renderSlot, u as unescapeHTML } from '../astro_zZdweKQ3.mjs';
import 'kleur/colors';
import { c as $$BaseLayout } from './_tag__CoOsidNL.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$MarkDownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkDownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-4vn4ew7y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-4vn4ew7y><em data-astro-cid-4vn4ew7y>${frontmatter.description}</em></p> <p data-astro-cid-4vn4ew7y>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p data-astro-cid-4vn4ew7y>Written by: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-4vn4ew7y> <div class="tags" data-astro-cid-4vn4ew7y> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-4vn4ew7y><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-4vn4ew7y>${tag}</a></p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/layouts/MarkDownPostLayout.astro", void 0);

const html = "<h1 id=\"my-first-blog-post\">My First Blog Post</h1>\n<p>Published on: 2022-07-01</p>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>";

				const frontmatter = {"layout":"../../layouts/MarkDownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Astro Learner","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"The full Astro logo."},"tags":["astro","blogging","learning in public"]};
				const file = "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "# My First Blog Post\r\nPublished on: 2022-07-01\r\n\r\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\r\n\r\n## What I've accomplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## What's next\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"my-first-blog-post","text":"My First Blog Post"},{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkDownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkDownPostLayout as $, post1 as p };

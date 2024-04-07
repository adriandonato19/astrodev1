import { c as createAstro, d as createComponent, i as defineStyleVars, r as renderTemplate, e as addAttribute, g as renderHead, f as renderComponent, h as renderSlot, m as maybeRenderHead } from '../astro_zZdweKQ3.mjs';
import 'kleur/colors';
/* empty css                          */
import { $ as $$Header, a as $$Footer } from './_tag__CoOsidNL.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { pageTitle } = Astro2.props;
  const identity = {
    firstName: "Adri\xE1n",
    country: "Panama",
    occupation: "Student",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skill = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const finished = false;
  const skillColor = "blue";
  const fontWeight = "bold";
  const textCase = "lowercase";
  const fontSize = "20px";
  const $$definedVars = defineStyleVars([{ skillColor, textCase, fontSize, fontWeight }]);
  return renderTemplate`<html lang="en" data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-d7mpl6vh": true })} <h1 data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} <h2 data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>... and my new Astro site!</h2> <p data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p> <p data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> <p data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p> <ul data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}> <li data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li> <li data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>My skills are:</p> <ul data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}> ${skill.map((skill2) => renderTemplate`<li class="skill" data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>${skill2}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>`} ${finished } ${renderTemplate`<p data-astro-cid-d7mpl6vh${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` } ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-d7mpl6vh": true })} </body></html>`;
}, "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/layouts/AboutLayout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const PageTitle = "About you bro";
  return renderTemplate`${renderComponent($$result, "AboutLayout", $$AboutLayout, { "pageTitle": PageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>testing components</h2> ` })}`;
}, "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/pages/about.astro", void 0);

const $$file = "C:/Users/Dell/Desktop/astrodevblog/deluxe-churros/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };

/* empty css                           */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro.9ec8e365.mjs';
import 'html-escaper';
import 'clsx';
import '@notionhq/client/build/src/api-endpoints.js';
import { Client } from '@notionhq/client';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './image-endpoint.js.df222002.mjs';
import 'mime/lite.js';

const $$Astro$5 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<header class="max-w-4xl m-auto h-12 fixed left-0 right-0 top-0 bg-slate-900 z-50 flex justify-between items-center px-2 py-2 sm:rounded-md border-b-2 border-gray-600"><h3 class="text-white font-semibold text-lg">Ann</h3><nav id="nav" class="text-white absolute top-0 left-0 right-0 bg-blue-900 sm:bg-opacity-0 bg-opacity-40 hidden sm:block sm:relative"><ul class="mt-12 mb-2 sm:flex sm:mb-0 sm:mt-0 items-center gap-2"><li class="rounded-sm px-2 py-1 cursor-pointer hover:bg-blue-900"><a href="#" class="w-full inline-block">Inicio</a></li><li class="rounded-sm px-2 py-1 cursor-pointer hover:bg-blue-900"><a href="#about_me" class="w-full inline-block">Sobre mi</a></li><li class="rounded-sm px-2 py-1 cursor-pointer hover:bg-blue-900"><a href="#portfolio" class="w-full inline-block">Proyectos</a></li></ul><button class="sm:hidden rounded-full bg-white text-black h-8 w-8 flex items-center justify-center absolute top-2 right-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"></path></svg></button></nav><button onclick="" class="sm:hidden rounded-full bg-white text-black h-8 w-8 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z"></path></g></svg></button></header>`;
}, "C:/Users/luism/Documents/codigo/portafolioPrueba/src/components/Menu.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="py-4 px-6 bg-verde bg-opacity-50 pb-8"><div class="grid grid-cols-1 text-white "><div><h1 class="font-bold text-lg  tracking-wide">Anberto</h1><span class="text-gray-300">FullStack Developer</span></div><div><div class="bg-gray-500 h-[1px] rounded-sm w-full my-4"></div><ul class="flex gap-4"><li><a href="#portfolio" class="underline hover:text-azul">Proyectos</a></li><li><a href="mailto:anberdev@gmail.com" class="underline hover:text-azul">anbertodev@gmail.com</a></li></ul><div class="flex items-center gap-4 text-white mt-4"><a href="https://github.com/anber-02" class="hover:text-azul" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path></svg></a><a href="https://www.linkedin.com/in/luisanberto/" class="hover:text-azul" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"></path></svg></a></div></div></div></footer>`;
}, "C:/Users/luism/Documents/codigo/portafolioPrueba/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body class="max-w-4xl m-auto">${renderComponent($$result, "Menu", $$Menu, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/luism/Documents/codigo/portafolioPrueba/src/layouts/Layout.astro", void 0);

const image = {"src":"/_astro/profile.3daf2e43.jpg","width":3120,"height":4208,"format":"jpg"};

const cv = "/cv.pdf";

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-slate-800 text-white rounded-md py-4 px-4 overflow-auto h-full" data-astro-cid-dohjnao5><figure class="overflow-hidden h-auto w-full " data-astro-cid-dohjnao5><img${addAttribute(project.image, "src")}${addAttribute(`image de ${project.nombre[0].text.content}`, "alt")} class="block h-full w-full object-cover" data-astro-cid-dohjnao5></figure><div class="flex gap-2 flex-wrap my-4" data-astro-cid-dohjnao5>${project.lenguajes.map((lenguaje) => {
    return renderTemplate`<span class="py-0.5 px-2 rounded-full text-xs  tracking-wider opacity-90"${addAttribute({ backgroundColor: lenguaje.color }, "style")} data-astro-cid-dohjnao5>${lenguaje.name}</span>`;
  })}</div><div class="pb-4 mt-2" data-astro-cid-dohjnao5><h2 class="font-semibold text-lg" data-astro-cid-dohjnao5>${project.nombre[0].text.content}</h2><div class="bg-gray-200 h-[1px] rounded-sm w-full mb-2" data-astro-cid-dohjnao5></div><p class="text-sm" data-astro-cid-dohjnao5>${project?.descripcion[0]?.text.content}</p></div>${project.github !== null ? renderTemplate`<a${addAttribute(project.github || "", "href")} target="_blank" rel="noreferrer" class="flex gap-2 items-center bg-gray-600 rounded-md py-1 px-2 hover:bg-gray-700" data-astro-cid-dohjnao5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-dohjnao5><path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" data-astro-cid-dohjnao5></path></svg><span data-astro-cid-dohjnao5>Repositorio</span></a>` : ""}</div>`;
}, "C:/Users/luism/Documents/codigo/portafolioPrueba/src/components/Card.astro", void 0);

const DATABASE_ID = "ed2299e9bb5044b3959b42c705324292";
const notion = new Client({
  auth: "secret_CCrjgmFf3wuYNIGQL8OhZYxfa1k7i8p0JUpgyXpWZ7k"
});
const getProjects = async () => {
  const query = {
    database_id: DATABASE_ID,
    filter: {
      property: "Estado",
      multi_select: {
        contains: "Done"
      }
    },
    sorts: [
      {
        property: "ID",
        direction: "ascending"
      }
    ]
  };
  try {
    const { results } = await notion.databases.query(query);
    const data = results.map((page) => {
      const { properties, cover } = page;
      const { ID, Descripcion, Estado, URL, Lenguajes, Nombre } = properties;
      return {
        id: ID[ID.type],
        descripcion: Descripcion[Descripcion.type],
        estado: Estado[Estado.type],
        github: URL[URL.type],
        lenguajes: Lenguajes[Lenguajes.type],
        nombre: Nombre[Nombre.type],
        image: page?.cover?.file?.url
      };
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const $$Astro$1 = createAstro();
const $$ProjectsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectsList;
  const projects = await getProjects();
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 my-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ">${projects?.map((project) => {
    return renderTemplate`${renderComponent($$result, "Card", $$Card, { "project": project })}`;
  })}</div>
)`;
}, "C:/Users/luism/Documents/codigo/portafolioPrueba/src/components/ProjectsList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio Anberto", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="main" data-astro-cid-j7pv25f6><section class="min-h-[90vh] flex flex-col gap-4 justify-center" data-astro-cid-j7pv25f6><div class="h-full flex flex-col " data-astro-cid-j7pv25f6><div class="" data-astro-cid-j7pv25f6><div class="flex flex-col items-center gap-4" data-astro-cid-j7pv25f6><figure class="h-40 w-40 sm:h-52 sm:w-52 rounded-full overflow-hidden" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": "Un cohete en el espacio.", "class": "h-full w-full object-cover", "data-astro-cid-j7pv25f6": true })}</figure><div class="text-verdeClaro text-sm text-opacity-80 flex gap-4" data-astro-cid-j7pv25f6><a target="_blank" href="https://github.com/anber-02" class="bg-morado bg-opacity-50 rounded-sm px-2 py-0.5 text-sm flex gap-1 items-center hover:scale-110 hover:bg-opacity-1 ease-in duration-150 " rel="noreferrer" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" data-astro-cid-j7pv25f6></path></svg><small data-astro-cid-j7pv25f6>GitHub</small></a><a target="_blank" href="https://www.linkedin.com/in/luisanberto/" class="bg-morado bg-opacity-50 rounded-sm px-2 py-0.5 text-sm flex gap-1 items-center hover:scale-110 hover:bg-opacity-1 ease-in duration-150" rel="noreferrer" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" data-astro-cid-j7pv25f6></path></svg><small data-astro-cid-j7pv25f6>Linkedin</small></a></div></div><div class="mb-4 mt-8" data-astro-cid-j7pv25f6><h1 class="text-3xl sm:text-5xl font-bold text-primary" data-astro-cid-j7pv25f6>Hola, soy Luis</h1><h3 class="font-semibold text-gray-400 sm:text-2xl" data-astro-cid-j7pv25f6>Fullstack developer</h3><p class="font-normal text-gray-200 mt-2 break-words sm:mt-4" data-astro-cid-j7pv25f6>Entusiasta de la tecnología y el desarrollo de software.</p></div></div></div><a class="bg-secondary bg-opacity-80 py-2 px-4 rounded-lg font-semibold self-start tracking-wide hover:bg-opacity-60 hover:text-white" download=""${addAttribute(cv, "href")} data-astro-cid-j7pv25f6>Descargar CV</a></section><div class="bg-gray-500 h-[1px] rounded-sm w-full my-2" id="about_me" data-astro-cid-j7pv25f6></div><section class="my-4 pb-2   sm:min-h-0 sm:py-8" data-astro-cid-j7pv25f6><h2 class="text-2xl font-bold text-secondary sm:text-3xl" data-astro-cid-j7pv25f6>Sobre Mi</h2><div class="container" data-astro-cid-j7pv25f6><p class="font-normal text-gray-200 text-sm" data-astro-cid-j7pv25f6>Estudiante en TI, desarrollando proyectos personales, practicando y mejorando mis conocimientos en el mundo del desarrollo.</p></div><div class="" data-astro-cid-j7pv25f6><div class="mt-4" data-astro-cid-j7pv25f6><h3 class="text-morado font-semibold text-xl" data-astro-cid-j7pv25f6>Experiencia</h3><ul class="text-white pl-6" data-astro-cid-j7pv25f6><li class="list-disc" data-astro-cid-j7pv25f6><p class="text-white text-sm font-semibold" data-astro-cid-j7pv25f6>Empresa <small class="block text-gray-300 text-xs" data-astro-cid-j7pv25f6>(2021-2024)</small></p><div class="pl-2 description" data-astro-cid-j7pv25f6><span class="text-gray-300 text-xs" data-astro-cid-j7pv25f6>Aquí va la descripción</span></div></li></ul></div><div class="mt-4" data-astro-cid-j7pv25f6><h3 class="text-morado font-semibold text-xl" data-astro-cid-j7pv25f6>Educación</h3><ul class="text-white pl-6" data-astro-cid-j7pv25f6><li class="list-disc" data-astro-cid-j7pv25f6><p class="text-white text-sm font-semibold" data-astro-cid-j7pv25f6>Tecnologías de la información</p><div class="pl-2" data-astro-cid-j7pv25f6><span class="text-gray-300 text-xs" data-astro-cid-j7pv25f6>Universidad Tecnológica de los valles centrales de Oaxaca ( UTVCO )</span><small class="block text-gray-300 text-xs" data-astro-cid-j7pv25f6>2021-2024</small></div></li></ul></div><div class="mt-4" data-astro-cid-j7pv25f6><h3 class="text-morado font-semibold text-xl" data-astro-cid-j7pv25f6>Lenguajes</h3><ul class="text-white pl-6" data-astro-cid-j7pv25f6><li class="list-disc" data-astro-cid-j7pv25f6><p class="text-white text-sm font-semibold" data-astro-cid-j7pv25f6>Español</p><p class="text-white text-sm font-semibold" data-astro-cid-j7pv25f6>Ingles - A1</p></li></ul></div></div></section><div class="bg-gray-500 h-[1px] rounded-sm w-full my-2" id="portfolio" data-astro-cid-j7pv25f6></div><section class="mt-4 sm:py-8" data-astro-cid-j7pv25f6><h2 class="text-2xl sm:text-3xl font-bold text-gray-200" data-astro-cid-j7pv25f6>Proyectos</h2><span class="block font-semibold text-gray-400 pb-2 " data-astro-cid-j7pv25f6>Trabajos recientes</span><div class="" data-astro-cid-j7pv25f6>${renderComponent($$result2, "ProjectsList", $$ProjectsList, { "data-astro-cid-j7pv25f6": true })}</div></section><div class="bg-gray-500 h-[1px] rounded-sm w-full mt-4" data-astro-cid-j7pv25f6></div><section class="mb-8" data-astro-cid-j7pv25f6><div class="mt-4" data-astro-cid-j7pv25f6><h3 class="text-verde text-2xl sm:text-3xl font-bold " data-astro-cid-j7pv25f6>Tecnologias utilizadas</h3><div class="my-2" data-astro-cid-j7pv25f6><ul class="text-white flex gap-2 flex-wrap font-poppins text-xs sm:text-base" data-astro-cid-j7pv25f6><li data-astro-cid-j7pv25f6>
JavaScript
</li><li data-astro-cid-j7pv25f6>
React
</li><li data-astro-cid-j7pv25f6>
HTML
</li><li data-astro-cid-j7pv25f6>
CSS
</li><li data-astro-cid-j7pv25f6>
MySQL
</li><li data-astro-cid-j7pv25f6>
NodeJs
</li><li data-astro-cid-j7pv25f6>
Angular
</li><li data-astro-cid-j7pv25f6>
React Native
</li><li data-astro-cid-j7pv25f6>
Laravel
</li></ul></div></div></section></main>` })}`;
}, "C:/Users/luism/Documents/codigo/portafolioPrueba/src/pages/index.astro", void 0);

const $$file = "C:/Users/luism/Documents/codigo/portafolioPrueba/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

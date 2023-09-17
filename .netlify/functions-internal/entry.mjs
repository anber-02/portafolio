import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest.4039a3af.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro.9ec8e365.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint@_@js.54a12fcc.mjs');
const _page1  = () => import('./chunks/index@_@astro.3e8c9621.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

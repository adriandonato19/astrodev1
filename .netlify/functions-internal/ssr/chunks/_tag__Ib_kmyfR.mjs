export { renderers } from '../renderers.mjs';

const page = () => import('./pages/_tag__CoOsidNL.mjs').then(n => n._);

export { page };

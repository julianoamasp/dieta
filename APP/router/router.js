
import XchangePage  from '../component/home/index.js';
import PdfPage  from '../component/informacoes/index.js';

const routes = [
  { path: '/', component: XchangePage },
  { path: '/informacoes', component: PdfPage }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

import { RouteRecordRaw } from 'vue-router';
import { getRoutes } from 'src/plugins/PluginManager';
import RequestForVacationPage from '../plugins/RequestForVacationPlugin/pages/RequestForVacationPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/DashboardViewPage.vue')
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  }
];

/* TODO: not so elegant solution
 */
routes.push(...getRoutes());
routes.push(  
// Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => import('pages/ErrorNotFound.vue'),
})

console.log(routes);

export default routes;

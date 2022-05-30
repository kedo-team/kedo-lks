import { IWidgetDefinition } from '../PluginManager'
import { RouteRecordRaw } from 'vue-router'

const name = 'plugin Name'
const description = 'long plugin description'

const routes: RouteRecordRaw[] = [{
    path: '/request-for-vacation',
    component: () => import('./pages/RequestForVacationPage.vue')
}]

const widgets: IWidgetDefinition[] = [{
    name: 'Widget short name',
    description: 'Widget long and detail description',
    imgUrl: 'https://picsum.photos/seed/seed666/80/60',
    component: () => 
        import('./widgets/RequestForVacation.vue')
}]

export {
    name,
    description, 
    routes,
    widgets,
}
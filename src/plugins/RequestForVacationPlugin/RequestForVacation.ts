import { IWidgetDefinition } from '../PluginManager'
import { RouteRecordRaw } from 'vue-router'

const name = 'plugin Name'
const description = 'long plugin description'

const routes: RouteRecordRaw[] = [{
    path: 'request-for-vacation',
    component: () => import('./pages/RequestForVacationPage.vue'),
    meta: {
        title: 'Создать заявление на отпуск',
        description: 'Будет создано заявление на отпуск, запущено на согласование и отправлено в кадровую службу. Статус заявления вы сможете отслеживать в виджетах или на странице "Мои заявления".'
    }
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
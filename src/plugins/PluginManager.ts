import { defineAsyncComponent } from 'vue';
import { RouteRecordRaw } from "vue-router";
import  LoadingComponent from '../components/LoadingComponent.vue'
import  ErrorWidget from '../components/ErrorWidget.vue'
import plugins from "./config";


const { name, description, routes, widgets } = await import('./RequestForVacationPlugin/RequestForVacation');

export function getWidgetList() : IWidget[] {
    return widgets.map((widget) => {
        return {
            name: widget.name,
            description: widget.description,
            imgUrl: widget.imgUrl,
            component: defineAsyncComponent({
                loader: widget.component,
                loadingComponent: LoadingComponent,
                errorComponent: ErrorWidget
            })
    }});
}

export function getRoutes(): RouteRecordRaw[] {
    return routes;
}

export interface IWidgetDefinition {
    name: string,
    description: string,
    imgUrl: string,
    component: () => Promise<typeof import("*.vue")>
}

export interface IWidget extends Omit<IWidgetDefinition, 'component'>{
    component: ReturnType<typeof defineAsyncComponent>
}
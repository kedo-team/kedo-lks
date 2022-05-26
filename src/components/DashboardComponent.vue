<template lang="pug">
.row(style="width:100%;background-color:yellow;gap:12px;padding:12px;")
  WidgetPreview(title="Мои документы", description="Документы, требующие моей реакции", previewUrl="https://picsum.photos/seed/seed1/80/60")
  WidgetPreview(title="Мои заявки", description="Заявки, отправленные мной по которым я жду реакции от дугих", previewUrl="https://picsum.photos/seed/seed2/80/60")
  WidgetPreview(title="Остаток отпуска", description="Показывает остаток дней отпуска на дату", previewUrl="https://picsum.photos/seed/seed3/80/60")
  WidgetPreview(title="Быстрые ссылки", description="Кнопки с самыми частоиспользуемыми функциями", previewUrl="https://picsum.photos/seed/seed4/80/60")


div#trash trash2
div
//-   div(v-for="widget in widgets")
//-     WidgetComponent(:isDemo="true")
//-       component(:is="widget")
q-btn(@click='addWidget') Добавить виджет
section.grid-stack
  WidgetComponent(v-for="widget in widgets", 
                  :domId="widget.id",
                  @mounted.once="registerWidget")
    component(:is="widget.component")

</template>

<style lang="scss">
.grid-stack { background-color: $kedo-light-gray; }
.grid-stack-item-content { background-color: $kedo-white; }

</style>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue';
import { uid } from 'quasar';
import { GridStack, GridStackNode, GridStackWidget } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/h5/gridstack-dd-native';
import { useUser } from 'src/stores/user';
import WidgetComponent from './widgets/WidgetComponent.vue';
import MyActionableDocumentsWidget from './widgets/MyActionableDocumentsWidget.vue';
import TestWidget from './widgets/TestWidget.vue';
import WidgetPreview from './widgets/WidgetPreview.vue';


// grid instance for widget-like dashboard
let _grid: GridStack;
// user store
const _user = useUser();

// It holds all the widgets references inside a component
const widgets = shallowRef(new Array<IWidgetContainer>(0));

// We instantiate pure javascript gridstack after vuejs component mounted to DOM
onMounted(() => {
  _initGrid();
});

// Register a widget so the underlineing grid framework to know
// that smth happen inside his stack
function registerWidget(domId: string) {
  if (_grid) {
    const el = _grid.makeWidget(`#${domId}`);
  }
}


// Adds a widget to collection and allow vue engine to rebuild DOM appropriately
function addWidget() {
  const new_widget = {
    id: uid(),
    component: TestWidget
  };

  widgets.value = [...widgets.value, new_widget];
  console.log(widgets);
}

// initialize the grid with options
function _initGrid(): void {
  _grid = GridStack.init({
    removable: '#trash',
    acceptWidgets: true,
    dragIn: '.newWidget',
    dragInOptions: { revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone' },
  });

  // when widget removed from grid we must to destroy reference for it in widgets array
  // so the vuejs will can to collect it.
  _grid.on('removed', (el, items) => removeReferences(items as GridStackNode[]));  
}

function removeReferences(itemsToRemove: GridStackNode[]) {
  for (const item of itemsToRemove) {
    if (!item.id) throw new Error(`Can't remove widget reference. Id is not found`)
    
    widgets.value = widgets.value.filter(w => w.id !== item.id);
  }
}

// function loadLayout(): void {
//   const gridLayout = _user.getLayout() as GridStackWidget[];
//   if (gridLayout) {
//     try {
//       _grid.load(gridLayout);
//     }
//     catch(error) {
//       console.error('Получилась хуета!', error);
//       loadDefaultLayout();
//     }
//   }  
// }

// function loadDefaultLayout(): void {
//   const el = document.getElementById('asd');
//   const widget = _grid.makeWidget('#asd');
//   _grid.addWidget(widget);
//   // _grid.el.appendChild('<div id="gsi-1" gs-w="3"></div>');
  
//   // const widget = _grid.makeWidget("<MyActionableDocumentsWidget />");

//   // const el = document.createElement("div");
//   // el.innerText = "пизда!";
//   // const widget = _grid.makeWidget(el);
//   // _grid.addWidget(widget);
// }

// function saveLayout() {
//   const newLayout = _grid.save();
//   _user.setLayout(newLayout);
// }

interface IWidgetContainer {
  id: string,
  component: any
}

</script>

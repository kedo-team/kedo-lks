<template lang="pug">
section.grid-stack
  .grid-stack-item
    .grid-stack-item-content
      MyActionableDocumentsWidget
      
  .grid-stack-item
    .grid-stack-item-content
      MyActionableDocumentsWidget
</template>

<style lang="scss">
.grid-stack { background-color: $kedo-light-gray; }
.grid-stack-item-content { background-color: $kedo-white; }

</style>

<script lang="ts" setup>
import { h, onMounted, render } from 'vue';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/h5/gridstack-dd-native';
import MyActionableDocumentsWidget from './widgets/MyActionableDocumentsWidget.vue';

// grid instance for widget-like dashboard
let _grid: GridStack;

const myComponent = h(MyActionableDocumentsWidget);
console.log(myComponent);

onMounted(() => {
  _initGrid();

  // const vNode = h(MyActionableDocumentsWidget, {id: 'widget'});
  
  // render(vNode, _grid.el);
  // _grid.makeWidget('#widget');
  // // newWidget.appendChild(myComponent);
});

function _initGrid(): void {
  _grid = GridStack.init();
//   _grid.load([
//   {x: 0, y: 0, w: 2, h: 2},
//   {x: 2, y: 3, w: 3, content: 'item 2'},
//   {x: 1, y: 3}
// ]);
//   const newWidget = _grid.addWidget({w: 4, content: ''});  
}



</script>

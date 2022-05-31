<template lang="pug">
q-page
    .row.q-pa-md
      q-breadcrumbs.breadcrumbs(v-if="route.meta.title")
        q-breadcrumbs-el(label="Домой"
                        to="/"
                        icon="home")
        q-breadcrumbs-el(:label="(route.meta.title as string)"
                        icon="widgets")
    .row.q-pa-lg(v-if="route.meta.title")
      .text-h2.q-pb-lg {{ route.meta.title }}
      .text-h6(v-if="route.meta.description") {{ route.meta.description }}
    router-view
</template>

<style scoped lang="scss">
.page-container {
  background-color:  $kedo-light-gray;
}
.breadcrumbs {
  color: $kedo-dark-background-text;
}
</style>

<script setup lang="ts">

import { useRoute } from 'vue-router';
const route = useRoute();

</script>
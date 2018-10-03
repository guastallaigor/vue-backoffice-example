<template lang="pug">
  v-navigation-drawer.main-sidebar(
    app
    fixed
    persistent
    v-model="onDrawerProp"
    )
    v-layout.mt-3(column align-center justify-center)
      img(
        src="@/assets/logo-icon-vue.png"
        height="130"
        )
    v-list.transparent
      v-list-tile(
        v-for="(item, index) in sideBarRoutes"
        :key="index"
        :to="item.path"
        active-class="active"
        )
        v-list-tile-action
          v-icon(v-html="item.icon")
        v-list-tile-content
          v-list-tile-title.font-toolbar(v-text="item.title")
</template>

<script>
import routes from '@/router/routes';

export default {
  props: {
    drawer: Boolean,
  },
  computed: {
    onDrawerProp: {
      get() {
        return this.drawer;
      },
      set(newValue) {
        this.$emit('update:drawer', newValue);
      },
    },
    sideBarRoutes() {
      return routes
        .filter(route => route.meta.sidebar)
        .map(route => ({
          path: route.path,
          icon: route.meta.icon,
          title: route.meta.title,
        }));
    },
  },
  name: 'Sidebar',
};
</script>

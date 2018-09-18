<template lang="pug">
  #layout
    toolbar(:drawer.sync="drawer")
    sidebar(:drawer.sync="drawer")
    v-content
      v-container.mt-container(fluid)
        v-slide-y-transition(mode="out-in")
          router-view
</template>

<script>
import Sidebar from './Sidebar.vue';
import Toolbar from './Toolbar.vue';

export default {
  components: {
    Sidebar,
    Toolbar,
  },
  data: () => ({
    drawer: true,
  }),
  name: 'Layout',
};
</script>

<style lang="sass">
.mt-container
  margin-top: 5.8rem

.pointer
  cursor: pointer
</style>

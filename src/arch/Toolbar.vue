<template lang="pug">
  v-toolbar.main-toolbar(app flat dark fixed color="secondary")
    v-toolbar-side-icon(dark @click="changeDrawer")
    v-spacer
    v-toolbar-items
      v-menu(
        offset-y
        open-on-click
        :nudge-left="25"
        data-app="true"
        )
        v-list-tile.pt-2(slot="activator")
          v-list-tile-content.ma-2.ml-3
            v-list-tile-title.white--text {{ user }}
          v-list-tile-action
            v-btn.btn-view-list(icon flat dark)
              v-icon view_list
        v-list        
          v-list-tile(@click="logout")
            v-list-tile-content.ma-2.ml-3
              v-list-tile-title
                v-layout(row align-center)
                  v-icon.pr-3 input
                  span Logout
</template>

<script>
import LoginService from '@/services/LoginService';

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
    user() {
      return LoginService.obterNomeUsuario();
    },
  },
  methods: {
    logout() {
      LoginService.logout();
      this.$router.push('/login');
    },
    changeDrawer() {
      this.onDrawerProp = !this.onDrawerProp;
    },
  },
  name: 'Toolbar',
};
</script>

<style lang="sass">
.main-toolbar
  .btn-view-list
    width: 40px
    height: 40px
</style>

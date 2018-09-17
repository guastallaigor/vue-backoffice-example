<template lang="pug">
  .page.card--flex-toolbar
    v-card(raised)
      v-toolbar(card prominent v-if="hasTitleOrIcon")
        v-toolbar-title
          v-layout(row align-center)
            v-tooltip(bottom v-if="isIconBackspace")
              v-btn(flat icon @click="goBack" slot="activator")
                v-icon(small) {{ icon }}
              span Return
            v-btn(v-else flat icon)
              v-icon {{ icon }}
            .ml-3 {{ title }}
        v-spacer
        slot(name="button-bar")
      v-divider
      v-card-text
        slot
</template>

<script>
export default {
  computed: {
    title() {
      const route = this.$route;
      return route.meta.title;
    },
    icon() {
      const route = this.$route;
      return route.meta.icon;
    },
    routerBack() {
      const { meta, params } = this.$route;
      const { routerBack } = meta;

      if (routerBack.includes(':id')) {
        return routerBack.replace(':id', params.id);
      }

      return routerBack;
    },
    isIconBackspace() {
      return this.icon === 'keyboard_backspace';
    },
    hasTitleOrIcon() {
      return this.title || this.icon;
    },
  },
  methods: {
    goBack() {
      this.$router.push(this.routerBack);
    },
  },
  name: 'Page',
};
</script>

<style lang="sass">
.card--flex-toolbar
  margin-top: -80px
  position: relative
  z-index: 2
</style>

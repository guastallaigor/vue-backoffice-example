export default {
  computed: {
    routerBack() {
      return this.$route.meta.routerBack;
    },
    id() {
      return this.$route.params.id;
    },
  },
};

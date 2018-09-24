import EventBus from '@/core/event-bus';

export default {
  methods: {
    success(msg) {
      EventBus.$emit('snackbar', { active: true, color: 'success', msg });
      this.$router.push(this.routerBack);
    },
    error(error) {
      let msg = '';

      Object.values(error.response.data.errors).forEach((it) => {
        Object.values(it).forEach((mm) => {
          msg += `${mm} \n`;
        });
      });

      EventBus.$emit('snackbar', { active: true, color: 'error', msg });
    },
  },
};

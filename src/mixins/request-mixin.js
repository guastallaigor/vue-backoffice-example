import EventBus from '@/core/event-bus';

export default {
  methods: {
    success(msg) {
      EventBus.$emit('snackbar', { active: true, color: 'success', msg });
      this.$router.push(this.routerBack);
    },
    error(msg) {
      EventBus.$emit('snackbar', { active: true, color: 'error', msg });
    },
  },
};

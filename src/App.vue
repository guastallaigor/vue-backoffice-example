<template lang="pug">
  v-app#app
    v-fade-transition(mode="out-in")
      router-view
    v-snackbar(
      :timeout="timeout"
      :color="color"
      top
      right
      v-model="snackbar"
      )
      span {{ msg }}
      v-btn(dark flat @click.native="closeSnackbar")
        v-icon close
</template>

<script>
import EventBus from '@/core/event-bus';

export default {
  data: () => ({
    snackbar: false,
    color: '',
    msg: '',
    timeout: 6000,
  }),
  created() {
    EventBus.$on('snackbar', ({ active = true, color = 'info', msg = 'Message undefined.' }) => {
      this.snackbar = active;
      this.color = color;
      this.msg = msg;
    });
    EventBus.$on('logout', () => {
      localStorage.clear();
      this.$router.push('/login');
    });
  },
  beforeDestroy() {
    EventBus.$off('snackbar');
    EventBus.$off('logout');
  },
  methods: {
    closeSnackbar() {
      this.snackbar = false;
    },
  },
  name: 'App',
};
</script>

<style lang="sass" src="@/assets/styles/app.sass"></style>

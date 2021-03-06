<template lang="pug">
  v-form.login(@submit.prevent="login" ref="form")
    v-layout(column wrap align-center justify-center)
      v-flex.fundo-login(xs12)
      v-flex.login-position(xs12)
        img.logo-login(src="@/assets/logo-icon-vue.png")
        .rest.text-xs-center
          .headline.grey--text.text--darken-1 Vue Backoffice Example
          v-card.mt-2.login-card
            v-card-text
              v-text-field#email(
                required
                label="E-mail"
                v-model="payload.login"
                :rules="inputEmail"
                )
              v-text-field#password(
                required
                label="Password"
                v-model="payload.password"
                :type="passwordFieldType"
                :append-icon="passwordFieldIcon"
                @click:append="togglePasswordVisibility"
                :rules="inputPassword"
                )
              v-btn(
                dark
                block
                small
                color="primary"
                type="submit"
                ) Login
</template>

<script>
import LoginService from '@/services/LoginService';
import RequestMixin from '@/mixins/request-mixin';
import EventBus from '@/core/event-bus';

export default {
  mixins: [RequestMixin],
  data: () => ({
    payload: {
      login: '',
      password: '',
    },
    passwordVisible: false,
    isPasswordHide: true,
    inputPassword: [v => !!v || 'Password is required'],
    inputEmail: [v => !!v || 'E-mail is required'],
  }),
  computed: {
    passwordFieldType() {
      return this.isPasswordHide ? 'password' : 'text';
    },
    passwordFieldIcon() {
      return this.isPasswordHide ? 'visibility' : 'visibility_off';
    },
  },
  methods: {
    login() {
      if (!this.$refs.form.validate()) return;

      LoginService
        .login(this.payload)
        .then(({ data }) => {
          LoginService.salvarUser(this.payload.login);
          LoginService.salvarToken(data.token);
          this.$router.replace('/employee');
        })
        .catch((err) => {
          const { error } = err.response.data;

          if (error === 'invalid_credentials') {
            EventBus.$emit('snackbar', { active: true, color: 'error', msg: 'Invalid credentials' });
            return;
          }

          if (error === 'inactive') {
            EventBus.$emit('snackbar', { active: true, color: 'error', msg: 'Inactive user' });
            return;
          }

          EventBus.$emit('snackbar', { active: true, color: 'error', msg: error });
        });
    },
    togglePasswordVisibility() {
      this.isPasswordHide = !this.isPasswordHide;
    },
  },
};
</script>

<style lang="sass">
.login-position
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.fundo-login
  position: absolute
  top: 0
  right: 0
  left: 0
  z-index: 0
  bottom: 50vh
  background: #ffffff

.logo-login
  width: 100%
  margin-top: -284px

.login-card
  width: 22rem

.rest
  margin-top: -25px
</style>

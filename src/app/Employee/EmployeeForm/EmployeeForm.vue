<template lang="pug">
  forms(
    :service="EmployeeService"
    :payload="payload"
    )
    template(slot="form-inputs")
      v-container(grid-list-md)
        v-layout(row wrap)
            v-flex(xs12)
              h3.my-2.grey--text.text--lighten-1
                v-icon.mr-2.grey--text.text--lighten-1 person
                | EMPLOYEE INFORMATION
            v-flex(xs12 md6)
              v-text-field(
                label="Full name"
                v-model="payload.fullName"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md6)
              v-text-field(
                label="Brazillian Individual Registration"
                mask="###.###.###-##"
                v-model="payload.brCpf"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md6)
              v-text-field(
                label="E-mail"
                v-model="payload.email"
                :rules="emailRules"
                required
                )
            v-flex(xs12 md3)
              v-select(
                label="Telephone type"
                v-model="payload.telephoneType"
                :items="telephoneTypes"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md3)
              v-text-field(
                mask="(##) #####-####"
                label="Telephone number"
                v-model="payload.telephone"
                return-masked-value
                :rules="requiredRules"
                required
                )
            v-flex(xs12)
              h3.my-2.grey--text.text--lighten-1
                v-icon.mr-2.grey--text.text--lighten-1 home
                | ADDRESS
            v-flex(xs12 md4)
              v-text-field(
                label="Zipcode"
                v-model="payload.zipCode"
                mask="#####-###"
                :rules="requiredRules"
                required
                )
            v-flex(xs4)
              v-text-field(
                label="City"
                v-model="payload.city"
                :rules="requiredRules"
                required
                )
            v-flex(xs4)
              v-text-field(
                label="State"
                v-model="payload.state"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md6)
              v-text-field(
                label="Avenues"
                v-model="payload.avenue"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md2)
              v-text-field(
                label="Number"
                v-model="payload.number"
                type="number"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md2)
              v-text-field(
                label="Complement"
                v-model="payload.complement"
                :rules="requiredRules"
                required
                )
            v-flex(xs12 md2)
              v-text-field(
                label="Neighborhood"
                v-model="payload.neighborhood"
                :rules="requiredRules"
                required
                )
            v-flex(xs12)
              h3.my-2.grey--text.text--lighten-1
                v-icon.mr-2.grey--text.text--lighten-1 security
                | PASSWORD
            v-flex(xs12 md6)
              v-text-field(
                v-model="payload.password"
                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                @click:append="() => (show1 = !show1)"
                :rules="requiredRules"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                required
                label="Password"
                hint="At least 8 characters"
                counter="25"
                min="8"
                )
            v-flex(xs12 md6)
              v-text-field(
                v-model="payload.password_confirmation"
                :append-icon="show2 ? 'visibility_off' : 'visibility'"
                @click:append="() => (show2 = !show2)"
                :rules="requiredRules"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                required
                label="Confirm password"
                hint="At least 8 characters"
                counter="25"
                min="8"
                )
</template>

<script>
import Forms from '@/components/Form.vue';
import EmployeeService from '@/services/EmployeeService';
import RouterMixin from '@/mixins/router-mixin';
import { telephoneTypes } from '@/assets/telephone-types.json';

export default {
  components: {
    Forms,
  },
  data: () => ({
    EmployeeService,
    telephoneTypes,
    payload: {
      fullName: '',
      cpf: '',
      email: '',
      telephoneType: '',
      telephone: '',
      zipCode: '',
      city: '',
      state: '',
      avenue: '',
      number: '',
      neighborhood: '',
      complement: '',
      password: '',
      password_confirmation: '',
    },
    show1: false,
    show2: false,
    loading: false,
    emailRules: [
      v => !!v || 'This field is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
    requiredRules: [
      v => !!v || 'This field is required',
    ],
  }),
  mixin: [RouterMixin],
  created() {
    if (this.id) {
      this.getEmployee();
    }
  },
  methods: {
    getEmployee() {
      this.loading = true;

      EmployeeService
        .get(this.id)
        .then(({ data }) => {
          this.payload = data;
          this.loading = false;
        });
    },
  },
};
</script>

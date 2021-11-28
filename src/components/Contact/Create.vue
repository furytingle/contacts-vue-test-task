<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3">
        <Form :validation-schema="schema">
          <div class="form-group">
            <label for="name">Name</label>
            <Field name="name" type="text" class="form-control" />
            <ErrorMessage name="name" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="text" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>

          <div class="form-group mt-md-3">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </button>
          </div>

        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "ContactCreate",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().required('Email is required').email()
    })

    return {
      loading: false,
      message: "",
      schema
    }
  }
}
</script>
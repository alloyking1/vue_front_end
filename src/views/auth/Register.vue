<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h1 class="text-center">Create an account</h1>
          <div class="card shadow">
            <div class="card-body">
              <!-- for starts here -->
              <form @submit.prevent="validate">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >User Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="Enter user name"
                    v-model="form.userName"
                  />
                  <div class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="form.email"
                  />
                  <div class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    v-model="form.password"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    v-model="form.confirmPassword"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <div class="danger" v-if="errors.length">
                  <div v-for="error in errors" :key="error.key">
                    {{ error }}
                  </div>
                </div>
              </form>
              <!-- for ends here -->
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      form: {},
    };
  },

  methods: {
    validate() {
      this.errors = [];
      if (
        this.form.email &&
        this.form.password &&
        this.form.userName &&
        this.form.confirmPassword
      ) {
        if (this.form.password === this.form.confirmPassword) {
          this.userRegister(this.form);
        } else {
          this.errors.push("password do not match");
        }
      } else {
        this.errors.push("All fields are required");
      }
    },

    async userRegister(form) {
      form = {
        username: form.userName,
        email: form.email,
        password: form.password,
      };

      try {
        await this.$store.dispatch("userRegisterAction", form);
        this.$router.push("/merchant/all");
      } catch (error) {
        this.errors.push(error.message);
      }
    },
  },
};
</script>

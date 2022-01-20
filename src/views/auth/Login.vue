<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h1 class="text-center">Login in</h1>
          <div class="card shadow">
            <div class="card-body">
              <!-- for starts here -->
              <form @submit.prevent="validate">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="Form.email"
                  />
                  <div id="emailHelp" class="form-text">
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
                    id="exampleInputPassword1"
                    v-model="Form.password"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    v-model="Form.passwordVerify"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div>
                <button class="btn btn-primary">Submit</button>
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
      Form: {},
    };
  },

  methods: {
    async validate() {
      this.errors = [];
      if (this.Form.email && this.Form.password) {
        await this.userLogin(this.Form);
      } else {
        this.errors.push("all filds are required");
      }
    },

    async userLogin(data) {
      data = {
        identifier: data.email,
        password: data.password,
      };

      try {
        const apiCall = await this.$store.dispatch("userLoginAction", data);
        this.$cookie.set("login", apiCall.data.jwt, 1);
        window.location.replace("/merchant/all");
      } catch (error) {
        this.errors.push("Invalid login details");
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h1 class="text-center P-5">Update Password</h1>
        <P class="text-center"
          >A password reset link will be sent to your email.</P
        >
        <div class="card shadow">
          <div class="card-body">
            <div
              class="alert alert-success"
              role="alert"
              v-if="success"
              @click="
                {
                  {
                    success = false;
                  }
                }
              "
            >
              Profile updated!
            </div>
            <!-- for starts here -->
            <form @submit.prevent="validate">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Enter password</label
                >
                <input
                  type="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="data.password"
                />
                <label for="exampleInputEmail1" class="form-label"
                  >COnfirm password</label
                >
                <input
                  type="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="data.passwordConfirmation"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Reset password
              </button>

              <div class="container" v-for="(each, i) in errors" :key="i">
                {{ each }}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      errors: [],
      success: false,
    };
  },

  methods: {
    validate() {
      if (this.data.password || this.data.passwordConfirmation) {
        if (this.data.password != this.data.passwordConfirmation) {
          this.errors.push("password must match");
          return;
        }
        this.data.code = this.$route.query.code;
        this.$store.dispatch("passwordResetRequest", this.data);
        this.$route.push("/merchant");
      } else {
        this.errors.push("All fields are required");
      }
    },
  },
};
</script>

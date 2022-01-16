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
                  >Enter email</label
                >
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="data.email"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Request Link
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
      if (this.email === "") {
        this.errors.push("Email field cannot be empty");
        return false;
      }

      try {
        this.$store.dispatch("passwordUpdateRequest", this.data);
        this.success = true;
      } catch (error) {
        this.errors.push(error.message);
      }
    },
  },
};
</script>

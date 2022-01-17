<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h1 class="text-center P-5">My Account</h1>
        <P class="text-center">Up date user profile</P>
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
                  >Update Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="data.email"
                />

                <label>Update Name</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="data.username"
                />

                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Update Profile
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
      if (this.data.email || this.data.username) {
        try {
          this.$store.dispatch("updateUserProfileByIdAction", this.data);
          this.success = true;
        } catch (error) {
          this.errors.push(error.message);
        }
      } else {
        this.errors.push("Both fields cannot be empty");
        return false;
      }
    },
  },
};
</script>

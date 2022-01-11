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
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="email"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>

              <div class="container" v-for="(each, i) in errors" :key="i">
                {{ each }}
              </div>
            </form>
            <!-- for ends here -->
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
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
      const id = this.$store.state.user.id;
      this.updateUser(this.email, id);
    },
    async updateUser(data, id) {
      const headers = {
        Authorization: `Bearer ${this.$cookie.get("login")}`,
      };

      await axios
        .put(
          `http://localhost:1337/api/users/${id}`,
          { email: data },
          { headers }
        )
        .then((res) => {
          console.log(res);
          this.success = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
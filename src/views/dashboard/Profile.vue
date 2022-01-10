<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h1 class="text-center P-5">My Account</h1>
        <P class="text-center">Up date user profile</P>
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
    };
  },

  methods: {
    validate() {
      const headers = {
        Authorization: `Bearer ${this.$cookie.get("login")}`,
      };
      const test = axios
        .get(`http://localhost:1337/api/users/me?populate=*`, {
          headers,
        })
        .then((res) => {
          res;
        });
      console.log(test);

      if (this.email === "") {
        this.errors.push("Email field cannot be empty");
        return false;
      }
      // const id = this.$store.state.user.id;
      //   const id = 3;
      // this.updateUser(this.email, id);
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
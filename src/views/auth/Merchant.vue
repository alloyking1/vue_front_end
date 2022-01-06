<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h1 class="text-center">Create Merchant Account</h1>
          <div class="card shadow">
            <div class="card-body">
              <!-- for starts here -->
              <form @submit.prevent="validate">
                <div class="mb-3">
                  <label for="merchantName" class="form-label"
                    >Name of the merchant</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="merchangName"
                    aria-describedby="emailHelp"
                    v-model="data.Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Hours of operations: Monday through Sunday</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="data.Operation"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Country</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="data.Country"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Region</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.Region"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Phone Number</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.Phone"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.Email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Address</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.Address"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Building</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.Building"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >City</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.City"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >State</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.State"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Zipcode</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="exampleCheck1"
                    v-model="data.Zipcode"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Image</label
                  >
                  <input type="file" class="form-control" id="exampleCheck1" />
                </div>
                <button class="btn btn-primary">Submit</button>
              </form>
              <!-- for ends here -->
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h1 class="text-center">My Account</h1>
          <div class="card shadow">
            <div class="card-body">
              <!-- for starts here -->
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <!-- for ends here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error: [],
      data: {},
    };
  },

  methods: {
    validate() {
      // validate later
      this.data.user = this.$store.state.user.id;
      console.log(this.data);
      this.createMerchant(this.data);
    },

    async createMerchant(data) {
      const headers = {
        Authorization: `Bearer ${this.$cookie.get("login")}`,
      };

      await axios
        .post(
          "http://localhost:1337/api/merchants",
          { data: data },
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
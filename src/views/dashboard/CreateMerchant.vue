<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-7 p-5">
          <div class="p-5 text-center">
            <h1 class="">Create a New Merchant Account</h1>
            <p>
              You can creaet more than one Merchant account. Use the form below
              to create your Merchant accounts
            </p>
          </div>
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
                    aria-describedby="emailHelp"
                    v-model="data.Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Days of operation: Monday through Sunday</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="data.Operation"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Hours of operation: Start time</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    v-model="data.OperationStartTime"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Hours of operation: End time</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    v-model="data.OperationEndTime"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Country</label
                  >
                  <input
                    type="text"
                    class="form-control"
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
                    v-model="data.Building"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >City</label
                  >
                  <input type="text" class="form-control" v-model="data.City" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >State</label
                  >
                  <input
                    type="text"
                    class="form-control"
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
                    v-model="data.Zipcode"
                  />
                </div>
                <div class="custom-control custom-switch pt-3 pb-3">
                  <input type="checkbox" id="checkbox" v-model="checked" />
                  <div v-if="checked">
                    <label for="checkbox">{{ "Publish content" }}</label>
                  </div>
                  <div v-if="!checked">
                    <label for="checkbox">{{ "Set as draft" }}</label>
                  </div>
                </div>

                <button class="btn btn-primary">Submit</button>
              </form>
              <!-- for ends here -->
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
                Merchant account created!
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: [],
      data: {},
      checked: null,
      success: false,
    };
  },

  methods: {
    validate() {
      this.data.users_permissions_user = this.$store.state.user.id;
      if (this.checked === true) {
        this.data.publishedAt = new Date(2018, 11, 24, 10, 33);
      } else {
        this.data.publishedAt = null;
      }
      this.createMerchant(this.data);
    },

    async createMerchant(data) {
      try {
        const res = await this.$store.dispatch("createNewMerchantAction", {
          data: data,
        });
        this.data = res.data.data.attributes;
        this.success = true;
        this.$router.push("/merchant/all");
      } catch (error) {
        console.log(error);
        this.errors.push(error.message);
      }
    },
  },
};
</script>


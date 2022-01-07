<template>
  <div class="container pt-5">
    <div class="card shadow">
      <div class="p-5">
        <h1>Search Merchant using Zip Code</h1>
      </div>
      <div class="p-5">
        <form @submit.prevent="search">
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="searchInput"
            />
          </div>
          <div class="form-group pt-5">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Search
            </button>
          </div>

          <div v-for="(error, i) in errors" :key="i">
            {{ error }}
          </div>
        </form>
      </div>
    </div>

    <div class="card shadow pt-5 mt-5 mb-5" v-if="showResult">
      <div class="container">
        <h2>Search result</h2>
      </div>
      <div v-if="result.status == 404">
        <h1>No Merchant founf for zip code</h1>
      </div>
      <div v-else>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Mercant ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Hours of operations</th>
              <th scope="col">Country</th>
              <th scope="col">Region</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(each, i) in result.data" :key="i">
              <th scope="row">{{ each.id }}</th>
              <td>{{ each.Name }}</td>
              <td>{{ each.Address }}</td>
              <td>{{ each.Operation }}</td>
              <td>{{ each.Country }}</td>
              <td>{{ each.Region }}</td>
              <td>{{ each.Phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- should be a diff component -->
    <div class="card shadow mt-5 mb-5" v-if="showResult == false">
      <div class="container">
        <h2>All Merchant list</h2>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mercant ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Hours of operations</th>
            <th scope="col">Country</th>
            <th scope="col">Region</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eachMerchant, i) in allResult" :key="i">
            <th scope="row">{{ eachMerchant.id }}</th>
            <td>{{ eachMerchant.attributes.Name }}</td>
            <td>{{ eachMerchant.attributes.Address }}</td>
            <td>{{ eachMerchant.attributes.Operation }}</td>
            <td>{{ eachMerchant.attributes.Country }}</td>
            <td>{{ eachMerchant.attributes.Region }}</td>
            <td>{{ eachMerchant.attributes.Phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- </div>
  </div> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      errors: [],
      showResult: false,
      showAll: false,
      allResult: {},
      result: {},
      searchInput: "",
    };
  },

  mounted() {
    this.allMerchantCall();
  },

  methods: {
    async search() {
      if (!this.searchInput) {
        this.errors.push("search field is empty");
        return;
      }
      await this.searchCall(this.searchInput);
      console.log(this.result.status);
    },

    async searchCall(data) {
      const headers = {
        Authorization: `Bearer ${this.$cookie.get("login")}`,
      };

      await axios
        .post(
          "http://localhost:1337/api/search/merchant",
          { data: data },
          { headers }
        )
        .then((res) => {
          this.showResult = true;
          this.result = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async allMerchantCall() {
      const headers = {
        Authorization: `Bearer ${this.$cookie.get("login")}`,
      };

      await axios
        .get("http://localhost:1337/api/merchants", { headers })
        .then((res) => {
          this.showAll = true;
          this.allResult = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
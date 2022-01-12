<template>
  <div class="container pt-5">
    <div class="card shadow">
      <div class="p-5">
        <h1>Search Merchant using Zip Code</h1>
      </div>
      <div class="p-5">
        <div class="form-group">
          <input
            @keyup="search"
            type="number"
            class="form-control"
            aria-describedby="emailHelp"
            v-model="searchInput"
          />
        </div>

        <div class="mt-2" v-for="(error, i) in errors" :key="i">
          {{ error }}
        </div>
      </div>
    </div>

    <div class="card shadow pt-5 mt-5 mb-5" v-if="searchInput != ''">
      <div class="container">
        <h2>Search result</h2>
      </div>
      <div v-if="result.status == 404">
        <div class="container">
          <h1>No Merchant found for zip code</h1>
        </div>
      </div>
      <div v-else>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Mercant ID</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Days of operations</th>
              <th scope="col">Start time</th>
              <th scope="col">Close time</th>
              <th scope="col">Country</th>
              <th scope="col">Region</th>
              <th scope="col">Phone Number</th>
              <th scope="col">created at</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(each, i) in result.data" :key="i">
              <th scope="row">{{ each.id }}</th>
              <td>{{ each.Email }}</td>
              <td>{{ each.Address }}</td>
              <td>{{ each.Operation }}</td>
              <td>{{ each.OperationStartTime }}</td>
              <td>{{ each.OperationEndTime }}</td>
              <td>{{ each.Country }}</td>
              <td>{{ each.Region }}</td>
              <td>{{ each.Phone }}</td>
              <td>{{ each.createdAt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- should be a diff component -->
    <div class="card shadow mt-5 mb-5" v-if="searchInput == ''">
      <div class="container">
        <h2>All Merchant list</h2>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mercant ID</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Days of operations</th>
            <th scope="col">Start time</th>
            <th scope="col">Close time</th>
            <th scope="col">Country</th>
            <th scope="col">Region</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Joined date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eachMerchant, i) in allResult" :key="i">
            <th scope="row">{{ eachMerchant.id }}</th>
            <td>{{ eachMerchant.attributes.Email }}</td>
            <td>{{ eachMerchant.attributes.Address }}</td>
            <td>{{ eachMerchant.attributes.Operation }}</td>
            <td>{{ eachMerchant.attributes.OperationStartTime }}</td>
            <td>{{ eachMerchant.attributes.OperationEndTime }}</td>
            <td>{{ eachMerchant.attributes.Country }}</td>
            <td>{{ eachMerchant.attributes.Region }}</td>
            <td>{{ eachMerchant.attributes.Phone }}</td>
            <td>{{ eachMerchant.attributes.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      allResult: {},
      result: {},
      searchInput: "",
    };
  },

  async mounted() {
    await this.fetchAllMerchantCall();
  },

  methods: {
    async search() {
      if (!this.searchInput) {
        this.errors.push("Enter a zipcode to search");
        return;
      }
      await this.searchCall(this.searchInput);
    },

    async searchCall(data) {
      try {
        const res = await this.$store.dispatch("searchMerchantAction", {
          data: data,
        });
        this.result = res.data;
      } catch (error) {
        this.errors.push(error.message);
      }
    },

    async fetchAllMerchantCall() {
      try {
        const res = await this.$store.dispatch("getAllMerchantAction");
        this.allResult = res.data.data;
      } catch (error) {
        this.errors.push(error.message);
      }
    },
  },
};
</script>
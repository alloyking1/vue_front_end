<template>
  <div>
    <div class="container">
      <div class="p-5 text-center">
        <h1 class="">All merchants belonging to user</h1>
        <p>You can update your merchant details from the list below</p>
        <div class="container">
          <router-link to="/merchant/create" class="btn btn-primary"
            >Add Merchant</router-link
          >
        </div>
      </div>
      <hr />

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mercant ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Days of operations</th>
            <th scope="col">Start time</th>
            <th scope="col">Close time</th>
            <th scope="col">Country</th>
            <th scope="col">Region</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Joined date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody v-for="(merchant, i) in data" :key="i">
          <tr>
            <th scope="row">{{ merchant.id }}</th>
            <td>{{ merchant.Name }}</td>
            <td>{{ merchant.Email }}</td>
            <td>{{ merchant.Address }}</td>
            <td>{{ merchant.Operation }}</td>
            <td>{{ merchant.OperationStartTime }}</td>
            <td>{{ merchant.OperationEndTime }}</td>
            <td>{{ merchant.Country }}</td>
            <td>{{ merchant.Region }}</td>
            <td>{{ merchant.Phone }}</td>
            <td>{{ merchant.createdAt }}</td>
            <td>
              <router-link
                :to="{ path: '/merchant/update/' + merchant.id }"
                class="btn btn-primary"
                >update</router-link
              >
            </td>
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
      data: null,
    };
  },
  async mounted() {
    await this.merchants();
  },

  methods: {
    async merchants() {
      try {
        const res = await this.$store.dispatch("getUserMerchant");
        this.data = res.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
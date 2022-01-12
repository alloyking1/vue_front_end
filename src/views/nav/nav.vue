<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="nav-link">Logo</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav" v-if="!loginCheck">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link"
                >Register</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav" v-if="loginCheck">
            <li class="nav-item">
              <router-link to="/merchant" class="nav-link"
                >Update Merchant</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link to="/merchant/search" class="nav-link"
                >Search Merchant</router-link
              >
            </li> -->
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logOut">log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loginCheck() {
      return this.$store.state.isLoggedIn;
    },
  },

  methods: {
    logOut() {
      this.$cookie.delete("login");
      this.$store.replaceState({});
      this.$store.commit("isLoggedInMutation", false);

      this.$router.push("/login");
    },
  },
};
</script>
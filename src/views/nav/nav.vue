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
          <ul class="navbar-nav" v-if="!isLoggedIn">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link"
                >Register</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav" v-if="isLoggedIn">
            <li class="nav-item">
              <router-link to="/merchant" class="nav-link"
                >Add Merchant</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/merchant/search" class="nav-link"
                >Search Merchant</router-link
              >
            </li>
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
  data() {
    return {
      isLoggedIn: false,
    };
  },

  created() {
    if (this.$cookie.get("login")) {
      this.isLoggedIn = true;
    }
  },

  methods: {
    logOut() {
      this.$cookie.delete("login");
      this.isLoggedIn = false;

      console.log("this is when i got loaded");
      this.$router.push("/login");
    },
  },
};
</script>
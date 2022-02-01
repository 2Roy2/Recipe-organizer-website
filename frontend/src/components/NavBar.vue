<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #7cd9a3"
    >
      <div class="container-fluid">
        <a class="navbar-brand m-3">
          <h5>{{ username }}</h5>
        </a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <button
                @click="changeShowLogin"
                v-if="!connected"
                type="button"
                class="btn btn-outline-light ms-3 me-3"
              >
                login
              </button>
            </li>
            <li class="nav-item">
              <button
                @click="logoutAttempt"
                type="button"
                v-if="connected"
                class="btn btn-outline-light ms-3 me-3"
              >
                logout
              </button>
            </li>
            <li class="nav-item">
              <button
                @click="changeShowRegister"
                v-if="!connected"
                type="button"
                class="btn btn-outline-light ms-3 me-5"
              >
                register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <login
      @loginAttempt="loginAttempt"
      v-if="!connected"
      v-show="showLogin"
      :loginStatus="loginStatus"
    />
    <register
      @registerAttempt="registerAttempt"
      v-if="!connected"
      v-show="showRegister"
      :registerStatus="registerStatus"
    />
  </div>
</template>

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";

export default {
  name: "NavBar",
  components: {
    Login,
    Register,
  },
  props: ["connected", "username", "loginStatus", "registerStatus"],
  data() {
    return {
      showLogin: true,
      showRegister: false,
    };
  },
  methods: {
    changeShowLogin() {
      if (this.showRegister) this.showRegister = false;

      this.showLogin = true;
    },
    changeShowRegister() {
      if (this.showLogin) this.showLogin = false;

      this.showRegister = true;
    },
    loginAttempt(data) {
      this.$emit("loginAttempt", data);
    },
    logoutAttempt() {
      this.$emit("logoutAttempt");
    },
    registerAttempt(data) {
      this.$emit("registerAttempt", data);
    },
  },
};
</script>

<style scoped>
</style>
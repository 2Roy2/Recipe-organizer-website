<template>
  <NavBar @loginAttempt="getToken" :connected="authToken !== null" />
</template>

<script>
import axios from "axios";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      authToken: null,
      recipes: null,
    };
  },
  methods: {
    async getToken(data) {
      await axios
        .post("http://localhost:5000/api/login", {
          name: data.username,
          password: data.password,
        })
        .then((response) => {
          console.log(response);
          if (response.err) return;
          this.authToken = response.accessToken;
        })
        .catch((error) => {
          if (!error.response) {
            // network error
            this.errorStatus = "Error: Network Error";
          } else {
            this.errorStatus = error.response.data.message;
          }
        });
    },
  },
};
</script>

<style>
</style>

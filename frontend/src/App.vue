<template>
  <div>
    <div>
      <NavBar
        @logoutAttempt="logoutProtocol"
        @loginAttempt="loginProtocol"
        @registerAttempt="registerProtocol"
        :username="username"
        :connected="authToken !== null"
        :loginStatus="loginStatus"
        :registerStatus="registerStatus"
      />
    </div>
    <div class="row mt-4">
      <AddRecipe
        @addRecipeAttempt="addRecipeProtocol"
        v-if="authToken !== null"
      />
      <ViewRecipes v-if="authToken !== null" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavBar from "./components/NavBar.vue";
import AddRecipe from "./components/AddRecipe.vue";
import ViewRecipes from "./components/VIewRecipes.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AddRecipe,
    ViewRecipes,
  },
  data() {
    return {
      loginStatus: "",
      registerStatus: "",
      authToken: null,
      username: "Recipe organiser",
      recipes: null,
    };
  },
  methods: {
    async loginProtocol(data) {
      await axios
        .post("http://localhost:5000/api/login", {
          name: data.username,
          password: data.password,
        })
        .then((response) => {
          this.authToken = response.data.accessToken;
        })
        .catch((error) => {
          this.loginStatus = "incorrect name or password";
          return error;
        });

      await axios
        .get("http://localhost:5000/api/user", {
          headers: {
            Authorization: "Bearer " + this.authToken,
          },
        })
        .then((response) => {
          if (response.data.err) return;
          this.username = response.data.name;
          this.recipes = response.data.recipes;
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

    async logoutProtocol() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },

    async registerProtocol(data) {
      await axios
        .post("http://localhost:5000/api/register", {
          name: data.username,
          password: data.password,
        })
        .then((response) => {
          this.registerStatus = "registerd";
          return response;
        })
        .catch((error) => {
          this.registerStatus = "ERROR";
          return error;
        });
    },
    async addRecipeProtocol(data) {
      await axios
      .post(
        "http://localhost:5000/api/user/recipe",
        {
          name: data.name,
          description: {
            ingredients: data.description.ingredients,
            instructions: data.description.instructions,
          },
        },
        {
          headers: {
            Authorization: "Bearer " + this.authToken,
          },
        }
      );
    },
  },
};
</script>

<style>
body {
  background-color: #ebf2ef;
}
</style>

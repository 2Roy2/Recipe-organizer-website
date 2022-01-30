<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #40c965"
  >
    <div class="container-fluid">
      <a class="navbar-brand m-3">Recipe organiser</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button type="button" class="btn btn-outline-light ms-3 me-3">
              login
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-light ms-3 me-3">
              logout
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-light ms-3 me-5">
              register
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <login></login>
</template>

<script>
import Login from "./Login.vue";

export default {
  name: "NavBar",
  components: {
    Login,
  },
};
</script>

<style scoped>
</style>
<template>
  <div class="container border mt-4 w-25">
    <div class="mb-3 mt-3">
      <label for="username" class="form-label">username</label>
      <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="mb-5">
      <label for="password" class="form-label">password</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button @click="onClick" type="button " class="btn btn-success">register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
      return{
          username:'',
          password:''
      }
  },
  methods:{
      onClick(){
          console.log(this.password)
          console.log(this.username)
      }
  }
};
</script>

<style scoped>
</style>

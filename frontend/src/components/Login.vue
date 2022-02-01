<template>
  <div class="container border mt-4 w-25" style="background-color: #e4ebe8">
    <div class="mb-3 mt-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="mb-5">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" v-model="password" />
      <h6  class="text-danger">{{loginStatus}}</h6>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
      
      <button @click="onClick" type="button " class="btn btn-success">login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
      return{
          username:'',
          password:''
      }
  },
  props:['loginStatus'],
  methods:{
      onClick(){
        const username=this.username
        const password = this.password
          const data = {username,password}
          this.$emit('loginAttempt', data)
      }
  },
  
};
</script>

<style scoped>
</style>

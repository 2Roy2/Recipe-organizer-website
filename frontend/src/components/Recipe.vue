<template>
  <div class="container rounded card-text mt-3" style="background-color: #ffffff; cursor: pointer;" @click="clicked=!clicked">
    <div class="d-flex justify-content-between ">
      <div class="p-2">
        <h5>{{ recipe.name }}</h5>
      </div>
      <div class="p-1" v-show="clicked">
        <button @click="deleteBtn" type="button " class="btn btn-danger">DELETE</button>
      </div>
    </div>
    <div class="pb-2" v-show="clicked">
      <p>ingredients: {{recipe.description.ingredients}}</p>
      <p>instructions: {{recipe.description.instructions}}</p>
    </div>
  </div>
</template>


<script >
export default {
  name: "Recipe",
  props: ["recipe",],
  data(){
      return{
          clicked:false,
      }
  },
  methods:{
      deleteBtn(){
          const rcipeObg =this.recipe
          const data ={recipe:rcipeObg}
          this.$emit('deleteRecipeAttempt',data)
      }
  }
};
</script>
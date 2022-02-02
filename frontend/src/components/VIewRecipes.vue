<template>
  <div class="col-8 container m-4" style="background-color: #e4ebe8">
    <div class="row p-3 text-light" style="background-color: #4ac76b">
      <h6>Your recipes :</h6>
    </div>
    <div>
      <ul>
        <li v-for="recipe in recipes" :key="recipe._id">
          <Recipe @deleteRecipeAttempt="deleteRecipeAttempt" :recipe="recipe" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Recipe from "./Recipe.vue";
export default {
  name: "ViewRecipes",
  components: {
    Recipe,
  },
  props: ["recipes"],
  data() {
    return {};
  },
  methods:{
      deleteRecipeAttempt(data){
          this.$emit('deleteRecipeAttempt',data)
      }
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
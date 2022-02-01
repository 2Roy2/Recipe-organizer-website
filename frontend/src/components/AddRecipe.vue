<template>
  <div class="col-3 container m-4 p-3" style="background-color: #e4ebe8">
    <div class="mb-3">
      <label for="addRecipeControl" class="form-label">Recipe name</label>
      <input
        type="text"
        class="form-control"
        id="addRecipeControl"
        v-model="recipeName"
      />
    </div>
    <div class="mb-3">
      <label for="addRecipeControl" class="form-label">Ingredients</label>
      <textarea
        class="form-control"
        id="addRecipeControl"
        rows="2"
        v-model="recipeIngredients"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="addRecipeControl" class="form-label">Instructions</label>
      <textarea
        class="form-control"
        id="addRecipeControl"
        rows="3"
        v-model="recipeInstructions"
      ></textarea>
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-success" type="button" @click="clickAdd">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRecipe",
  data() {
    return {
      recipeName: "",
      recipeIngredients: "",
      recipeInstructions: "",
    };
  },
  methods: {
    clickAdd() {
      const data = {
        name: this.recipeName,
        description: {
          ingredients: this.recipeIngredients,
          instructions: this.recipeInstructions,
        },
      };
      this.$emit("addRecipeAttempt", data);
      Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
};
</script>

<style scoped>
.container {
  right: 0 !important;
}
</style>
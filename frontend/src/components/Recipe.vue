<template>
  <div
    class="container rounded card-text mt-3"
    style="background-color: #ffffff; cursor: pointer"
  >
    <div class="d-flex justify-content-between" @click="clicked = !clicked">
      <div class="p-2" v-show="!editMode">
        <h5>{{ recipe.name }}</h5>
      </div>
      <div class="p-2" v-on:click.stop v-show="editMode">
        <label for="name" class="form-label">name:</label>
        <input
          type="text"
          class="form-control"
          v-model="recipeDetails.name"
        />
      </div>

      <div class="p-1" v-show="clicked" v-on:click.stop>
        <button
          @click="changeToEditMode"
          type="button "
          class="btn btn-warning m-2"
        >
          Edit
        </button>
        <button @click="deleteBtn" type="button " class="btn btn-danger m-2">
          DELETE
        </button>
      </div>
    </div>
    <div class="pb-2" v-show="clicked" v-if="!editMode">
      <p>ingredients: {{ recipe.description.ingredients }}</p>
      <p>instructions: {{ recipe.description.instructions }}</p>
    </div>

    <div class="pb-2" v-show="clicked" v-if="editMode">
      <label for="ingredients" class="form-label">ingredients:</label>
      <input
        type="text"
        class="form-control"
        v-model="recipeDetails.ingredients"
      />
      <label for="instructions" class="form-label">instructions:</label>
      <input
        type="text"
        class="form-control"
        v-model="recipeDetails.instructions"
      />
      <button type="button " class="btn btn-success m-3" @click="update" >Update</button>
    </div>
  </div>
</template>


<script >
export default {
  name: "Recipe",
  props: ["recipe"],
  data() {
    return {
      clicked: false,
      editMode: false,
      recipeDetails: {
        _id:this.recipe._id,
        name: this.recipe.name,
        ingredients: this.recipe.description.ingredients,
        instructions: this.recipe.description.instructions,
      },
    };
  },
  methods: {
    changeToEditMode() {
      this.editMode = !this.editMode;
    },
    deleteBtn() {
      const rcipeObg = this.recipe;
      const data = { recipe: rcipeObg };
      this.$emit("deleteRecipeAttempt", data);
    },
    update(){
      this.$emit("updateAttempt",this.recipeDetails)
      this.editMode=false
    },
  },
};
</script>
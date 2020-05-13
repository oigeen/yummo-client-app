<template>
  <v-container>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-card @click="fetchRecipeDetails" target="_blank" flat>
          <v-img :src="recipe.image" max-height="300"> </v-img>
          <v-card-title class="cardTitle align-left">{{ recipe.title }}</v-card-title>
      </v-card>
    </v-lazy>
      <v-divider></v-divider>

  </v-container>
</template>

<script>
export default {
  name: "Recipe",
  data: function() {
    return {
      isActive: false,
    };
  },
  props: {
    recipe: Object,
  },
  methods: {
    fetchRecipeDetails: async function() {
      await this.$store.dispatch("recipes/getRecipeDetails", this.recipe.id);
    },
  },
};
</script>

<style scoped>
  .cardTitle {
    font-family: 'Jost';
  }
  .align-left {
    text-align: left;
  }
</style>

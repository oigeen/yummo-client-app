import axios from "axios";

var baseUrl = process.env.VUE_APP_YUMMO_SPOONACULAR_RELAY_API_ROOT;

export default {
  getRecipes: async function(selectedIngredientNames) {
    if (
      selectedIngredientNames == undefined ||
      selectedIngredientNames.length < 1
    ) {
      alert("No or undefined query Ingredients");
      return;
    }
    this.recipes = [];

    var ingredients = "";   
    selectedIngredientNames.forEach((ingredient) => {
      ingredients += ingredient + ",";
    });
    ingredients = ingredients.substring(0, ingredients.length - 1)

    var queryString =
      baseUrl +
      // "?q=" +
      "/search?ingredients=" +
      ingredients;
    // "&app_key=" +
    // apiKey +
    // "&app_id=" +
    //apiKey
    // "&to=" +
    // to;
    return await axios.get(queryString);
  },

  getRecipeById: async function(id) {
    if(id < 1 || !id) {
      alert("Invalid recipe Id");
      return;
    }
    var queryString = baseUrl + "/getRecipe?recipeId=" + id;
    return await axios.get(queryString);
  }
};

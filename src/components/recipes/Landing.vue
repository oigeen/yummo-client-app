<template>
  <div>
    <div class="backgroundCircle">
      <v-img
        id="chefHatImg"
        src="../../assets/chef.svg"
        height="200"
        width="200"
      ></v-img>
    </div>

    <h1 class="text-center">Welcome to Yummo</h1>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
  .backgroundCircle {
    background-color: #32a852;
    height: 300px;
    width: 300px;
    border-radius: 150px;
    padding: 50px;
  }
  h1 {
    margin-top: 15px;
    font-size: 45px;
    font-family: "Jost";
    color: #478e5a;
  }
</style>

<template>
  <v-app>
    <Navbar @toggleDrawer="toggleDrawer"></Navbar>
    <v-navigation-drawer
      width="400"
      v-model="drawer"
      clipped
      fixed
      app
      hide-overlay
      mobile-break-point="960"
      disable-resize-watcher
    >
      <IngredientsPanel @onCloseDrawer="toggleDrawer"></IngredientsPanel>
    </v-navigation-drawer>

    <v-content>
      <Dashboard />
    </v-content>
    <v-footer app inset color="secondary">
      <v-spacer> </v-spacer>
      &copy; Yummo - {{ new Date().getFullYear() }}
    </v-footer>
  </v-app>
</template>

<script>
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import IngredientsPanel from "./components/ingredients/IngredientsPanel";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    Navbar,
    Dashboard,
    IngredientsPanel,
  },
  data: () => ({
    drawer: !null,
  }),
  methods: {
    toggleDrawer: function() {
      this.drawer = !this.drawer;
    },
    isMobile: function() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    isLoading: function() {
      return this.$store.state.recipes.isLoading;
    },
  },
  watch: {
    isLoading: function() {
      if (this.isLoading && this.isMobile) {
        this.drawer = null;
      }
    },
  },
  created() {
    if (this.isMobile) {
      this.drawer = null;
    }
  },
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>

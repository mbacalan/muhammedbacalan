<template>
  <div id="app">
    <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
    <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>

    <NavBar/>
    <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
$primary-color: #444;

* {
  box-sizing: border-box;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: $primary-color;
  color: #fff;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

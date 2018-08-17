<template>
  <div id="app">

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
@import "@/assets/_styleUtils.scss";
@import url("https://fonts.googleapis.com/css?family=Bitter");

* {
  box-sizing: border-box;
}

body {
  font-family: "Bitter", serif;
  background-color: $primary-color;
  color: #fff;
  margin: 0;
}

#app {
  min-height: calc(100vh - 50px);
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2 {
  margin: 0;
  font-weight: 400;

  &.lg {
    font-size: 6rem;
  }

  &.sm {
    margin-bottom: 2rem;
  }

  span {
    color: $secondary-color;
  }
}

a {
  color: #fff;
}

@include mediaM {
  h1.lg {
    font-size: 2.8rem;
    margin-top: 20vh;
    margin-bottom: 1rem;
  }
}
</style>

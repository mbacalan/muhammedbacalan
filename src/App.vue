<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/_styleUtils.scss";
@import url("https://fonts.googleapis.com/css?family=Fira+Mono|Roboto");

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
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

.home,
.portfolio,
.about {
  height: 100vh;
}

h1,
h2,
h3,
nav {
  font-family: "Fira Mono", monospace;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: 400;
  text-align: center;

  &.lg {
    font-size: 5rem;
  }

  &.sm {
    margin-bottom: 2rem;
  }
}

.secondary-text {
  color: $secondary-color;
}

a {
  color: #fff;
  text-decoration: none;
}

@include mediaM {
  .home,
  .portfolio,
  .about {
    height: auto;
  }

  h1.lg {
    font-size: 2.8rem;
    margin-top: 10vh;
    margin-bottom: 1rem;
  }
}
</style>

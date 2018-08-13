<template>
  <header>
    <div class="menu-button">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-brand">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/work">Portfolio</router-link> |
        <router-link to="/contact">Contact</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

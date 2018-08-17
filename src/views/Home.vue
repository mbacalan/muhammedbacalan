<template>
  <div class="home">
    <h1 class="lg">Muhammed <span>Bacalan</span></h1>
    <h2 class="sm">Front-End Web Developer</h2>
    <div class="icons">
      <a href="https://www.linkedin.com/in/muhammed-bacalan-pen/">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
      </a>
      <a href="https://github.com/pen-mb">
        <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
@import "@/assets/_styleUtils.scss";

.home {
  padding: 4rem;
  text-align: center;

  h1 {
    margin-top: 25vh;
  }

  .icons {
    margin-top: 1rem;

    a {
      padding: 0.5rem;

      &:hover {
        color: $secondary-color;
        @include easeOut;
      }
    }
  }
}

// Media Queries
@include mediaM {
  .home {
    align-items: center;
    padding: 2rem;
  }
}
</style>

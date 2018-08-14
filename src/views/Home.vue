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
  height: 100%;
  overflow: hidden;

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
</style>

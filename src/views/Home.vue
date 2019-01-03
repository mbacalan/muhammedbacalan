<template>
  <div class="main">
    <div class="home">
      <h1 class="lg">Muhammed <span class="secondary-text">Bacalan</span></h1>
      <h2 class="sm">Front-End Web Developer</h2>
      <div class="icons">
        <a href="https://www.linkedin.com/in/muhammed-bacalan/">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
        </a>
        <a href="https://github.com/mbacalan">
          <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
        </a>
      </div>
    </div>
    <About/>
    <Portfolio/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    About,
    Portfolio,
    Contact
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_styleUtils.scss";

.home {
  padding: 4rem;
  height: 100vh;

  h1 {
    margin-top: 25vh;
  }

  .icons {
    margin-top: 1rem;
    text-align: center;

    a {
      padding: 0.5rem;
      @include easeOut;

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

    h1.lg {
      margin-top: 20vh;
    }
  }
}
</style>

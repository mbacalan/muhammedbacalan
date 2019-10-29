<template>
  <div id="app">
    <div class="main">
      <span class="title sm">Hello, I'm</span>

      <h1 class="lg">Muhammed <span class="secondary-text">Bacalan,</span></h1>

      <h2>Front-End Web Developer.</h2>
    </div>

    <About/>

    <Portfolio/>
  </div>
</template>

<style lang="scss">
@import "@/assets/utils";
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

h1,
h2,
h3 {
  font-family: "Fira Mono", monospace;
  font-weight: 400;
  text-align: left;
  margin: 0;

  &.lg {
    font-size: 20px;
  }
}

a {
  color: #fff;
  text-decoration: none;
}

.secondary-text {
  color: $secondary-color;
}

.main {
  margin: 4vh 16vh;

  .title {
    font-family: "Fira Mono", monospace;
  }
}

.icons {
  text-align: left;
  margin-bottom: 15px;

  &--techs,
  &--connections {
    border-bottom: 1px $secondary-color solid;
    border-radius: 0.5rem;
    width: auto;
    margin: 0;
    padding: 0 5px 10px;

    li {
      padding: 0 10px;
      display: inline;
      list-style: none;
      @include easeOut;

      svg {
        font-size: 26px;
      }

      &:hover,
      a:hover {
        color: $secondary-color;
        @include easeOut;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
}

@include mediaM {
  h1.lg {
    font-size: 30px;
  }

  .main {
    margin: 2rem;
  }

  .icons {
    &--techs,
    &--connections {
      width: auto;
    }
  }
}

@include mediaXL {
  h1.lg {
    font-size: 40px;
  }
}

@include mediaXL {
  .icons {
    &--techs,
    &--connections {
      width: max-content;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  components: {
    About,
    Portfolio
  }
};
</script>

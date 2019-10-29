<template>
  <div id="app">
    <div class="main">
      <span class="title">Hello, I'm</span>

      <h1 class="lg">Muhammed <span class="alt-text">Bacalan,</span></h1>

      <h3>Front-End Web Developer.</h3>
    </div>

    <About/>

    <Portfolio/>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/base";

.main,
.about,
.portfolio {
  margin: 32px;
}

.icons {
  text-align: center;
  margin-bottom: 15px;

  &--techs,
  &--connections {
    border-bottom: 1px $secondary-color solid;
    border-radius: 8px;
    width: 100%;
    margin: 0;
    padding: 0 5px;

    li {
      padding: 0 10px 10px;
      display: inline-block;
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
    }
  }
}

@include mediaM {
  .lg {
    font-size: 35px;
  }

  .icons {
    text-align: left;

    &--techs,
    &--connections {
      padding: 0 5px 10px;
      width: max-content;

      li {
        padding: 0 10px;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
}

@include mediaL {
  .main,
  .about,
  .portfolio {
    margin: 4vh 16vh;
  }

  .lg {
    font-size: 45px;
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

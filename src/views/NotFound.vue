<template>
  <div class="notfound">
    <h1 class="lg">Not <span class="secondary-text">Found</span></h1>
    <h2 class="sm">This page doesn't exist! Redirecting...</h2>
    <font-awesome-icon
      icon="spinner"
      size="3x"
      spin/>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    redirect: function() {
      setTimeout(() => {
        this.$router.push("/");
      }, 3000);
    }
  },
  mounted() {
    this.redirect();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_styleUtils.scss";

.notfound {
  padding: 4rem;
  text-align: center;

  h1 {
    margin-top: 25vh;
  }
}

// Media Queries
@include mediaM {
  .notfound {
    align-items: center;
    padding: 2rem;

    h1.lg {
      margin-top: 20vh;
    }
  }
}
</style>

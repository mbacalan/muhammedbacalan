<template>
  <div class="about">
    <h1 class="lg">About <span class="secondary-text">Me</span></h1>
    <h2 class="sm">The more you know...</h2>
    <div class="about-info">
      <img src="../assets/portraitL.png" alt="Muhammed Bacalan" class="portrait">
      <div class="bio">
        <h3 class="secondary-text">BIO</h3>
        <p>Hey, I'm Muhammed Bacalan! Currently living in Turkey; I'm a gamer at heart, a journalist on diploma
          and a front-end web developer for the future. I love the open web so I've been creating open-sourced
          websites for open-sourced projects. Since then, I'm always looking to learn more and improve!
        </p>
      </div>

      <div class="exp exp-1">
        <h3>WordPress</h3>
        <h4>Hobby</h4>
        <p>A blog about video games, the culture surrounding them and their relationship
          with the current world order.</p>
      </div>
      <div class="exp exp-2">
        <h3>Mappening.nl</h3>
        <h4>Correspondant</h4>
        <p>A worldwide network of young journalists who report how topical issues are
          experienced in their own country.</p>
      </div>
      <div class="exp exp-3">
        <h3>Web Developer</h3>
        <h4>Freelance</h4>
        <p>Creating websites for open-source projects. And for fun!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/_styleUtils.scss";

.about {
  padding: 4rem;

  .about-info {
    display: grid;
    grid-gap: 30px;
    grid-template-areas:
      "portrait bio bio"
      "exp1 exp2 exp3";
    grid-template-columns: repeat(3, 1fr);

    .portrait {
      grid-area: portrait;
      margin: auto;
      border-radius: 50%;
      border: solid 3px $secondary-color;
    }

    .bio {
      grid-area: bio;
      font-size: 1.5rem;
    }

    .exp {
      background: lighten($primary-color, 5);
      padding: 0.5rem;
      border-bottom: solid 5px $secondary-color;
    }

    .exp-1 {
      grid-area: exp1;
    }

    .exp-2 {
      grid-area: exp2;
    }

    .exp-3 {
      grid-area: exp3;
    }
  }
}

@include mediaM {
  .about {
    padding: 2rem;

    .bio p {
      font-size: 1.3rem;
    }

    .about-info {
      grid-template-areas:
        "portrait"
        "bio"
        "exp1"
        "exp2"
        "exp3";
      grid-template-columns: 1fr;
    }
  }
}
</style>

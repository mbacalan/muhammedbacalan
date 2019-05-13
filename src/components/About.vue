<template>
  <div
    class="about"
    id="about">
    <h1 class="lg">About <span class="secondary-text">Me</span></h1>
    <div class="about-info">
      <img
        src="../assets/portraitL.png"
        alt="Muhammed Bacalan"
        class="portrait">
      <div class="bio">
        <p>Hey there! I'm Muhammed; a gamer, a journalist and a front-end web developer.</p>
        <p>I started learning web development at university and continued with self-motivation.
        After being accepted into <a
          class="secondary-text"
          href="https://www.udacity.com/google-scholarships">Google Developer Challenge Scholarship</a>
          via Udacity, followed by a solid Nanodegree program, I am able to work with web technologies at ease.</p>
        <p>I love the idea of open, free internet so I'm passionate about creating open-sourced websites for open-sourced projects.</p>
      </div>

      <div
        class="exp"
        v-for="exp in experiences"
        :key="exp.id">
        <div :class="exp.class">
          <h3>{{ exp.title }}</h3>
          <span>{{ exp.position }}</span>
          <p>{{ exp.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      experiences: {
        exp1: {
          class: "exp1",
          title: "WordPress",
          position: "Hobby",
          desc:
            "A blog about video games, the culture surrounding them and their relationship with the current world order."
        },
        exp2: {
          class: "exp2",
          title: "Mappening.nl",
          position: "Correspondant",
          desc:
            "A worldwide network of young journalists who report how topical issues are experienced in their own country."
        },
        exp3: {
          class: "exp3",
          title: "Web Developer",
          position: "Freelance",
          desc:
            "Creating all kinds of websites with modern web technologies, tools, passion and joy."
        }
      }
    };
  }
};
</script>


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
      font-size: 1.3rem;
    }

    .exp {
      background: lighten($primary-color, 5);
      padding: 0.5rem;
      border-bottom: solid 5px $secondary-color;
      border-radius: 0.5rem;
      text-align: center;

      h3 {
        padding-bottom: 3px;
        border-bottom: solid 1px $secondary-color;
      }

      span {
        color: $secondary-color;
      }
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

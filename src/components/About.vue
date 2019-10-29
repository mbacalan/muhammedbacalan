<template>
  <div class="about">
    <div class="icons">
      <ul class="icons--connections">
        <li
          v-for="connection in connections"
          :key="connection.id">
          <a :href="connection.link">
            <font-awesome-icon
              :icon="connection.icon"/>
          </a>
        </li>
      </ul>
    </div>

    <div class="bio">
      <p>
        I started learning web development at university and continued with self-motivation.
        After being accepted into Google Developer Challenge Scholarship via Udacity,
        followed by a solid
        <a
          href="https://confirm.udacity.com/FRACAMYK"
          class="secondary-text">Nanodegree program
        </a>, I am able to work with web technologies at ease.
      </p>

      <p>
        Since then, I created open-source projects (and contributed to existing ones),
        worked on various business solution apps and Turkey's biggest e-commerce websites.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/utils";

.about {
  margin: 0 16vh;

  .bio {
    font-size: 20px;
    line-height: 1.5;
    text-align: left;
    padding-right: 25%;
    margin-bottom: 15px;

    p {
      margin: 10px 0;
    }
  }
}

@include mediaM {
  .about {
    margin: 2rem;

    .bio {
      padding-right: 0;
    }
  }
}
</style>

<script>
export default {
  name: "About",
  data() {
    return {
      connections: {
        github: {
          link: "https://github.com/mbacalan",
          icon: ["fab", "github"]
        },
        linkedin: {
          link: "https://linkedin.com/in/muhammed-bacalan/",
          icon: ["fab", "linkedin"]
        },
        twitter: {
          link: "https://twitter.com/muhammed_bc",
          icon: ["fab", "twitter"]
        },
        mail: {
          link: "mailto:muhammedbacalan@gmail.com",
          icon: ["fas", "envelope"]
        }
      }
    };
  }
};
</script>

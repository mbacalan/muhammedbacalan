<template>
  <div class="about">
    <div class="icons">
      <ul class="icons--connections">
        <li
          v-for="connection in connections"
          :key="connection.id">
          <a :href="connection.link">
            <font-awesome-icon :icon="connection.icon"/>
          </a>
        </li>
      </ul>
    </div>

    <div class="bio">
      <p>
        {{ $t("bioStart") }}
        <a
          href="https://confirm.udacity.com/FRACAMYK"
          class="alt-text">{{ $t("bioLink") }}
        </a>
      </p>

      <p>
        {{ $t("bioEnd") }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.bio {
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 15px;

  p {
    margin: 10px 0;
  }
}

@include mediaM {
  .bio {
    font-size: 20px;
  }
}

@include mediaL {
  .bio {
    max-width: 60%;
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

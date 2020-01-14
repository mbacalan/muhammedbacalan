<template>
  <div class="portfolio">
    <h1 class="lg">{{ $t("portfolioTitleBig") }}<span class="alt-text">{{ $t("portfolioTitleSmall") }}</span></h1>

    <div class="icons">
      <ul class="icons--techs">
        <li
          v-for="tech in techs"
          :key="tech.id">
          <font-awesome-icon
            :icon="tech.icon"
            :title="tech.name"/>
        </li>
      </ul>
    </div>

    <div class="projects">
      <div
        v-for="project in projects"
        :key="project.id"
        class="item">
        <a :href="project.url">
          <img
            :src="project.img"
            :alt="project.name">
        </a>

        <a
          :href="project.url"
          class="button-light">
          <font-awesome-icon icon="eye"/>
          {{ project.name }}
        </a>

        <a
          :href="project.github"
          class="button-dark">
          <font-awesome-icon :icon="['fab', 'github']"/>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

h1 {
  margin-bottom: 15px;
}

.projects {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  img {
    width: 100%;
    border: solid 3px white;
    border-radius: 8px;
    @include easeOut;

    &:hover {
      opacity: 0.5;
      border-color: $secondary-color;
      @include easeOut;
    }
  }
}

.button {
  display: block;
  padding: 8px 16px;
  border: 0;
  margin-bottom: 5px;
  @include easeOut;

  &:hover {
    background: $secondary-color;
    color: white;
    @include easeOut;
  }
}

.button-light {
  @extend .button;
  background: lighten($primary-color, 50);
  color: black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.button-dark {
  @extend .button;
  background: darken($primary-color, 50);
  color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

@include mediaM {
  .projects {
    grid-template-columns: repeat(4, 1fr);
  }
}

@include mediaL {
  .projects {
    max-width: 60%;
  }
}
</style>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      techs: {
        html5: {
          name: "HTML5",
          icon: ["fab", "html5"]
        },
        css3: {
          name: "CSS3",
          icon: ["fab", "css3"]
        },
        js: {
          name: "JavaScript",
          icon: ["fab", "js"]
        },
        git: {
          name: "Git",
          icon: ["fab", "git-alt"]
        },
        vuejs: {
          name: "Vue.js",
          icon: ["fab", "vuejs"]
        },
        react: {
          name: "React.js",
          icon: ["fab", "react"]
        },
        nodejs: {
          name: "Node.js",
          icon: ["fab", "node-js"]
        },
        npm: {
          name: "npm",
          icon: ["fab", "npm"]
        },
        yarn: {
          name: "Yarn",
          icon: ["fab", "yarn"]
        },
        gulp: {
          name: "Gulp.js",
          icon: ["fab", "gulp"]
        },
        sass: {
          name: "SASS",
          icon: ["fab", "sass"]
        },
        andMore: {
          name: "and more!",
          icon: ["fa", "ellipsis-h"]
        }
      },
      projects: {
        gw2bot: {
          name: "gw2bot.info",
          img: require("../assets/img/gw2bot.png"),
          url: "https://gw2bot.info",
          github: "https://github.com/mbacalan/gw2bot-site"
        },
        gw2rpc: {
          name: "gw2rpc.info",
          img: require("../assets/img/gw2rpc.png"),
          url: "https://gw2rpc.info",
          github: "https://github.com/mbacalan/gw2rpc-site"
        },
        aurene: {
          name: "AureneBot",
          img: require("../assets/img/aurenebot.png"),
          url: "https://github.com/mbacalan/AureneBot",
          github: "https://github.com/mbacalan/AureneBot"
        },
        mb: {
          name: "This website!",
          img: require("../assets/img/mb.png"),
          url: "#!",
          github: "https://github.com/mbacalan/muhammedbacalan"
        }
      }
    };
  }
};
</script>

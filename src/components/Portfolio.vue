<template>
  <div
    class="portfolio"
    id="portfolio">
    <h1 class="lg">
      My
      <span class="secondary-text">Projects</span>
    </h1>
    <h2 class="sm">Check out some of my coding projects</h2>
    <div class="techs">
      <h3>Tools & Technologies</h3>
      <div class="icons">
        <ul>
          <li
            v-for="tech in techs"
            :key="tech.id">
            <font-awesome-icon
              :icon="tech.icon"
              :title="tech.name"
              size="2x"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="projects">
      <div
        class="item"
        v-for="work in works"
        :key="work.id">
        <a :href="work.url">
          <img
            :src="work.img"
            :alt="work.name">
        </a>
        <a
          :href="work.url"
          class="button-light">
          <font-awesome-icon icon="eye"/>
          {{ work.name }}
        </a>
        <a
          :href="work.github"
          class="button-dark">
          <font-awesome-icon :icon="['fab', 'github']"/>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

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
      works: {
        gw2bot: {
          name: "gw2bot.info",
          img: require("../assets/gw2bot.png"),
          url: "https://gw2bot.info",
          github: "https://github.com/mbacalan/gw2bot-site"
        },
        gw2rpc: {
          name: "gw2rpc.info",
          img: require("../assets/gw2rpc.png"),
          url: "https://gw2rpc.info",
          github: "https://github.com/mbacalan/gw2rpc-site"
        },
        fo: {
          name: "fortunateones.tk",
          img: require("../assets/fortunateones.png"),
          url: "https://fortunateones.tk/",
          github: "https://github.com/mbacalan/fortunateones"
        },
        aurene: {
          name: "AureneBot",
          img: require("../assets/aurenebot.png"),
          url: "https://github.com/mbacalan/AureneBot",
          github: "https://github.com/mbacalan/AureneBot"
        },
        mb: {
          name: "This website!",
          img: require("../assets/mb.png"),
          url: "#!",
          github: "https://github.com/mbacalan/muhammedbacalan"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/_styleUtils.scss";

.portfolio {
  padding: 4rem;

  .icons {
    margin-bottom: 1.5rem;
    text-align: center;

    ul {
      border: 1px $secondary-color solid;
      border-radius: 1rem;
      width: max-content;
      padding: 1rem;
      margin: auto;
    }
    li {
      display: inline;
      list-style: none;
      padding: 0.6rem;
      @include easeOut;

      &:hover {
        color: $secondary-color;
        @include easeOut;
      }
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.6rem;

    img {
      width: 100%;
      height: 70%;
      border: solid 3px white;
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
    padding: 0.5rem 1rem;
    border: 0;
    margin-bottom: 0.3rem;

    &:hover {
      background: $secondary-color;
      color: white;
    }
  }

  .button-light {
    @extend .button;
    background: lighten($primary-color, 50);
    color: black;
  }

  .button-dark {
    @extend .button;
    background: darken($primary-color, 50);
    color: white;
  }
}

@include mediaXL {
  .portfolio {
    .projects {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@include mediaL {
  .portfolio {
    .projects {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@include mediaM {
  .portfolio {
    padding: 2rem;

    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include mediaS {
  .portfolio {
    .projects {
      grid-template-columns: 1fr;
    }
  }
}
</style>

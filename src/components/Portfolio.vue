<template>
  <div class="portfolio">
    <h1 class="lg">My <span class="secondary-text">Work</span></h1>
    <h2 class="sm">Check out some of my work!</h2>
    <div class="projects">
      <div
        class="item"
        v-for="work in works"
        :key="work.id">
        <a :href="work.url">
          <img
            :src="work.img"
            alt="">
        </a>
        <a
          :href="work.url"
          class="button-light">
          <font-awesome-icon icon="eye"/> {{ work.name }}
        </a>
        <a
          :href="work.github"
          class="button-dark">
          <font-awesome-icon :icon="['fab', 'github']"/> GitHub
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
      works: {
        gw2bot: {
          name: "gw2bot.info",
          img: require("../assets/gw2bot.png"),
          url: "https://gw2bot.info",
          github: "https://github.com/pen-mb/gw2bot-site"
        },
        gw2rpc: {
          name: "gw2rpc.info",
          img: require("../assets/gw2rpc.png"),
          url: "https://gw2rpc.info",
          github: "https://github.com/pen-mb/gw2rpc-site"
        },
        fo: {
          name: "fortunateones.tk",
          img: require("../assets/fortunateones.png"),
          url: "https://fortunateones.tk/",
          github: "https://github.com/pen-mb/fortunateones"
        },
        aurene: {
          name: "AureneBot",
          img: require("../assets/aurenebot.png"),
          url: "https://github.com/pen-mb/AureneBot",
          github: "https://github.com/pen-mb/AureneBot"
        },
        mb: {
          name: "This website!",
          img: require("../assets/mb.png"),
          url: "#!",
          github: "https://github.com/pen-mb/muhammedbacalan"
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

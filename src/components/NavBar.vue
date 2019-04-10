<template>
  <nav>
    <ul>
      <li
        v-for="link in links"
        :key="link.id">
        <a
          data-scroll
          :href="link.to">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import SmoothScroll from "smooth-scroll";
new SmoothScroll('a[href*="#"]');

export default {
  name: "NavBar",
  data() {
    return {
      links: {
        home: {
          name: "Home",
          to: "#home"
        },
        about: {
          name: "About",
          to: "#about"
        },
        portfolio: {
          name: "Portfolio",
          to: "#portfolio"
        },
        contact: {
          name: "Contact",
          to: "#contact"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/_styleUtils.scss";

nav {
  position: fixed;
  width: 100%;
  background-color: #333;

  ul {
    list-style-type: none;
    margin: 0 auto;
    padding: 0.75rem;
    overflow: hidden;
    text-align: center;
  }

  li {
    display: inline-block;
    font-size: 1.3rem;
  }

  a {
    padding: 1.3rem;
    @include easeOut;

    &:hover {
      color: $secondary-color;
    }
  }
}

// Media Queries
@include mediaS {
  nav {
    li {
      font-size: 1.2rem;
    }

    a {
      padding: 0.5rem;
    }
  }
}
</style>

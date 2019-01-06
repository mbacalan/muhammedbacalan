<template>
  <header>
    <div
      class="menu-button"
      @click="toggleMenu"
      ref="menuButton">
      <div class="menu-line"/>
      <div class="menu-line"/>
      <div class="menu-line"/>
    </div>

    <nav
      class="menu"
      ref="menu">
      <div
        class="menu-brand"
        ref="menuBrand">
        <div class="portrait"/>
      </div>
      <ul
        class="menu-nav"
        ref="menuNav">
        <li
          class="nav-item"
          @click="toggleMenu"
          v-for="link in links"
          :key="link.id">
          <router-link
            class="nav-link"
            :to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toggleMenu: function() {
      const navItem = document.querySelectorAll(".nav-item");

      this.$refs.menu.classList.toggle("show");
      this.$refs.menuButton.classList.toggle("close");
      this.$refs.menuNav.classList.toggle("show");
      this.$refs.menuBrand.classList.toggle("show");
      navItem.forEach(item => item.classList.toggle("show"));
    }
  },
  data() {
    return {
      links: {
        home: {
          name: "Home",
          to: "/"
        },
        about: {
          name: "About",
          to: "/about"
        },
        portfolio: {
          name: "Portfolio",
          to: "/portfolio"
        },
        contact: {
          name: "Contact",
          to: "/contact"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/_styleUtils.scss";

header {
  position: fixed;
  z-index: 2;
  width: 100%;
}

.menu {
  visibility: hidden;
  width: 100%;
  position: fixed;
  top: 0;

  &.show {
    visibility: visible;
  }

  &-brand,
  &-nav {
    display: flex;
    flex-flow: column wrap;
    float: left;
    width: 50%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &-nav {
    margin: 0;
    padding: 0;
    background: darken($primary-color, 5);
    list-style: none;
    transform: translate3d(0, -100%, 0);
    @include easeOut;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  &-brand {
    background: $primary-color;
    transform: translate3d(0, 100%, 0);
    @include easeOut;

    &.show {
      transform: translate3d(0, 0, 0);
    }

    .portrait {
      width: 250px;
      height: 250px;
      background: url("../assets/portraitL.png");
      border-radius: 50%;
      border: solid 3px $secondary-color;
    }
  }

  .nav-item {
    transform: translate3d(600px, 0, 0);
    @include easeOut;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  .nav-link {
    display: inline-block;
    position: relative;
    font-size: 30px;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 300;
    @include easeOut;

    &:hover {
      color: $secondary-color;
    }
  }
}

// Loop through nav-items to delay their transition
@for $l from 1 through 4 {
  .nav-item:nth-child(#{$l}) {
    transition-delay: $l * 0.1s;
  }
}

.menu-button {
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  @include easeOut;

  .menu-line {
    width: 28px;
    height: 3px;
    margin: 0 0 5px 0;
    background: #fff;
    @include easeOut;
  }

  &.close {
    transform: rotate(180deg);

    .menu-line {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
}

.menu-nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// Media Queries
@include mediaM {
  ul.menu-nav,
  div.menu-brand {
    float: none;
    width: 100%;
    min-height: 0;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  ul.menu-nav {
    height: 70vh;
    transform: translate3d(-100%, 0, 0);

    .nav-link {
      font-size: 24px;
    }
  }

  div.menu-brand {
    height: 30vh;
    transform: translate3d(100%, 0, 0);

    .portrait {
      background: url("../assets/portraitS.png");
      width: 150px;
      height: 150px;
    }
  }
}

@include mediaS {
  ul.menu-nav {
    height: 65vh;
  }

  div.menu-brand {
    height: 35vh;
  }
}
</style>

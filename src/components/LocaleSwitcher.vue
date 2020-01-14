<template>
  <label class="locale-switcher">
    <input
      v-model="$i18n.locale"
      class="toggle"
      type="checkbox"
      true-value="tr"
      false-value="en">
    <div class="switcher"/>
  </label>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.locale-switcher {
  display: inline-block;
  position: absolute;
  right: 0;
  top: -10px;
  cursor: pointer;
  background: #fff;
  padding: $toggle-padding;
  width: $toggle-width;
  height: $toggle-height;
  border-radius: $toggle-height / 2;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.switcher {
  height: 100%;
  display: grid;
  grid-template-columns: 0fr 1fr 1fr;
  transition: 0.2s;

  &:after {
    content: "EN";
    border-radius: 50%;
    background: $secondary-color;
    grid-column: 2;
    transition: background 0.2s;
    font-size: 10px;
    text-align: center;
    padding-top: 3px;
  }
}

input:checked {
  + .switcher {
    grid-template-columns: 1fr 1fr 0fr;

    &:after {
      content: "TR";
    }
  }
}

@include mediaM {
  .locale-switcher {
    top: 0;
  }
}
</style>

<script>
export default {
  name: "LocaleSwitcher"
};
</script>

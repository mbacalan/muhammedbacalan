<template>
  <div
    class="contact"
    id="contact">
    <h1 class="lg">Contact <span class="secondary-text">Me</span></h1>
    <div class="boxes">
      <div>
        <p>If you want to talk about things on the phone, message me on
          <a
            href="https://www.linkedin.com/in/muhammed-bacalan/"
            class="secondary-text">LinkedIn</a>
          and I will share my number!</p>
        <p>Of course, you can also send a mail to the adress below;</p>
        <a
          class="secondary-text"
          href="mailto:muhammedbacalan@gmail.com">muhammedbacalan@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped lang="scss">
@import "@/assets/_styleUtils.scss";

.contact {
  padding: 4rem;

  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin-top: 1rem;

    div {
      font-size: 1.3rem;
      border: solid 3px white;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      margin-bottom: 3rem;
      @include easeOut;

      &:hover {
        background: $secondary-color;
        @include easeOut;

        .secondary-text {
          color: $primary-color;
        }
      }
    }
  }
}

@include mediaM {
  .contact {
    padding: 2rem;
  }
}
</style>

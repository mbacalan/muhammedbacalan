<template>
  <div class="contact">
    <h1 class="lg">Contact <span class="secondary-text">Me</span></h1>
    <h2 class="sm">Reach me in these ways!</h2>
    <div class="boxes">
      <div>
        <p>If you want to talk things on phone, feel free to message me on
          <a href="https://www.linkedin.com/in/muhammed-bacalan-pen/" class="secondary-text">LinkedIn</a>
          and I will share my number! Of course, you can also send a mail to the adress below.</p>
      </div>
      <div>
        <span class="secondary-text">E-Mail:</span> muhammedbacalan@gmail.com
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/_styleUtils.scss";

.contact {
  padding: 4rem;

  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;

    div {
      font-size: 1.3rem;
      border: solid 3px white;
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

<template>
  <section class="about-me">
    <div class="information">
      <h2>Sobre mim</h2>
      <p>
        Opa, me chamo José. Sou um desenvolvedor fullstack, gosto de usar
        Typescript no frontend e no backend.
      </p>
    </div>
    <div class="picture">
      <img src="~/assets/img/me.jpeg" alt="Foto de José Anselmo" />
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  padding: 5rem;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
  @include screen("medium") {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
  }
  .information {
    max-width: 45rem;
    h2 {
      margin-top: 0;
      font-size: 3.125rem;
    }
  }
  .picture {
    position: relative;
    width: 18.75rem;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 100%;
      position: absolute;
      z-index: 1;
    }
  }
  .ring {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    animation: pulsing 3s ease-out infinite;
    background: color("primary");
    border-radius: 100%;
  }
  .ring:nth-last-of-type(1) {
    animation-delay: -1s;
  }
  .ring:nth-last-of-type(2) {
    animation-delay: -2s;
  }
  @keyframes pulsing {
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
}
</style>

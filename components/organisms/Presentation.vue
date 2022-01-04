<template>
  <section class="presentation">
    <div class="presentation-text">
      <h1>José Anselmo</h1>
      <p>Desenvolvedor fullstack</p>
      <div href="#about-me" class="about-me">Sobre mim</div>
    </div>
    <Socials />
  </section>
</template>

<style lang="scss" scoped>
.presentation {
  margin-left: 5rem;
  align-self: center;
  display: grid;
  grid-template-columns: auto 4rem;
  justify-items: space-between;
  align-items: center;
  h1 {
    font-size: 5.625rem;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.875rem;
    font-weight: 300;
  }
  .about-me {
    width: 12.5rem;
    height: 3.75rem;
    background: color("primary");
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 1.875rem;
    font-size: 1.875rem;
    font-weight: 300;
    margin-top: 1.25rem;
    &:hover {
      background: color("primary", "lighter");
    }
  }
  @include screen("large") {
    margin-left: 4rem;
    .presentation-text {
      h1 {
        font-size: 4.5rem;
      }
      p {
        font-size: 1.25rem;
      }
      .about-me {
        width: 10rem;
        height: 3rem;
        border-radius: 1.5rem;
        font-size: 1.25rem;
      }
    }
  }
  @include screen("medium") {
    margin-left: 3.2rem;
    .presentation-text {
      h1 {
        font-size: 3.6rem;
      }
      p {
        font-size: 1rem;
      }
      .about-me {
        width: 8rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        font-size: 1rem;
        margin-top: 0.75rem;
      }
    }
  }
  @include screen("small") {
    margin-left: 2.56rem;
    .presentation-text {
      h1 {
        font-size: 2.88rem;
      }
      p {
        font-size: 1rem;
      }
      .about-me {
        width: 8rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        font-size: 1rem;
      }
    }
  }
}
</style>

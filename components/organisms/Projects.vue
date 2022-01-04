<template>
  <section class="projects">
    <div class="background-wrapper">
      <h2>Projetos</h2>
      <div class="background"></div>
    </div>
    <ProjectList />
  </section>
</template>

<style lang="scss" scoped>
.background-wrapper {
  height: 500px;
  width: calc(100% + 320px);
  justify-self: center;
  .background {
    width: 100%;
    height: 60%;
    background: coral;
    transform: rotate(7.5deg);
  }
}
.projects {
  margin: 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  h2 {
    width: 10rem;
    height: 3.6rem;
    justify-self: center;
    font-size: 2.5rem;
    position: absolute;
    z-index: 1;
    left: calc(50% - 5rem);
    margin-top: 7rem;
    color: white;
  }
}
</style>

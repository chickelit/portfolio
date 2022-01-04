<template>
  <section class="skills">
    <h2>Habilidades</h2>
    <SkillList />
  </section>
</template>

<style lang="scss" scoped>
.skills {
  padding: 0 5rem 5rem 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
  h2 {
    font-size: 3.125rem;
  }
  @include screen("small") {
      padding: 0 2rem 5rem 2rem;
  }
}
</style>
<template>
  <div class="skill-list">
    <Skill text="HTML5" />
    <Skill text="CSS3" />
    <Skill text="Javascript" />
    <Skill text="ES6+" />
    <Skill text="NodeJS" />
    <Skill text="SCSS" />
    <Skill text="Typescript" />
    <Skill text="Vue" />
    <Skill text="Nuxt" />
    <Skill text="Adonis v5" />
    <Skill text="MySQL" />
    <Skill text="Docker" />
  </div>
</template>

<style lang="scss" scoped>
.skill-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>

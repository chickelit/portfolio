<template>
  <div class="home-template">
    <div class="primary__container">
      <Navigation />
      <Presentation />
    </div>
    <div class="secondary__container">
      <AboutMe id="about-me" />
      <Projects id="projects" />
      <Skills id="skills" />
    </div>
    <div class="tertiary__container">
      <Footer id="contact-me" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-template {
  overflow: hidden;
}
.primary__container {
  height: 100vh;
  background: color("dark", "darkest");
  color: white;
  font-size: 2.5rem;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>

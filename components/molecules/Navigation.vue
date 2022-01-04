<template>
  <nav class="navigation">
    <ul class="nav-items">
      <li class="nav-item">
        <a href="#about-me">Sobre mim</a>
      </li>
      <li class="nav-item">
        <a href="#projects">Projetos</a>
      </li>
       <li class="nav-item">
        <a href="#skills">Habilidades</a>
      </li>
      <li class="nav-item">
        <a href="#contact-me">Contato</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 0 0.75rem;
  display: grid;
  grid-template-columns: max-content;
  justify-content: end;
  .nav-items {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    gap: 2rem;
    .nav-item {
      a {
        color: white;
        text-decoration: none;
        font-size: 1.875rem;
      }
    }
  }
  @include screen("large") {
    .nav-items {
      display: grid;
      grid-auto-rows: max-content;
      grid-auto-flow: row;
      gap: 0;
    }
  }
}
</style>

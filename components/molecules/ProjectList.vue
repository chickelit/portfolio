<template>
  <div class="project-list">
    <div class="project">
      <div class="project-card">
        <div class="wrapper">
          <div class="project-cover">
            <img
              src="@/assets/img/chat-api-project.jpeg"
              :alt="`Imagem do projeto ChatAPI`"
            />
            <div class="ring"></div>
            <div class="ring"></div>
          </div>
          <div class="project-content">
            <h3>ChatAPI</h3>
            <p>
              API de conversas em tempo real, feita com Adonis v5, MySQL e
              Typescript.
            </p>
          </div>
          <hr />
          <div class="view-more">
            <a href="https://github.com/jose13162/chatAPI" target="__blank"
              >Ver mais...</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project-card">
        <div class="wrapper">
          <div class="project-cover">
            <img
              src="@/assets/img/chat-app-project.jpeg"
              :alt="`Imagem do projeto ChatApp`"
            />
            <div class="ring"></div>
            <div class="ring"></div>
          </div>
          <div class="project-content">
            <h3>ChatApp</h3>
            <p>
              Client para a API de conversas em tempo real, feito com Nuxt, Vue e Typescript
            </p>
          </div>
          <hr />
          <div class="view-more">
            <a href="https://github.com/jose13162/chatApp" target="__blank"
              >Ver mais...</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  height: 32rem;
  width: 100%;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.8);
  display: grid;
  align-items: center;
  .wrapper {
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    hr {
      width: 80%;
    }
    .project-content {
      padding: 0 1.5rem;
      display: grid;
      justify-items: center;
      h3 {
        margin-bottom: 0;
        font-size: 1.75rem;
      }
      p {
        text-align: center;
      }
    }
    .project-cover {
      position: relative;
      width: 80%;
      max-width: 18rem;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      justify-self: center;
      display: grid;
      align-items: center;
      justify-items: center;
      .ring {
        position: absolute;
        bottom: 2rem;
        width: 76%;
        height: 76%;
        opacity: 0.8;
        animation: pulsing 2s ease-out infinite;
        background: color("primary");
        border-radius: 100%;
      }
      .ring:nth-last-of-type(1) {
        animation-delay: -1s;
      }
      @keyframes pulsing {
        100% {
          transform: scale(1.4);
          opacity: 0;
        }
      }
      img {
        max-width: 18rem;
        width: 76%;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        position: absolute;
        bottom: 2rem;
        z-index: 1;
      }
    }
    .view-more {
      margin-top: 0.5rem;
      width: max-content;
      justify-self: center;
      a {
        color: color("primary");
        text-decoration: none;
        &:hover {
          color: color("primary", "lighter");
        }
      }
    }
  }
}
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3.125rem;
}
</style>

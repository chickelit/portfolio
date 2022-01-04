<template>
  <div class="project-card">
    <div class="wrapper">
      <div class="project-cover">
        <img
          :src="project.image.path"
          :alt="`Imagem do projeto ${project.description}`"
        />
        <div class="ring"></div>
        <div class="ring"></div>
      </div>
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
      <hr />
      <div class="view-more">
        <a :href="project.viewMoreUrl" target="__blank">Ver mais...</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { Project } from "~/models";
export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true,
    } as PropOptions<Project>,
  },
});
</script>

<style lang="scss" scoped>

</style>

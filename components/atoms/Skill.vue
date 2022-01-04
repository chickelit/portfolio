<template>
  <div class="skill">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.skill {
  width: max-content;
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: 1rem;
  color: white;
  display: grid;
  align-items: center;
  background: color("primary");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div>
    <Element />
    <img
      src="../assets/logo.png"
      width="50%"
      class="logo-main"
      alt="logo-main"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Element from "@/components/Element.vue";

export default Vue.extend({
  components: {
    Element
  }
});
</script>

<style>
</style>

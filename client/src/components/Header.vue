<template>
  <div class="header">
    <searchbar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Searchbar from "@/components/Searchbar.vue";

export default Vue.extend({
  components: {
    Searchbar
  }
});
</script>

<style>
.header {
  height: 20vh;
  background: #1de9b7 url("../assets/logo.png") no-repeat;
}
@media only screen and (max-width: 600px) {
  .header {
    background: #1de9b7 url("../assets/logo.png") no-repeat;
  }
}
</style>
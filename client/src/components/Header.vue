<template>
  <div class="header">
    <v-container>
      <Searchbar />
      <Navigation />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Searchbar from "@/components/Searchbar.vue";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: {
    Searchbar,
    Navigation
  }
})
export default class Header extends Vue {}
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

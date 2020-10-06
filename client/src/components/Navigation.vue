<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/favorites">Favorites</router-link>
    <router-link to="/explore">Explore</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Navigation extends Vue {}
</script>

<style></style>

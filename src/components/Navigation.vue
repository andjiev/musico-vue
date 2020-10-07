<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Explore</router-link>
      </li>
      <li>
        <router-link to="/favorites">Favorites</router-link>
      </li>
      <li>
        <router-link to="/popular">Popular</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Navigation extends Vue {}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: left;
  margin-top: 25px;
  font-family: "Varela Round", sans-serif;
  font-size: 16px;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

<template>
  <div class="searchBar">
    <input
      type="text"
      placeholder="Search.."
      name="search"
      v-model="searchText"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import shared from "@/store/modules/shared";

@Component
export default class Searchbar extends Vue {
  timeout: NodeJS.Timeout | null = null;

  get searchText() {
    return shared.searchText;
  }

  set searchText(newValue: string) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      shared.updateSearchText(newValue);
    }, 400);
  }
}
</script>

<style>
.searchBar {
  padding-top: 5vh;
}

button {
  padding: 13px;
  background: linear-gradient(to bottom, #013e5e, #003452);
  border: none;
  color: #fff;
}

input {
  padding: 16px;
  width: 100%;
  font-size: 13px;
  border: none;
  background: linear-gradient(to bottom, #013e5e, #003452);
  color: #fff;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #fff;
}
</style>

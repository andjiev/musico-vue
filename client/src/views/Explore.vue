<template>
  <div>
    <Element />

    <ApolloQuery
      :query="require('../graphql/GetTracks.gql')"
      :variables="{ query: 'a' }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          {{ data.tracks && data.tracks[0] }}
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
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

<style></style>

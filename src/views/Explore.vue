<template>
  <div class="elementsContainer">
    <div v-if="searchText">
      <ApolloQuery
        :query="require('../graphql/GetTracks.gql')"
        :variables="{ query: searchText }"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">Error occurred</div>

          <!-- Result -->
          <div v-else-if="data">
            <v-container>
              <h4>Search results:</h4>
              <v-row>
                <v-col
                  v-bind:key="track.id"
                  v-for="track in data.tracks"
                  cols="12"
                  xs="12"
                  md="4"
                  lg="3"
                >
                  <Element
                    :name="track.name"
                    :artist="track.artists.map(x => x.name).join(', ')"
                    :imageSrc="
                      track.album.images.length
                        ? track.album.images[0].url
                        : undefined
                    "
                    :previewClicked="track.url === url"
                    :disablePreview="!track.url"
                    @previewClick="previewClick(track.url)"
                    @saveClick="saveTrack(track)"
                  />
                </v-col>
              </v-row>
              <audio autoplay :src="url"></audio>
            </v-container>
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">Loading...</div>
        </template>
      </ApolloQuery>
    </div>
    <div v-else>
      <img
        src="../assets/logo.png"
        width="50%"
        class="logo-main"
        alt="logo-main"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import shared from "@/store/modules/shared";
import favorite from "@/store/modules/favorite";
import Element from "@/components/Element.vue";
import { Track } from "../lib/models";

@Component({
  components: {
    Element
  }
})
export default class Explore extends Vue {
  url = "";

  get searchText(): string {
    this.url = "";
    return shared.searchText;
  }

  previewClick(url: string): void {
    this.url = this.url === url ? "" : url;
  }

  saveTrack(track: Track): void {
    favorite.saveTrack(track);
  }
}
</script>

<style></style>

<template>
  <div class="elementsContainer">
    <ApolloQuery
      :query="require('../graphql/GetAlbumTracks.gql')"
      :variables="{ id }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- {{ data }} -->

        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          No new releases found
        </div>

        <!-- Result -->
        <div v-else-if="data">
          <v-container>
            <h4>Search results:</h4>
            <v-row>
              <v-col
                v-bind:key="track.id"
                v-for="track in data.albumTracks"
                cols="12"
              >
                <ListItem
                  :name="
                    track.name.length > 18
                      ? track.name.substring(0, 18) + '...'
                      : track.name
                  "
                  :artist="
                    track.artists.map(x => x.name).join(', ').length > 18
                      ? track.artists
                          .map(x => x.name)
                          .join(', ')
                          .substring(0, 18) + '...'
                      : track.artists.map(x => x.name).join(', ')
                  "
                  :imageSrc="
                    track.album.images.length
                      ? track.album.images[0].url
                      : undefined
                  "
                  :showOpenAlbumButton="true"
                  :previewClicked="track.url === url"
                  :disablePreview="!track.url"
                  @previewClick="previewClick(track.url)"
                  @buttonClick="saveTrack(track)"
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import shared from "@/store/modules/shared";
import favorite from "@/store/modules/favorite";
import ListItem from "@/components/ListItem.vue";
import { Track } from "../lib/models";

@Component({
  components: {
    ListItem
  }
})
export default class Album extends Vue {
  @Prop() id: string;

  url = "";

  get searchText(): string {
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

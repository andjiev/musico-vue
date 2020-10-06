<template>
  <div class="elementsContainer">
    <ApolloQuery
      :query="require('../graphql/GetTracks.gql')"
      :variables="{ query: searchText }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          <img
            src="../assets/logo.png"
            width="50%"
            class="logo-main"
            alt="logo-main"
          />
        </div>

        <!-- Result -->
        <div v-else-if="data">
          <v-container>
            <h4>Search results:</h4>
            {{ url }}
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
                  :previewClicked="track.url === url"
                  :disablePreview="!track.url"
                  @previewClick="previewClick(track.url)"
                  @saveClick="saveTrack(track)"
                />
              </v-col>
            </v-row>
            <audio autoplay>
              <source v-bind:src="url" />
            </audio>
          </v-container>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

import shared from "@/store/modules/shared";
import Element from "@/components/Element.vue";

@Component({
  components: {
    Element
  }
})
export default class App extends Vue {
  url: string | null = null;

  get searchText(): string {
    return shared.searchText;
  }

  previewClick(url: string): void {
    this.url = this.url === url ? "" : url;
  }

  saveTrack(track): void {
    // TODO
  }
}
</script>

<style></style>

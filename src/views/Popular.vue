<template>
  <div class="elementsContainer">
    <ApolloQuery :query="require('../graphql/GetNewReleases.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          No new releases found
        </div>

        <!-- Result -->
        <div v-else-if="data">
          <v-container>
            <h4>New releases:</h4>
            <v-row>
              <v-col
                v-bind:key="album.id"
                v-for="album in filteredAlbums(data.newReleases)"
                cols="12"
                xs="12"
                md="4"
                lg="3"
              >
                <Element
                  :name="album.name"
                  :artist="album.artists.map(x => x.name).join(', ')"
                  :imageSrc="
                    album.images.length ? album.images[0].url : undefined
                  "
                  :showOpenAlbumButton="true"
                  @openAlbumClick="openAlbum(album.id)"
                />
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">Loading...</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import shared from "@/store/modules/shared";
import Element from "@/components/Element.vue";

@Component({
  components: {
    Element
  }
})
export default class Popular extends Vue {
  get searchText(): string {
    return shared.searchText;
  }

  filteredAlbums(albums) {
    if (!this.searchText) {
      return albums;
    }

    return albums.filter(
      x =>
        x.name
          .toLocaleLowerCase()
          .startsWith(this.searchText.toLocaleLowerCase()) ||
        !!x.artists.filter(x =>
          x.name
            .toLocaleLowerCase()
            .startsWith(this.searchText.toLocaleLowerCase())
        ).length
    );
  }

  openAlbum(id: string): void {
    this.$router.push(`/albums/${id}`);
  }
}
</script>

<style></style>

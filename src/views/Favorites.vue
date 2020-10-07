<template>
  <div class="elementsContainer">
    <v-container>
      <h4>Favorite songs:</h4>
      <v-row>
        <v-col
          v-bind:key="track.id"
          v-for="track in filteredTracks(favorites)"
          cols="12"
        >
          <ListItem
            :name="track.name"
            :artist="track.artists.map(x => x.name).join(', ')"
            :imageSrc="
              track.album.images.length ? track.album.images[0].url : undefined
            "
            buttonText="Delete"
            buttonClass="btn-danger"
            :showOpenAlbumButton="true"
            :previewClicked="track.url === url"
            :disablePreview="!track.url"
            @previewClick="previewClick(track.url)"
            @buttonClick="deleteTrack(track.id)"
          />
        </v-col>
      </v-row>
      <audio autoplay :src="url"></audio>
    </v-container>
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
export default class Favorites extends Vue {
  url = "";

  get searchText(): string {
    return shared.searchText;
  }

  get favorites(): Track[] {
    return favorite.tracks;
  }

  created() {
    favorite.getTracks();
  }

  filteredTracks(tracks) {
    if (!this.searchText) {
      return tracks;
    }

    return tracks.filter(
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

  previewClick(url: string): void {
    this.url = this.url === url ? "" : url;
  }

  deleteTrack(id: string): void {
    favorite.deleteTrack(id);
  }
}
</script>

<style></style>

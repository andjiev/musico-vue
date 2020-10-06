<template>
  <v-card>
    <v-img :src="imageSrc ? imageSrc : '../assets/image-note.png'"> </v-img>
    <div class="card-body">
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>{{ artist }}</v-card-text>

      <div v-if="showOpenAlbumButton">
        <v-row class="p3">
          <v-col cols="12">
            <v-btn block @click="() => this.$emit('openAlbumClick')">
              <div>
                <i className="fa fa-eye"></i>
              </div>
              View album
            </v-btn></v-col
          >
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col cols="6">
            <button
              class="btn btn-secondary"
              :disabled="disablePreview"
              @click="() => this.$emit('previewClick')"
            >
              <div>
                <i className="fa fa-music"></i>
              </div>
              {{ previewClicked ? "Stop" : "Preview" }}
            </button>
          </v-col>
          <v-col cols="6">
            <button
              class="btn btn-secondary"
              @click="() => this.$emit('saveClick')"
            >
              <div>
                <i className="fa fa-music"></i>
              </div>
              {{ buttonText }}
            </button>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Element extends Vue {
  @Prop() name: string;
  @Prop() artist?: string;
  @Prop() imageSrc?: string;
  @Prop({ default: "Save" }) buttonText: string;
  @Prop({ default: false }) disablePreview: boolean;
  @Prop({ default: false }) showOpenAlbumButton: boolean;
  @Prop({ default: false }) previewClicked: boolean;
}
</script>

<style></style>

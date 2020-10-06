<template>
  <div>
    <v-card>
      <div class="card-body">
        <v-row>
          <v-col xs="12" md="8" lg="8">
            <v-row>
              <v-col xs="12" md="2" lg="1"></v-col>
              <v-col xs="12" md="2" lg="2">
                <v-img
                  width="300"
                  :src="imageSrc ? imageSrc : '../assets/image-note.png'"
                >
                </v-img>
              </v-col>
              <v-col xs="12" md="4" lg="5">
                <v-card-title>{{ name }}</v-card-title>
              </v-col>
              <v-col xs="12" md="4" lg="4">
                <v-card-text>{{ artist }}</v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col xs="12" md="4" lg="4"
            ><v-row>
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
                  @click="() => this.$emit('buttonClick')"
                >
                  <div>
                    <i className="fa fa-music"></i>
                  </div>
                  {{ buttonText }}
                </button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class ListItem extends Vue {
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

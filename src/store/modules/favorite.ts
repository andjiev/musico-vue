import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";
import { Track } from "@/lib/models";

@Module({
  name: "favorite",
  namespaced: true,
  store,
  dynamic: true
})
class Favorite extends VuexModule {
  public tracks: Track[] = [];

  @Mutation
  public setTracks(tracks: Track[]): void {
    this.tracks = tracks;
  }

  @Action({ commit: "setTracks" })
  public getTracks(): Track[] {
    const item = localStorage.getItem('favorites');

    if (item) {
      const tracks: Track[] = JSON.parse(item);
      return tracks;
    }

    return [];
  }

  @Action
  public saveTrack(track: Track) {
    const item = localStorage.getItem('favorites');

    if (item) {
      const tracks: Track[] = JSON.parse(item);
      if (!tracks.filter(x => x.id === track.id).length) {
        tracks.unshift(track);
        localStorage.setItem('favorites', JSON.stringify(tracks));
      }
    } else {
      localStorage.setItem('favorites', JSON.stringify([track]));
    }
  }

  @Action({ commit: "setTracks" })
  public deleteTrack(id: string): Track[] {
    const item = localStorage.getItem('favorites');
    const tracks: Track[] = JSON.parse(item!);
    const newTracks = tracks.filter(x => x.id !== id);

    localStorage.setItem('favorites', JSON.stringify(newTracks));

    return newTracks;
  }
};

export default getModule(Favorite);
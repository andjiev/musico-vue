import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";

@Module({
  name: "shared",
  namespaced: true,
  store,
  dynamic: true
})
class Shared extends VuexModule {
  public searchText = "";

  @Mutation
  public setSearchText(search: string): void {
    this.searchText = search;
  }

  @Action({ commit: 'setSearchText' })
  public updateSearchText(search: string): string {
    return search;
  }

  @Action({ commit: 'setSearchText' })
  public clearSearchText(): string {
    return "";
  }
};

export default getModule(Shared);
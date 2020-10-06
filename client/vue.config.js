module.exports = {
  transpileDependencies: ["vuetify", "vuex-module-decorators"],

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Musico";
      return args;
    });
  },

  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: true,
      lintGQL: false
    },
  },
};

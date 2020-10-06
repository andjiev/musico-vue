module.exports = {
  transpileDependencies: ["vuetify"],

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Musico";
      return args;
    });
  },

  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: true
    }
  }
};

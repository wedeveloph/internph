/* mamaya na to galawin mga pars

const { envPort } = require('../server/config');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    devServer: {
      proxy: {
        '/server': {
          target: `http://localhost:${envPort}`,
          changeOrigin: true
        },
      }
    }
  },
};
*/

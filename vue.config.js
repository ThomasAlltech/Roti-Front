const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
      port: 3000,
      proxy: {
          '/univers': {
              target: 'http://localhost:8080',
              ws: true,
              changeOrigin: true
          }
      }
  }
}

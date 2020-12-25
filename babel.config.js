/**
 * this config file just used to build website (eg. vue-cli-service)
 * rollup build and jest won't affected by this file
 */

module.exports = !process.env.WEBSITE
    ? {}
    : {
          presets: ['@vue/cli-plugin-babel/preset'],
          plugins: ['babel-plugin-dev-expression'],
      }

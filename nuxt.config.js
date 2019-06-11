import pkg from './package'

const { sourceFileArray } = require('./.tmp/summary.json');

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName);
  });
  callback(null, routes);
};

function sourceFileNameToUrl(filepath) {
  const deleteExt = filepath.replace('.md', '')
  let splited = deleteExt.split("/")
  splited.shift()
  const categoryName = splited[0]
  const fileName = splited[splited.length - 1]
  return `/${splited.slice(0, splited.length - 1).join('/')}/${fileName}`
};

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/bulma.scss', lang: 'scss' },
    '~assets/css/common.scss',
    '~assets/css/article.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/get_paths.js',
    '~/plugins/md_to_html.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '@node_modules/rfs/scss.scss',
      '~assets/css/var.scss',
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    routes: generateDynamicRoutes,
  },
}

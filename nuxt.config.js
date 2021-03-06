import pkg from './package'

const { sourceFileArray } = require('./.tmp/summary.json')

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

function sourceFileNameToUrl(filepath) {
  const deleteExt = filepath.replace('.md', '')
  let splited = deleteExt.split('/')
  splited.shift()
  const categoryName = splited[0]
  const fileName = splited[splited.length - 1]
  return `/${splited.slice(0, splited.length - 1).join('/')}/${fileName}`
}

export default {
  mode: 'universal',
  server: {
    port: 3000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: pkg.name
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://likelive.jp'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pkg.name
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://likelive.s3.amazonaws.com/2019-06-03_120706.png'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/apple-touch-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  router: {},

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    '~assets/css/bulma.scss',
    '~assets/css/common.scss',
    '~assets/css/article.scss',
    '~assets/css/balloon.scss',
    '~assets/css/fonts.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/get_paths.js', '~/plugins/md_to_html.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['@node_modules/rfs/scss.scss', '~assets/css/var.scss']
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
    extend(config, ctx) {}
  },

  generate: {
    routes: generateDynamicRoutes
  }
}

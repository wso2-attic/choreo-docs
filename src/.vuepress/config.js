const { config } = require("vuepress-theme-hope");
const { description } = require('../../package')

module.exports = config({
  
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Learning Portal',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    Navbar: true,
    logo: '/assets/img/choreo-logo.png',
    sidebar: [
       ['/','Home'],
       {
        title: 'Getting Started',
       path: '/getting-started/overview',
       collapsable: true, // optional, defaults to true
       children: [
         ['/getting-started/introduction-to-choreo', 'Introduction to Choreo'],
         ['/getting-started/overview','Overview'],
         ['/getting-started/quick-start-guide', 'Quick Start Guide']
       ]
      },
      {
         title: 'Concepts',
         collapsable: true, // optional, defaults to true
         children: ['/concepts/concept',
          {
           title: 'Develop',
           collapsable: true, // optional, defaults to true
           children: [
             ['/concepts/develop/connector', 'Connector'],
             ['/concepts/develop/expression-editor', 'Expression Editor'],
             ['/concepts/develop/path', 'Path'],
             ['/concepts/develop/statements', 'Statements'],
             ['/concepts/develop/trigger', 'Trigger']
           ]
          },
          ['/concepts/observe/observability','Observability'],
          ]
          },    
          {
            title: 'Tutorials',   // required
            path: '',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2,    // optional, defaults to 1
            children: [ ]        
       },
       ['','Videos'],
       ['','References'],
       ['','Community'],
       ['','FAQ']
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
});

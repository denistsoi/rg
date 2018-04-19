module.exports = {
  base: "/refugeek",
  locales: {
    '/': {
      title: 'Refugeek',
      lang: 'English',
      description: 'Content for Programming Classes'
    },
    // '/zh/': {
    //   title,
    // },
    // '/fr/': {
    //   title: 'Refugeek',
    //   lang: 'Français',
    //   description: 'Pour la programmation'
    // },
    // '/ar/': {
    //   title: 'Refugeek',
    //   lang: 'عربى'
    // }
  },

  themeConfig: {
    nav: [],
    locales: {
      '/': {
        selectText: 'Languages',
        nav: [
          { text: 'Home', link: '/' },
        ],
      },
      // '/fr/': {
      //   selectText: 'Languages',
      //   nav: [
      //     { text: 'Home fr', link: '/fr/' },
      //   ],
      // },
      // '/ar/': {
      //   selectText: 'Languages',
      //   nav: [
      //     { text: 'Home ar', link: '/ar/' },
      //   ],
      // }      
    }
    
  }
}
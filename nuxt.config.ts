// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['boxicons/css/boxicons.min.css'],
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
          'Open Sans': [300, 500, 700],
        },
        display: 'swap',
        
    }
})

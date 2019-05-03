import { description } from '../package'

export default {

  title: 'Liam Potter • Web Developer',

  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,shrink-to-fit=no',
    },
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'liam-potter.dev',
    },
    {
      name: 'application-name',
      content: 'liam-potter.dev',
    },
    {
      name: 'msapplication-TileColor',
      content: '#209cee',
    },
    {
      name: 'theme-color',
      content: '#209cee',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'preload',
      href: '/fonts/noto-sans-v8-latin-700',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    },
  ],
}

import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import MusicDetails from './views/music/MusicDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'movie',
          component: Movie
      },
      {
          path: '/music',
          name: 'music',
          component: Music
      },
      {
          path: '/book',
          name: 'book',
          component: Book
      },
      {
          path: '/photo',
          name: 'photo',
          component: Photo
      },
      {
          path: '/music/musicdetails',
          name: 'musicdetails',
          component: MusicDetails
      }
  ]
})

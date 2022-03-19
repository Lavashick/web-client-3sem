import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import NewsDetailsPage from './pages/NewsDetailsPage'
import ImagesPage from './pages/ImagesPage'

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsPage,
        },
        {
            path: '/news/:id',
            name: 'newsDetails',
            component: NewsDetailsPage,
        },
        {
            path: '/images',
            name: 'images',
            component: ImagesPage,
        }
    ],
    mode: 'history'
})
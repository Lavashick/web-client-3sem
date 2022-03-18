import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import NewsDetailsPage from './pages/NewsDetailsPage'

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: HomePage,
            props: true
        },
        {
            path: '/news',
            name: 'news',
            component: NewsPage,
            props: true //Разрешение на передачу props 
                        //(хранит массив ключей или свойств, которым извне можно передать значения) 
        },
        {
            path: '/news/:id',
            name: 'newsDetails',
            component: NewsDetailsPage,
            props: true
        }
    ],
    mode: 'history'
})
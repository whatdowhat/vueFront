import Vue from "vue";
import VueRouter from 'vue-router';
import Home from './views/Home';
import About from './views/About';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/',

            component: Home
        },
        {
            path: '/about',

            component: About
        }
    ]

});

export default router;

// export default{
//    new router
// }
// export default new Router({
//     routes: [
//         {
//             path: '/',
//             //name: 'home',
//             component: ()=> import('./views/Home')
//         },
//         {
//             path: '/about',

//             component: ()=> import('./views/About')
//         }
//     ]
// })


import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ServiziView from './views/ServiziView.vue';
import ContattiView from './views/ContattiView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {title: 'Pizzeria  pippo e pluto'}
    },
    {
        path: '/storia',
        name: 'storia',
        component: AboutView,
        meta: {title: 'Storia Pizzeria (max 70 caratteri)'}
    },
    {
        path: '/servizi',
        name: 'servizi',
        component: ServiziView,
        meta: {title: 'Servizi Pizzeria'}
    },
    {
        path: '/contatti',
        name: 'contatti',
        component: ContattiView,
        meta: {title: 'Contatti Pizzeria'}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Il Tuo Sito';
    next();
  });

export default router;
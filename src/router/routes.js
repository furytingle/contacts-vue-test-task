import { createRouter, createWebHistory } from 'vue-router';
const Login = () => import('../components/Login')
const ContactIndex = () => import('../components/Contact/Index')
const HelloWorld = () => import('../components/HelloWorld')

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/contacts',
        component: ContactIndex
    }
];

export const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('personal_access_token');

    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

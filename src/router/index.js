import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/home.vue"
const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    },
    {
        path: "/",
        redirect: { name: "home"} // 重定向到home
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


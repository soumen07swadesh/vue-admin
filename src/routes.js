import { createRouter, createWebHistory } from "vue-router"
import HomeSection from "@/components/HomeSection";
import LoginSection from "@/components/LoginSection";
import RegSection from "@/components/RegSection";

const routes = [
    {
        path: '/',
        name: 'HomeSection',
        component: HomeSection
    },
    {
        path: '/login',
        name: 'LoginSection',
        component: LoginSection
    },
    {
        path: '/reg',
        name: 'RegSection',
        component: RegSection
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass:'active'
})

export default router
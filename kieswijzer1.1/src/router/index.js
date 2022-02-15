import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import VraagComponent from "../components/VraagComponent";
import Resultaten from "../components/Resultaten";
import Informatie from "../components/Informatie";
import Crud from "../components/Crud";
import Login from "../components/Login";
import NieuweVraag from "../components/NieuweVraag";

const routes=[
    {
        path:'/',
        name:'/',
        component: Home
    },
    {
        path:'/vragen',
        name:'vragen',
        component: VraagComponent
    },
    {
        path:'/resultaten',
        name:'resultaten',
        component: Resultaten
    },
    {
        path:'/informatie',
        name:'informatie',
        component: Informatie
    },
    {
        path:'/crud',
        name:'crud',
        component: Crud
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/nieuw',
        name:'nieuw',
        component: NieuweVraag
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});

export default router;
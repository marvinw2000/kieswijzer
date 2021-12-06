import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import VraagComponent from "../components/VraagComponent";
import Resultaten from "../components/Resultaten";
import Informatie from "../components/Informatie";
import Crud from "../components/Crud";

const routes=[
        {
            path:'/kieswijzer',
            name:'kieswijzer',
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
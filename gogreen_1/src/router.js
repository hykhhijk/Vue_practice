import Vue from "vue";
import VueRouter from "vue-router";
import Search from "./views/Search";

Vue.use(VueRouter);             //검색해볼것

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/",component: Search},
    ]
})


export default router;
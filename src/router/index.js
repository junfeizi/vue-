import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/tabbar/Home.vue'
import Member from '@/components/tabbar/Member.vue'
import Shopcar from '@/components/tabbar/Shopcar.vue'
import Search from '@/components/tabbar/Search.vue'
import Newlist from '@/components/news/newlist.vue'
import NewInfo from '@/components/news/newinfo.vue'





Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/member',
        name: 'member',
        component: Member
    }, {
        path: '/shopcar',
        name: 'shopcar',
        component: Shopcar
    }, {
        path: '/search',
        name: 'search',
        component: Search
    }, {
        path: '/home/newslist',
        component: Newlist
    }, {
        path: '/home/newinfo/:id',
        component: NewInfo
    }, {
        path: '*',
        redirect: '/home'
    }, ],
    linkActiveClass: 'mui-active'
})
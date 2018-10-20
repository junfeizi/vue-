// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//vue-cli中引入mui
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

// 2.2 安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入时间格式化过滤器
import moment from 'moment'
Vue.filter('dateFormat', function(datastr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(datastr).format(pattern)
})

//配全局根路径
Vue.http.options.root = 'http://027xin.com:8899'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
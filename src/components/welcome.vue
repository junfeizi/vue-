<template>
    <div class="wel">
        <h3>{{msg}}</h3>
        <!-- <router-link to="/go/moun">去山里</router-link> -->
        <!-- <router-link to="/go/sea">去海里</router-link> -->
        <router-view></router-view>
        <button @click="btnHandle">弹出框</button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    name:'welcome',
    data(){
        return {
            msg:'选择地点'
        }
    },
    methods:{  
        btnHandle(){
            Toast({
                message: '提示',
                position: 'bottom',
                duration: 5000
            });
        }
    },
    
}
</script>

<style scoped>
h3{
    color: aquamarine;
}
a {
  color: cyan;
}
</style>


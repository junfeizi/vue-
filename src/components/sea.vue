<template>
<div>
    <p>这是大海</p>
    <router-link to="/go/sea/fish">下海</router-link>
    <router-view></router-view>
</div>
</template>
<script>
    export default {
        name:'sea',
        data(){
            return {
            }
        }
    }
</script>
<style scoped>
    p{
        color: cyan
    }
    a{
        color:lightblue;
    }
</style>


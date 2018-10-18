<template>
<div>
    <p>这是大山</p>
    <router-link to="/go/moun/monkey">上山</router-link>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
    name:'mountain',
    data(){
        return {
        }
    }
}
</script>
<style scoped>
    p{
        color: brown
    }
    a{
        color:lightblue;
    }
</style>

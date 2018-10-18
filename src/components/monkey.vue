<template>
    <p>{{msg}}</p>
</template>

<script>
    export default {
    name:'monkey',
    data(){
        return {
            msg:'山上有猴子'
        }
    }
}
</script>

<style scoped>
    p{
        color: rgb(199, 8, 8)
    }
</style>
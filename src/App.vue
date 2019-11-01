<template>
    <div id="app">
        <router-view />
        <offline v-show="isOffline" @online="onlineFn"/>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            isOffline: false
        }
    },
    created () {
        window.addEventListener('load', () => {
            window.addEventListener('online', () => {
                this.isOffline = false
            })
            window.addEventListener('offline', () => {
                this.isOffline = true
            })
        })
    },
    methods: {
        onlineFn () {
            this.isOffline = false
        }
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    background: #f0f0f0;
}
</style>

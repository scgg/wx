<template>
    <footer class="footer">
        <router-link to="/foo">微信</router-link>
    	<router-link to="/bar">通讯录</router-link>
    	<router-link to="/foo">发现</router-link>
    	<router-link to="/bar">我</router-link>
    </footer>
</template>

<script>
export default {
    name: 'bases',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
<template>
    <div id="app">
        <div class="main-top clearfix">
            <div class="title">微信</div>
            <div class="main-right">
                <router-link to="/search">
                    <span style="color:#fff;">
                        <svg class="icon" aria-hidden="true" style="font-size:22px;vertical-align: -0.25em;">
                            <use xlink:href="#icon-sousuo"></use>
                        </svg>
                    </span>
                </router-link>
                <span @click.stop.prevent="toggle" style="font-size:18px;">＋</span>
                <transition name="slow">
                    <div class="slow-bg" v-if="isShow" @click.stop.prevent="close">
                        <div class="main-slow">
                            <router-link to="/wx">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-sousuo"></use>
                                </svg>发起群聊
                            </router-link>
                            <router-link to="/wx">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-sousuo"></use>
                                </svg>添加朋友
                            </router-link>
                            <router-link to="/wx">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-sousuo"></use>
                                </svg>扫一扫
                            </router-link>
                            <router-link to="/wx">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-sousuo"></use>
                                </svg>首付款
                            </router-link>
                            <router-link to="/wx">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-sousuo"></use>
                                </svg>帮助与反馈
                            </router-link>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <router-view name="list"></router-view>
        <footer class="">
            <router-link class="footer-box" to="/wx">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-message"></use>
                </svg>
                <span>微信</span>
            </router-link>
            <router-link class="footer-box" to="/book">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-peoplelist"></use>
                </svg>
                <span>通讯录</span>
            </router-link>
            <router-link class="footer-box" to="/find">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-friend"></use>
                </svg>
                <span>发现</span>
            </router-link>
            <router-link class="footer-box" to="/me">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-people"></use>
                </svg>
                <span>我</span>
            </router-link>
        </footer>
    </div>
     
</template>

<script>
import Wx from './components/wx'

export default {
    name: 'app',   //模块名称
    components: {
        Wx
    },
    data(){
        return {
            isShow: false
        }
    },
    methods: {
        toggle(){
            if(this.isShow){
                this.isShow = false;
            }else{
                this.isShow = true;
            };
            // alert(1);
        },
        close(){
            this.isShow = false;
        }
    }
}
</script>

<style src="./css/iconfont.css"></style>
<style>
    .main-slow{
        position: absolute;
        right: 10px;
        top:40px;
        width: 160px;
        background: #666;
        box-shadow: 0px 0px 10px 0px #000;
    }
    .main-slow a{
        display: block;
        width: 100%;
        padding: 3px 8px;
        line-height: 30px;
        color: #fff;
        font-size: 16px;
    }
    .main-slow a .icon{
        margin-right: 10px;
        font-size: 20px;
    }
    .slow-bg{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    .slow-enter-active,.slow-leave-active{
        transition: all 0.3s linear;
    }
    .slow-enter{
        opacity: 0;
    }
    .slow-leave-active{
        opacity: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        padding-top: 40px;
    }
    .main-top{
        padding: 0 10px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        width: 100%;
        background: #666;
        color: #fff;
        height: 40px;
        line-height: 40px;
    }
    .main-top .title{
        float: left;
    }
    .main-top .main-right{
        float: right;
        position: relative;
    }
    .router-link-active{
        color: #19a940;
    }
    .footer-box .icon{
        font-size: 24px;
        display: block;
        width: 100%;
        text-align: center;
    }
    .footer-box span{
        font-size: 12px;
    }
</style>

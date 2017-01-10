import Vue from 'vue'
import App from './App'
import wx from './components/wx'
import book from './components/book'
import find from './components/find'
import me from './components/me'       // 个人组件
import user from './components/user'  //聊天组件
import detail from './components/detailPerson'  //详细资料
import friend from './components/friend'   //朋友圈
import otherfriend from './components/otherfriend'  //其他朋友的发表日志
import commentdetail from './components/commentdetail'   //日志详情
import search from './components/search'   //搜索列表

import './css/iconfont.js'   //引入字体图标

import vueSource from 'vue-resource'

import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(vueSource);
// var setUid = 250;
const routes = [
    { 
      	path: '/', 
      	components: {
      		content: App
      	},
      	children: [
      		{
      			path: '/',
            		components: {
            			list: wx
            		}
      		},{
      			path: '/wx',
            		components: {
            			list: wx
            		}
      		},{
      			path: '/book',
            		components: {
            			list: book
            		}
      		},{
                  path: '/find',
                  components: {
                      list: find
                  }
              },{
                  path: '/me',
                  components: {
                      list: me
                  }
              }
      	]
    },{
        path:'/wx/talk/:id',
        name: 'user',
        components: {
            content: user 
        }
    },{
        path:'/detail/:id',
        name: 'detail',
        components: {
            content : detail
        }
    },{
        path:'/friend',
        name: 'friend',
        components: {
            content : friend
        }
    },{
        path: '/otherfriend/:id',
        name: 'otherfriend',
        components: {
            content : otherfriend
        }
    },{
        path: '/commentdetail/:id',
        name: 'commentdetail',
        components: {
            content : commentdetail
        }
    },{
        path: '/search',
        name: 'search',
        components: {
            content : search
        }
    }
];

const router = new VueRouter({
 	routes // （缩写）相当于 routes: routes
});

const app = new Vue({
	router
}).$mount('#apps')


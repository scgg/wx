<template>
<div class="detail">
	<div class="comtent-top">
		<!-- 头部信息 -->
		<div class="comtent-box">
			<!-- <router-link @click="goBack"> -->
			<a href="javascript:;" @click="goBack">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-zuojiantou"></use>
	            </svg>
	        </a>
			<!-- </router-link> -->
		</div>
		<div class="comtent-boxs">详细资料</div>
		<div class="comtent-box">
			<router-link to="/me">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-people"></use>
	            </svg>
			</router-link>
		</div>	
	</div>
	
	<div class="detail-body">
		<div class="talk-box">
			<router-link to="/person" class="dis talk-line">
				<div class="talk clearfix detail-box">
					<div class="logo detail-item2">
						<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
					</div>
					<div class="talk-content detail-item8">
						<h3 class="name">码畜向麻生进阶</h3>
						<p class="talk-something">微信号：jian127355</p>
						<p>昵称：张三</p>
					</div>
				</div>
			</router-link>
		</div>
		
		<div class="talk-box detail-box mt15">
			<p class="detail-item2">标签</p>
			<div class="detail-item8">
				<span>soso,222</span>
			</div>
		</div>

		<div class="talk-box mt15">
			<router-link to="/wx" class="detail-router">
				<div class="detail-box" style="border-bottom:1px solid #ddd;padding-bottom:8px;">
					<p class="detail-item2" style="line-height:60px;">个人相册</p>
					<div class="detail-item8" style="font-size:0;">
						<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="" class="detail-img">
						<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="" class="detail-img">
						<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="" class="detail-img">

					</div>
				</div>
			</router-link>
			<div class="detail-more">
				<router-link to="/wx" class="detail-router">
					更多
				</router-link>
			</div>
		</div>
		
		<div class="sendMessage green mt15">
			<router-link :to="{name:'user',params:{
					id:id
				}}" class="" style="color:#fff;display:block;">发送消息</router-link>
		</div>
		<div class="sendMessage white mt15" @click="videoChat">视频聊天</div>


	</div>

	<!-- 弹窗 start -->
	<transition name="dialong">
		<div class="detail-dialong" v-if="videoShow" @click.stop.prevent="close">
			<div class="dialong-body">
				<router-link :to="{name:'user',params:{
					id:id
				}}" class="">视频聊天</router-link>
				<router-link :to="{name:'user',params:{
					id:id
				}}" class="">语音聊天</router-link>
			</div>
		</div>
	</transition>
	<!-- end -->
</div>
</template>

<script>
export default{
	name: 'detail',
	data(){
		return {
			data:[],
			videoShow: false,
			id:null   //person的id
		}
	},
	methods:{
		videoChat(){
			this.videoShow = true;
		},
		close(){
			this.videoShow = false;
		},
		goBack(){
			history.back();
		}
	},
	created(){
		this.id = this.$route.params.id;
	}
}
</script>

<style scoped>
.dialong-enter-active,.dialong-leave-active{
	transition: all 0.5s ease-out;
}
.dialong-enter{
	opacity: 0;
}
.dialong-leave-active{
	opacity: 0;
}

.detail-dialong{
	display: flex;
	align-items:center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	background: rgba(0,0,0,0.5);
}
.detail-dialong .dialong-body{
	font-size: 1rem;
    background: #fff;
    width: 85%;
    border-radius: 3px;
    -webkit-border-radius: 3px;
}
.dialong-body a{
	display: block;
	padding: 1rem 0;
	text-align: center;
}
.dialong-body a:nth-child(1){
	border-bottom: 1px solid #ddd;
}
.talk-box{
	font-size: 14px;
	padding: 10px 8px;
}
.sendMessage{
	width: 90%;
	margin:0 auto;
	padding: 12px;
    text-align: center;
    font-size: 1.125rem;
    border-radius: 3px;
}
.green{
	background: #19a940;
	color: #fff;
}
.white{
	background: #fff;
	color: #333;
	border:1px solid #ddd;
}
.detail-more{
	padding-top: 8px;
}
.detail-router{
	display: block;
}
.detail-img{
	width: 60px;
	margin-right: 8px;
}
.detail{
	padding-top: 40px;
}
.detail-box{
	display: flex;
}
.mt15{
	margin-top: 1.5rem;
}
/*.talk-box-second{
	margin-top: 2rem;
}*/
.detail-item2{
	flex: 2.5;
}
.detail-item8{
	flex: 8;
}
.detail-body{
	margin-top: 1.5rem;
}
.talk .talk-content{
	width: calc(100% - 60px);
	padding-left: 0;
    padding-top: 3px;
}
.talk .talk-content h3{
	font-size: 14px;
	margin-bottom: 0.225rem;
}
.talk .talk-content p{
	font-size: 12px;
}
.talk .logo img{
	max-width: 60px;
}
p.talk-something{
	/*margin-bottom: 0.3rem;*/
}
.comtent-top{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 40px;
	line-height: 40px;
	padding: 0.625rem;
	background: #666;
    color: #fff;
    display: flex;
    z-index: 2;
}
.comtent-box{
	flex: 1;
}
.comtent-boxs{
	flex:8;
	line-height: 22px;
}
.comtent-top .icon{
	font-size: 20px;
	color: #fff;
	vertical-align: 4px;
}
.talk .logo{
    float: left;
    width: 60px;
}
</style>
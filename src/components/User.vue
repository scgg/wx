<template>
<div class="comtent-user">
	<div class="comtent-top">
		<!-- 头部信息 -->
		<div class="comtent-box">
			<router-link to="/wx">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-zuojiantou"></use>
	            </svg>
			</router-link>
		</div>
		<div class="comtent-boxs">{{userName}}</div>
		<div class="comtent-box">
			<router-link to="/me">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-people"></use>
	            </svg>
			</router-link>
		</div>	
	</div>
	<!-- 内容框 -->
	<div class="comtents">
		<div class="comtents-talk-box" v-for="list in data">
			<div v-if="list.uid != personalId" class="display-box">
				<router-link class="comtent-box" :to="{
					name: 'detail',
					params: {
						id: list.uid
					}
				}">
					<img :src="list.uImg" alt="">
				</router-link>
				<div class="comtents-talk">
					<div class="talk-name">{{list.userName}}</div>
					<div class="talk-content talk-left">
						<i class="talk-arrow talk-arrow-left"></i>
						<span>{{ list.content }}</span>
					</div>
				</div>
			</div>
			<div v-if="list.uid == personalId" class="display-box">
				<div class="comtents-talk" style="text-align:right">
					<div class="talk-content talk-right">
						<i class="talk-arrow talk-arrow-right"></i>
						<span>{{ list.content }}</span>
					</div>
				</div>
				<router-link class="comtent-box" :to="{
					name: 'detail',
					params: {
						id: list.uid
					}
				}">
					<img :src="list.uImg" alt="">
				</router-link>
			</div>
		</div>
	</div>
	<!-- 信息发送框 -->
	<div class="comtent-talk">
		<div class="comtent-box voice">
			<a href="javascript:;">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-voice"></use>
	            </svg>
			</a>
		</div>
		<!-- <div class="talk-box"></div> -->
		<input type="text" class="talk-boxs" v-model="talkString">
		<div class="talk-some">
			<a href="javascript:;">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-emojilight"></use>
	            </svg>
			</a>
			
			<a href="javascript:;" v-if="showMessage" class="sendMessage" @click="sendMessage">发送</a>

			<a href="javascript:;" v-if="!showMessage">
				<svg class="icon" aria-hidden="true">
	                <use xlink:href="#icon-tianjia"></use>
	            </svg>
			</a>

		</div>
	</div>
</div>
</template>

<script>

export default{
	name: 'user',
	data(){
		return{
			data: [],
			talkString: null,  //发送的信息
			showMessage: false,
			personalId: null,   //自己的id
			userName: null    //用户名
		}
	},
	watch:{
		talkString : 'isShowMessage'
	},
	methods:{
		sendMessage(){  //发送信息
			//do Ajax
			var self = this;
			let personalObj = {
				"uid" : 250,
				"userName" : "李四",
				"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
				"content": this.talkString
			};
			this.data.push(personalObj);
			this.talkString = '';
			setTimeout(()=>{
				let obj = {
					"uid" : 1,
					"userName" : "张三",
					"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
					"content":"你真是个逗逼！"
				};
				self.data.push(obj);
			},1000);
		},
		isShowMessage(){   //显示发送按钮
			if(this.talkString.length >0){
				this.showMessage = true;
			}else{
				this.showMessage = false;
			}
		},
		scroolBttom(){   //滚动到底部

		}
	},
	created(){
		this.personalId = setUid;
		// this.$http.get('./static/json/talk.json',{}).then((req)=>{
		// 	if(req.ok){
		// 		console.log(req.body.data);
		// 		this.data = req.body.data;
		// 	}
		// },(req)=>{
		// 	// 出错处理
		// });

		let tem = [
			{
				"uid" : 1,
				"userName" : "张三",
				"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
				"content":"家啊多个境外俄军方都死掉积分气温计是"
			},{
				"uid" : 250,
				"userName" : "李四",
				"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
				"content":"家啊多个境外俄军方都死掉积分气温计是"
			},{
				"uid" : 1,
				"userName" : "张三",
				"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
				"content":"接送高价位够味儿我额头"
			},{
				"uid" : 250,
				"userName" : "李四",
				"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
				"content":"sdywegserwefsdf"
			},{
				"uid" : 1,
				"userName" : "张三",
				"uImg" : "http://www.wxcainiuniu.com/images/tou_03.jpg",
				"content":"日体育一会就难免文档速度放缓购房观文化的风格赛迪顾问日手动复位"
			}
		]
		this.data = tem;
		this.userName = tem[0].userName;
	}
}
</script>

<style scoped>
.display-box{
	display: flex;
	width: 100%;
}
.talk-name{
	font-size: 12px;
	padding: 0 0 0.25rem 5px;
}
.talk-content{
	background: #fff;
    padding: 7px;
    position: relative;
    display: inline-block;
    border-radius: 5px;
    max-width: calc(100% - 60px);
    text-align: left;
}
.talk-content.talk-left{
	margin-left: 8px;
}
.talk-content.talk-right{
	margin-right: 8px;
}
.comtents-talk-box{
	width: 100%;
	display: flex;
    padding: 0rem 0.625rem 1rem ;
}
.comtents-talk{
	flex: 9;
}
.comtents-talk span{
	font-size: 0.85rem;
	letter-spacing: 1px;
	line-height: 1.5rem;
}
.talk-arrow{
	position: absolute;
	display: block;
	width:8px;
	height: 8px;
	background: #fff;
	transform: rotate(45deg);
}
.talk-arrow-left{
	left: -4px;
	top:10px;
}
.talk-arrow-right{
	right: -4px;
	top:10px;
}
.comtent-box img{
	width: 35px;
}
.comtents-talk-box:nth-child(1){
	margin-top:10px;
}
.sendMessage{
	vertical-align: 6px;
    display: inline-block;
    background: #19a940;
    color: #fff;
    height: 1.875rem;
    line-height: 1.875rem;
    font-size: 0.75rem;
    border-radius: 3px;
    padding: 0 0.375rem;
}
.voice{
	text-align: right;
}
.voice .icon{
	margin-right: 4px;
}
.talk-some .icon,.comtent-box .icon{
	font-size: 1.875rem;
}
.comtents{
	padding-top: 40px;
	height: calc(100% - 40px - 2.875rem);
	padding-bottom: 2.875rem;
}
.talk-boxs{
	flex: 7;
	padding: 3px 5px;
	border: 0;
	border-bottom: 1px solid #ddd;
}
.talk-boxs:focus{
	outline: 0;
	border-bottom: 1px solid #19a940;
}
.talk-some{
	flex: 2;
}
@media screen and (max-width: 320px){
    .talk-some{
		flex: 2.5;
	}
}

.comtent-talk{
	width: 100%;
	position: fixed;
	display: flex;
	left: 0;
	bottom: 0;
	height: 30px;
	background: #fff;
	height: 2.875rem;
	padding: 6px 0;
}

.comtent-box{
	/*flex: 1;*/
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
</style>
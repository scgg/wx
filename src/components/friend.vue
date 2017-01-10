<template>
	<div class="friend-box">

		<div class="comtent-top">
			<!-- 头部信息 -->
			<div class="comtent-box">
				<a href="javascript:;" @click="goBack">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-zuojiantou"></use>
		            </svg>
		        </a>
			</div>
			<div class="comtent-boxs">朋友圈</div>
			<div class="comtent-box">
				<router-link to="/me">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-people"></use>
		            </svg>
				</router-link>
			</div>	
		</div>
	
		<div class="friend-bg">
			<div class="box-title">
				<div class="name-text">剑龙</div>

				<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				
			</div>
		</div>

		<div class="friend-list" @click="close">
			<div class="list-box" v-for="(list,index) in data">
				<div class="list-img">
					<router-link :to="{
						name: 'otherfriend',
						params: {
							id: list.uid
						}
					}">
						<img :src="list.uImg" alt="">
					</router-link>
				</div>
				<div class="list-ri">
					<div class="list-name list-mb">{{list.userName}}</div>
					<div class="list-content list-mb">{{list.content}}</div>
					<div class="list-local list-fz list-mb">{{list.local}}</div>
					<div class="list-time list-fz">{{list.time}}</div>
					<div class="list-cricle">
						<i class="top-arrow"></i>
						<div class="list-up list-default">
							<i>
								<svg class="icon" aria-hidden="true">
					                <use xlink:href="#icon-people"></use>
					            </svg>
							</i>
							<router-link :to="{
								name: 'otherfriend',
								params: {
									id: detail.uid
								}
							}" v-for="detail in list.supportArr" class="list-default">{{ detail.userName }}</router-link>
						</div>
						<div class="list-up-content" v-for="comment in list.comments">
							<router-link :to="{
								name: 'otherfriend',
								params: {
									id: comment.id
								}
							}">
								<span class="list-default">{{comment.userName}}：</span>
							</router-link>
							<span class="list-text">{{comment.content}}</span>
						</div>
						
						<!-- 评论 -->
						<div class="list-ping" @click.stop.prevent="showComment(index)">
							<svg class="icon" aria-hidden="true">
					            <use xlink:href="#icon-people"></use>
					        </svg>
						</div>
						<transition name="list-talk">	
							<div class="list-pop" v-if="list.showList">
								<span @click.stop.prevent="support(index)" v-if="list.support">
									<svg class="icon" aria-hidden="true">
							            <use xlink:href="#icon-people"></use>
							        </svg>
							        赞
								</span>
								<span @click.stop.prevent="cancleSupport(index)" v-if="!list.support">
									<svg class="icon" aria-hidden="true">
							            <use xlink:href="#icon-people"></use>
							        </svg>
							        取消
								</span>
								<span>
									<svg class="icon" aria-hidden="true">
							            <use xlink:href="#icon-people"></use>
							        </svg>
							       	评论
								</span>
							</div>
						</transition>

					</div>

				</div>
			</div>

		</div>

	</div>
</template>

<script>

export default {
	name: 'friend',
	data(){
		return {
			data:[],
			msg: "this is a test!"
		}
	},
	methods: {
		goBack(){ //返回上一级
			history.back();
		},
		close(){  //点击其他地方关闭评论
			this.closeComment();
		},
		showComment(index){   //显示评论

			if(this.data[index].showList){
				this.data[index].showList = false;
			}else{
				this.closeComment();
				this.data[index].showList = true;
			}
		},
		closeComment(){   //关闭评论
			const len = this.data.length;
			for(let i=0;i<len; i++){
				this.data[i].showList = false;
			} 
		},
		support(index){   //点赞
			var tem = this.resetSuppot(setUid);
			this.data[index].supportArr.push(tem);
			this.data[index].support = false;
			this.data[index].showList = false;
		},
		cancleSupport(index){  //取消赞
			var tem = this.data[index].supportArr;
			tem = tem.filter(function(val,index,arr) {
				if(val.uid != setUid){
					return val;
				}
			});
			this.data[index].supportArr = tem;
			this.data[index].support = true;
			this.data[index].showList = false;
		},
		resetSuppot(index){   //添加点赞数组
			let arr = {
				userName: setName,
				uid: index
			};
			return arr;
		},
		showDetailPerson(id){  //点击查看朋友的详情
			console.log(id);

		}
	},
	created(){
		// doAjax
		// this.$http.get('./static/json/friend.json').then((req)=>{
  //           if(req.ok){
  //           	this.data = req.body.data;
  //           }
  //       },(req)=>{
  //       	alert("请求出错了！")
  //       });

		var tem = [
			{
				"uid": 1,
				"id":1,
				"userName": "剑龙",
				"content": "死的感觉哦！我额我就饿，哦四大金刚四季豆...",
				"local": "深圳南山科技园",
				"time": "三天前",
				"supportArr": [
					{
						"userName" : "共轭呃",
						"uid": 1
					},{
						"userName" : "哥速度",
						"uid": 2
					},{
						"userName": "和额",
						"uid": 3
					}
				],
				"comments": [
					{
						"id":2,
						"userName": "剑龙",
						"content": "收购沃尔沃儿童温柔个问题儿童"
					}
				],
				"showList": false,
				"support": true,
				"uImg": "http://www.wxcainiuniu.com/images/tou_03.jpg"
			},{
				"uid": 2,
				"id":2,
				"userName": "开开",
				"content": "菲亚特也认为而且我认识的范围",
				"local": "深圳南山科技园",
				"time": "四天前",
				"supportArr": [
					{
						"userName" : "剑龙",
						"uid": 1
					},{
						"userName" : "ponicy",
						"uid": 2
					},{
						"userName": "看看",
						"uid": 3
					},{
						"userName": "gwer",
						"uid": 4
					}
				],
				"comments": [
					{
						"id":3,
						"userName": "剑龙",
						"content": "dfte rr tsd fer!"
					}
				],
				"showList": false,
				"support": true,
				"uImg": "http://www.wxcainiuniu.com/images/tou_03.jpg"
			},{
				"uid": 3,
				"id":3,
				"userName": "开开",
				"content": "菲亚特也认为而且我认识的范围",
				"local": "深圳南山科技园",
				"time": "四天前",
				"supportArr": [
					{
						"userName" : "共轭呃",
						"uid": 1
					},{
						"userName" : "哥速度",
						"uid": 2
					},{
						"userName": "和额",
						"uid": 3
					}
				],
				"comments": [
					{
						"id":3,
						"userName": "剑龙",
						"content": "dfte rr tsd fer!"
					},
					{
						"id":4,
						"userName": "撒旦法",
						"content": "dfte rr tsd fer!"
					}
				],
				"showList": false,
				"support": true,
				"uImg": "http://www.wxcainiuniu.com/images/tou_03.jpg"
			},{
				"uid": 4,
				"id":4,
				"userName": "poincy",
				"content": "菲亚特也认为而且我认识的范围",
				"local": "石岩应人石",
				"time": "四天前",
				"supportArr": [
					{
						"userName" : "共轭呃",
						"uid": 1
					},{
						"userName" : "哥速度",
						"uid": 2
					},{
						"userName": "和额",
						"uid": 3
					}
				],
				"comments": [
					{
						"id":3,
						"userName": "剑龙",
						"content": "dfte rr tsd fer!"
					},
					{
						"id":4,
						"userName": "撒旦法",
						"content": "dfte rr tsd fer!"
					}
				],
				"showList": false,
				"support": true,
				"uImg": "http://www.wxcainiuniu.com/images/tou_03.jpg"
			}
		];

		this.data = tem;

	}
}
</script>
<style scoped>
	.list-content{
		font-size: 0.875rem;
	}
	.list-talk-enter-active,.list-talk-leave-active{
		transition: all 0.5s ease-out;
	}
	.list-talk-enter{
		opacity: 0;
	}
	.list-talk-leave-active{
		opacity: 0;
	}
	.list-pop{
		position: absolute;
	    right: 1.5rem;
	    top: -28px;
	    background: #000;
	    color: #fff;
	    border-radius: 3px;
	}
	.list-pop span{
		display: inline-block;
	    padding: 7px 14px;
	    font-size: 12px;
	}
	.top-arrow{
		position: absolute;
	    width: 8px;
	    height: 8px;
	    background: #e6e3e3;
	    left: 8px;
	    top: -4px;
	    transform: rotate(45deg);
	}
	.list-ping{
		position: absolute;
	    right: 0;
    	top: -22px;
	}
	.list-local{
		color: #0c82bd;
	}
	.list-default{
		color: #0c82bd;
	}
	.list-cricle{
		position: relative;
		background: #e6e3e3;
	    margin-top: 10px;
	    padding-bottom: 5px;
	}
	.list-up{
		padding: 3px 7px;
		border-bottom: 1px solid #ddd;
		font-size: 0;
		margin-bottom: 2px;
	}
	.list-up i{
		font-size: 12px;
		margin-right: 3px;
	}
	.list-up a{
		font-size: 12px;
		word-break: break-all;
	    word-wrap: break-word;
	    line-height: 18px;
	}
	.list-up a:after{
		content: ",";
	}
	.list-up a:last-child:after{
		content: "";
	}
	.list-up-content{
		padding: 1px 7px;
		font-size: 0.875rem;
	}
	.list-text{
		word-break: break-all;
	    word-wrap: break-word;
	    line-height: 16px;
	}
	.list-time{
		color: #c1c1c1;
	}
	.friend-list{
		padding-top: 2.5rem;
		background: #fff;
	}
	.list-box{
		display: flex;
		border-bottom:1px solid #ddd;
		padding: 15px;
	}
	.list-img{
		flex: 1;
	}
	.list-img img{
		width: 40px;
	}
	.list-ri{
		flex: 9;
		padding-left: 14px;
		position: relative;
	}
	.list-name{
		font-size: 12px;
	}
	.list-fz{
		font-size: 12px;
	}
	.list-mb{
		margin-bottom: 5px;
	}
	.friend-bg{
		position: relative;
		background: url(http://www.wxcainiuniu.com/images/tou_03.jpg) no-repeat;
		background-size: cover;
		height: 280px;
	}
	.box-bg{
		width: 100%;
	}
	.friend-bg .box-title{
		position: absolute;
		right: 15px;
		bottom: -20px;
	}
	.friend-bg .box-title img{
		width: 60px;
		border:2px solid #fff;
	}
	.name-text{
		float:left;
		margin-top: 10px;
	    color: #fff;
	    margin-right: 10px;
	}
	.friend-box{
		padding-top: 40px;
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
</style>
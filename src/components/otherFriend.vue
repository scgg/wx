<template>
	<div class="other-friend">
		<div class="comtent-top">
			<!-- 头部信息 -->
			<div class="comtent-box">
				<a href="javascript:;" @click="goBack">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-zuojiantou"></use>
		            </svg>
		        </a>
			</div>
			<div class="comtent-boxs">剑龙</div>
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
				<router-link :to="{
					name: 'detail',
					params: {
						id: id
					}
				}">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</router-link>
			</div>
		</div>

		<div class="other-list">
			<div class="other-box clearfix" v-if="id != ''">
				<div class="other-time"><strong>今天</strong></div>
				<div class="other-content">
					dsge
				</div>
			</div>

			<div class="other-box clearfix" v-for="list in data">
				<div class="other-time">
					<strong>{{ list.dateTime }}</strong>
					<time>{{ list.monthTime }}</time>
				</div>
				<div class="other-content" v-for="day in list.child">
					<router-link :to="{
						name: 'commentdetail',
						params: {
							id: day.id
						}
					}" class="alink">
						<p class="only-text" v-if="day.logImg == ''">{{ day.content }}</p>
						<div v-if="day.logImg != ''" class="list-box">
							<div class="img">
								<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
							</div>
							<div class="other-tex">{{ day.content }}</div>
						</div>
					</router-link>
				</div>
			</div>


		</div>
		
	</div>
</template>
<script>

export default{
	name: 'otherfriend',
	data(){
		return {
			data:[],
			id: setUid
		}
	},
	methods: {
		goBack(){
			history.go(-1);
		},
		setData(tem){
			this.data = tem;
			console.log(this);
		}
	},
	created(){
		var tem = [
			{
				dateTime: '25',
				monthTime: '12月',
				child:[
					{
						logImg: 'http://www.wxcainiuniu.com/images/tou_03.jpg',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 1
					},{
						logImg: '',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 5
					}
				]
			},{
				dateTime: '24',
				monthTime: '12月',
				child: [
					{
						logImg: '',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 2
					},{
						logImg: '',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 7
					}
				]
			},{
				dateTime: '23',
				monthTime: '12月',
				child: [
					{
						logImg: '',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 2
					}
				]
			},{
				dateTime: '22',
				monthTime: '12月',
				child: [
					{
						logImg: 'http://www.wxcainiuniu.com/images/tou_03.jpg',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 2
					}
				]
			},{
				dateTime: '21',
				monthTime: '12月',
				child: [
					{
						logImg: 'http://www.wxcainiuniu.com/images/tou_03.jpg',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 2
					}
				]
			},{
				dateTime: '20',
				monthTime: '12月',
				child: [
					{
						logImg: 'http://www.wxcainiuniu.com/images/tou_03.jpg',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 2
					},{
						logImg: 'http://www.wxcainiuniu.com/images/tou_03.jpg',
						content: '我们都是好孩子，都是天真的孩子！',
						id: 2
					}
				]
			}
		];

		this.data = tem;
	}
}
</script>
<style scoped>
	.alink{
		display: block;
	}
	.list-box{
		display: flex;
		margin-bottom: 5px;
	}
	.img{
		flex: 2;
		font-size: 0;
	}
	.img img{
		width: 100%;
	}
	.other-tex{
		flex: 8;
		padding-left: 5px;
		font-size: 0.875rem;
	}
	.only-text{
	    padding: 7px;
	    background: #ececec;
	    font-size: 0.875rem;
	    line-height: 1.5;
	    word-break: break-all;
	    margin-bottom: 5px;
	}
	.other-list{
		padding-top: 2.5rem;
		background: #fff;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom: 30px;
	}
	.other-box{
		margin-top: 30px;
	}
	.other-box:nth-child(1){
		margin-top: 0;
	}
	.other-time{
		float: left;
		width: 65px;
	}
	.other-time strong{
		font-size: 24px;
	}
	.other-time time{
		font-size: 12px;
		font-weight: bold;
	}
	.other-content{
		float: right;
		width: calc(100% - 65px);
		padding-left: 10px;
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
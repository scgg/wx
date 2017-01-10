<template>
	<!-- <div class="wx">{{msg}}</div> -->
	<div class="talk-list">
		<div class="talk-box" v-for="list in dataList">
			<!-- <router-link class="talk-line" to="/talk/"> -->
			<router-link class="talk-line" :to="{
				name: 'user',
				params: {
					id: list.id
				}
			}">
				<div class="talk clearfix">
					<div class="logo">
						<img :src="list.logo" alt="">
					</div>
					<div class="talk-content">
						<h3 class="name">{{list.name}}</h3>
						<p class="talk-something">{{list.content}}</p>
						<time class="talk-time">{{list.time}}</time>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
var data = [
	{
		name: "撒旦",
		time: "昨天",
		content: "没事...睡着就好",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 1
	},{
		name: "孙悟空",
		time: "18:32",
		content: "食屎",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 2
	},{
		name: "和瑞副食店",
		time: "昨天",
		content: "几何人热腾腾儿童几何人热腾腾儿童几何人热腾腾儿童人热腾腾儿童几何人热腾腾儿童",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 3
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 4
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 5
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 6
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 7
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 8
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 9
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 10
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 11
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 12
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 13
	},{
		name: "问他",
		time: "昨天",
		content: "就突然一个电话",
		logo: "http://www.wxcainiuniu.com/images/tou_03.jpg",
		id: 14
	}
]
export default {
	name: 'wx',
	data(){
		return {
			// dataList: []
			dataList: data

		}
	},
    created(){   //本地测试，只能请求访问static里面的json,服务的设置
        // this.$http.get('./static/json/UseList.json').then((req)=>{
        //     // console.log(req.body.data);
        //     if(req.ok){
        //     	this.dataList = req.body.data;
        //     }
        // },(req)=>{
        // 	alert("请求出错了！")
        // })
    }
}
</script>

<style>
.talk-list{
	/*padding-top: 38px;*/
	padding-bottom: 48px;
}
.talk-box{
	width: 100%;
	padding: 0.5rem 0.625rem;
	background: #fafafa;
	border-bottom: 1px solid #ddd;
}
.talk-box .talk-line{
	display: block;
}
.talk .logo{
	float: left;
	width: 45px;
}
.talk .logo img{
	display: block;
	width: 100%;
}
.talk .talk-content{
	float: left;
	width: calc(100% - 45px);
	padding-left: 15px;
	padding-top: 5px;
	position: relative;
}
.talk .talk-content h3{
	font-weight: normal;
	margin-bottom: 0.525rem;
	font-size: 0.875rem;
    color: #000;
}
.talk .talk-content p{
	max-width: calc(100% - 30px);
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75rem;
    color: #7d7b7b;
}
.talk .talk-content .talk-time{
	position: absolute;
	top: 5px;
	right: 0;
	font-size: 0.75rem;
}
.main-top .main-right span{
	display: inline-block;
	width: 45px;
	text-align: center;
}
</style>
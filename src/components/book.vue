<template>
	<!-- <div class="book">{{msg}}</div> -->
	<div class="book">
		<!-- 分类  -->
		<div class="book-class">
			<router-link class="book-line" to="/newFriend">
				<div class="book-box clearfix">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
					<span>新朋友</span>
				</div>
			</router-link>
			<router-link class="book-line" to="/newFriend">
				<div class="book-box clearfix">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
					<span>群聊</span>
				</div>
			</router-link>
			<router-link class="book-line" to="/newFriend">
				<div class="book-box clearfix">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
					<span>标签</span>
				</div>
			</router-link>
			<router-link class="book-line" to="/newFriend">
				<div class="book-box clearfix">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
					<span>公众号</span>
				</div>
			</router-link>
		</div>
		<!-- 按字母排序 -->
		<div class="book-sort">
			<div class="block" v-for="list in data">
				<p class="sort-class" v-if="list.comcom">A</p>
				<router-link class="book-line" id="list.id" :to="{
					name: 'detail',
					params: {
						id: list.id
					}
				}">
					<div class="book-box clearfix">
						<!-- <img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt=""> -->
						<img :src="list.logo" alt="">
						<span>{{list.name}}</span>
					</div>
				</router-link>
				
			</div>
		</div>
	</div>
</template>

<script>
var data = [
	{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'abc',
		id:1
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'def',
		id:2
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'tyu',
		id:3
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'符合人体',
		id:4
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'根据诶',
		id:5
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'海尔看破',
		id:6
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'一人突',
		id:7
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'uity',
		id:8
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'dfyer',
		id:9
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'ahbdf',
		id:10
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'ikjt',
		id:11,
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'tyyr',
		id:12
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'uyyterw',
		id:13
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'yyyy',
		id:14
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'lkgygrsd',
		id:15
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'krrdfr',
		id:16
	},{
		logo:'http://www.wxcainiuniu.com/images/tou_03.jpg',
		name:'wqetfgsd',
		id:17
	}
]

export default{
	name: 'book',
	data(){
		return {
			msg: "this is a book!",
			data: data,
			listData:[]
		}
	},
	filters:{
		commoms: function(val){
			function common (a,b){
				if(a.localeCompare(b)){

				}
			}
			return alert(val);
		}
	},
	methods:{
		getData(){
			// console.log("ffffff");
		}
	},
	created(){  //vue2.0中加载时触发，等同于vue1.0中的ready函数;用于数据请求加载
		this.getData();
		
	}
}
</script>
<style>
.book{
	padding-bottom: 46px;
}
.book-line{
	display: block;
}
.book-box{
	width: 100%;
    padding: 0.5rem 0.625rem;
    background: #fafafa;
    border-bottom: 1px solid #ddd;
}
.book-box .logo{
	float: left;
	width: 15%;
}
.book-box img{
	vertical-align: middle;
	width: 45px;
	height: 45px;
	margin-right: 5px;
}
.sort-class{
	padding: 3px 10px;
	background: #dedede;
	color: #3c3c3c;
	font-size: 12px;
}
/*.book-box .talk-content{
	float: left;
	width: 85%;
	padding-left: 15px;
	padding-top: 5px;
	position: relative;
}
.book-box .talk-content h3{
	font-weight: normal;
	margin-bottom: 7px;
	font-size: 14px;
    color: #000;
}*/
</style>
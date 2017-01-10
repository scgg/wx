<template>
	<div class="find">
		<div class="friend paad">
			<router-link :to="{name: 'friend'}" class="dis find-box">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">朋友圈</div>
				<div class="box3 right lineh">1条</div>
			</router-link>
		</div>
		<!-- 扫一扫模块 -->
		<div class="sao paad">
			<router-link to="/sao" class="dis find-box">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">扫一扫</div>
				<div class="box3 right lineh"></div>
			</router-link>	
		</div>
		
		<!-- 娱乐模块 -->
		<div class="fun paad">
			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">购物</div>
				<div class="box3 right lineh"></div>
			</router-link>
			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">游戏</div>
				<div class="box3 right lineh box-size rela">
					<!-- <span class="fz">捕鱼来了</span> -->
					<div class="fz f-left box-text">捕鱼来了</div>
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="" class="f-right">
					<span class="abso"></span>
				</div>
			</router-link>
		</div>

	</div>
</template>

<script>
export default{
	name: 'find'
}
</script>

<style>
	body{
		height: 100%;
		width: 100%;
		background: #ddd;
	}
	.rela{
		position: relative;
	}
	.abso{
		position: absolute;
		display: block;
		width: 7px;
		height: 7px;
		background: red;
		top: -7px;
		right: -7px;
		border-radius: 100%;
		-webkit-border-radius:100%;
	}
	.f-right{
		float: right;
	}
	.f-left{
		float:left;
	}
	.dis{
		display: block;
	}
	.find{
		padding: 1.25rem 0;
	}
	.box-size{
		font-size: 0;
	}
	.left{
		text-align: left;
	}
	.right{
		text-align: right;
	}
	.center{
		text-align: center;
	}
	.box-text{
		width: calc(100% - 25px);
	}
	.fz{
		font-size: 0.875rem;
	}
	.bor-btn{
		border-bottom: 1px solid #ddd;
	}
	.bor-btn:last-child{
		border-bottom: none;
	}
	.paad{
		padding: 0 0.625rem;
		background: #fff;
	}
	.friend{
		margin-bottom: 1rem;
	}
	.sao{
		margin-bottom: 1rem;
	}
	.find-box{
		display: flex;
		display: -webkit-flex;
		font-size: 0.875rem;
		padding: 0.825rem 0.425rem;
	}
	.find-box .box{
		flex: 0.5;
	}
	.find-box .box3{
		flex: 3;
	}
	.find-box .lineh{
		line-height: 20px;
	}
	.find-box .boxs{
		flex: 3;
	}
	.find-box img{
		display: inline-block;
		width: 20px;
		border-radius: 100%;
		-webkit-border-radius: 100%;
	}
</style>
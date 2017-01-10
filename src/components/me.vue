<template>
	<!-- <div> this is a me!</div> -->
	<div class="me">
		<div class="talk-box">
			<router-link to="/person" class="dis talk-line">
				<div class="talk clearfix">
					<div class="logo">
						<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
					</div>
					<div class="talk-content">
						<h3 class="name">码畜向麻生进阶</h3>
						<p class="talk-something">微信号：jian127355</p>
						<time class="talk-time">二维码</time>
					</div>
				</div>
			</router-link>
		</div>

		<div class="block">
			<router-link :to="{
					name: 'otherfriend',
					params: {
						id: 1
					}
				}" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				
				<div class="box boxs left lineh">相册</div>
				<div class="box3 right lineh"></div>
			</router-link>

			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">收藏</div>
				<div class="box3 right lineh box-size rela">
					<!-- <span class="fz">捕鱼来了</span> -->
					<div class="fz f-left box-text">捕鱼来了</div>
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="" class="f-right">
					<span class="abso"></span>
				</div>
			</router-link>
		</div>

		<div class="block">
			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">钱包</div>
				<div class="box3 right lineh"></div>
			</router-link>

			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">卡包</div>
				<div class="box3 right lineh box-size rela">
					<!-- <span class="fz">捕鱼来了</span> -->
					<div class="fz f-left box-text">捕鱼来了</div>
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="" class="f-right">
					<span class="abso"></span>
				</div>
			</router-link>
		</div>

		<div class="block">
			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">表情</div>
				<div class="box3 right lineh"></div>
			</router-link>

		</div>

		<div class="block">
			<router-link to="/fun" class="dis find-box bor-btn">
				<div class="box left box-size">
					<img src="http://www.wxcainiuniu.com/images/tou_03.jpg" alt="">
				</div>
				<div class="box boxs left lineh">设置</div>
				<div class="box3 right lineh">帐号未保护</div>
			</router-link>

		</div>


	</div>
</template>

<script>
export default{
	name: 'me'
}
</script>
<style>
	.me{
		padding: 1.25rem 0;
	}
	.me .talk .logo{
		width: 4rem;
	}
	.me .talk .talk-content{
		width: calc(100% - 4rem);
	}
	.me .talk .talk-content h3{
		font-size: 1rem;
		margin-top: 0.4rem;
	}
	.me .talk .talk-content p{
		font-size: 0.875rem;
		color: #ddd;
	}
	.me .talk-box{
		margin-bottom: 1.125rem;
		background: #fff;
	}
	.me .block{
		background: #fff;
		padding: 0 0.625rem;
		margin-bottom: 1.125rem;
	}
</style>



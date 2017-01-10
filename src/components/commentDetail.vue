<template>
	<div class="comment-detail">
		
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


	</div>
</template>
<script>
export default{
	name: 'commentdetail',
	data(){
		return {
			data:[]
		}
	},
	methods: {
		goBack(){
			history.go(-1);
		}
	}
}
</script>
<style scoped>
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
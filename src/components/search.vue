<template>
	<div class="search">

		<div class="comtent-top">
			<div class="comtent-box">
				<a href="javascript:;" @click="goBack">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-zuojiantou"></use>
		            </svg>
		        </a>
			</div>
			<div class="comtent-boxs">
				<a href="javascript:;" @click="goBack" class="go-search">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-sousuo"></use>
		            </svg>
		        </a>
				<input type="text" name="" id="searchs" v-model="searching" class="sometext" @click="enterSearch()">
				<a href="javascript:;" @click="clearSearch" class="cleartext">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-voice"></use>
		            </svg>
		        </a>
			</div>
			<!-- <div class="comtent-box">
				<router-link to="/me">
					<svg class="icon" aria-hidden="true">
		                <use xlink:href="#icon-people"></use>
		            </svg>
				</router-link>
			</div>	 -->
		</div>
		
	</div>
</template>
<style scoped>
	.go-search{
		font-size: 16px;
	}
	.sometext{
		padding-left: 25px;
		padding-right: 30px;
		border:0;
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #666;
		background: #666;
		font-size: 14px;
	}
	.sometext:focus{
		border-bottom: 1px solid #19a940;
		outline: 0;
		color: #fff;
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
		position: relative;
		top: -0.3125rem;
	}
	.comtent-boxs a{
		position: absolute;
		top: 0.375rem;
	}
	.cleartext{
		right: 0;
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
<script>
export default{
	name: 'search',
	data(){
		return {
			data:[],
			searching: null   //搜索字段
		}
	},
	methods: {
		goBack(){
			history.go(-1)
		},
		clearSearch(){  //清除搜索框数据
			this.searching = '';
			this.enterSearch();
		},
		enterSearch(){
			var tar = document.getElementById('searchs');
			tar.focus();
		}
	},
	created(){
		setTimeout(()=>{
			this.enterSearch();
		},0)
	}
}
</script>
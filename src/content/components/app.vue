<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:40:31
 * @LastEditTime: 2021-01-13 10:48:01
 * @Copyright: 1.0.0
-->
<template>
	<div class="content_page">
		sulg-plugin-cli content
		<div class="content_page_main">
			sulg-plugin-cli content main
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.content_page{
    background: #fff;
    box-shadow: 0 0 5px #999;
    padding: 10px;
		color: red;
		position: fixed;
		z-index: 100001;
		right: 0;
		bottom: 0;
		.content_page_main{
			color: green;
		}
	}
</style>



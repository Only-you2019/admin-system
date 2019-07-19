<template>


		<el-container class="container">
			<!-- 头部 -->
			<el-header style="text-align: right; font-size: 12px">
				<xh-head></xh-head>
			</el-header>

			<el-container>
				<!-- 左侧导航栏 -->
				<el-aside width="200px" class="aside">
					<xh-aside></xh-aside>
				</el-aside>
				<!-- 右侧主体 -->
				<el-main class="el-main">
					<div class="books-science">
						<div class="Books-scients">
							<div class="Books-scients-box">
								<books-science-slect></books-science-slect>
								<books-science-find></books-science-find>
								<books-science-table></books-science-table>
							</div>
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>


</template>

<script>
	import XhHead from "../components/common/XhHead"
	import XhAside from "../components/common/XhAside"
	import BooksScienceSlect from "../components/books-science/books-science-slect.vue"
	import BooksScienceFind from "../components/books-science/books-science-find.vue"
	import BooksScienceTable from "../components/books-science/books-science-table.vue"
	export default{
		name:"books-science",
		components:{
			'XhHead':XhHead,
			'XhAside':XhAside,
			"books-science-slect":BooksScienceSlect,
			"books-science-find":BooksScienceFind,
			"books-science-table":BooksScienceTable
		}
	}
</script>

<style scoped>
	.el-header {
		background-color: #b3c0d1;
		color: #333;
		line-height: 60px;
		text-align: right; font-size: 12px
	}
	.Books-scients{
		width: 100%;
		height: 100%;
	}
	.Books-scients-box{
		width: 97%;
		border: 1px solid silver;
		margin: 0 auto;
	}
</style>

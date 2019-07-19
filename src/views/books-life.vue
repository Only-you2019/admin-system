<template>
	<div>
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
					<div class="Books-scients">
						<div class="Books-scients-box">
							<books-life-slect></books-life-slect>
							<books-life-find></books-life-find>
							<books-life-table></books-life-table>
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>

</template>

<script>
	import XhHead from "../components/common/XhHead"
	import XhAside from "../components/common/XhAside"
	import BooksLifeSlect from "../components/books-life/books-life-slect.vue"
	import BooksLifeFind from "../components/books-life/books-life-find.vue"
	import BooksLifeTable from "../components/books-life/books-life-table.vue"
	export default{
		name:"books-life",
		components:{
			'XhHead':XhHead,
			'XhAside':XhAside,
			"books-life-slect":BooksLifeSlect,
			"books-life-find":BooksLifeFind,
			"books-life-table":BooksLifeTable
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

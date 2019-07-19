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
							<books-econmic-slect></books-econmic-slect>
							<books-econmic-find></books-econmic-find>
							<books-econmic-table></books-econmic-table>
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
	import BooksEconmicSlect from "../components/booksEconmic/books-econmic-slect.vue"
	import BooksEconmicFind from "../components/booksEconmic/books-econmic-find.vue"
	import BooksEconmicTable from "../components/booksEconmic/books-econmic-table.vue"
	export default{
		name:"books-econmic",
		components:{
			'XhHead':XhHead,
			'XhAside':XhAside,
			"books-econmic-slect":BooksEconmicSlect,
			"books-econmic-find":BooksEconmicFind,
			"books-econmic-table":BooksEconmicTable
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

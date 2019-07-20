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
					<div class="Books-scients">
						<div class="Books-scients-box">
							<books-life-slect @searchBook="searchBook" ></books-life-slect>
							<books-life-find></books-life-find>
							<books-life-table :tableData="tableData"></books-life-table>
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>


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
		},
		data(){
			return{
			tableData:[],
			book_new:{},
	        new_tableData: [
				{
				  id: "1",
				  pic: '森式出版社',
				  booksName:'系统电子兼容',
				  author:'赵辉',
				  price:'56.05',
				  sort:'科学技术',
				  
				},
				{
				  id: "2",
				  pic: '森式出版社',
				  booksName:'人工电磁结构天线理论与设计',
				  author:'曹文权',
				  price:'45.6',
				  sort:'科学技术'
				}, 
				{
				  id: "3",
				  pic: '森式出wr版社',
				  booksName:'盘龙',
				  author:'我爱rrwe吃西红柿',
				  price:'100',
				  sort:'科学技术'
				}, 
				{
				  id: "4",
				  pic: '森式出版社',
				  booksName:'盘龙',
				  author:'我爱吃西红柿',
				  price:'1023000',
				  sort:'科学技术'
				}
				]
			}
		},
		created(){
			this.tableData=this.new_tableData
		},
		methods:{
			//查询书籍
			searchBook(book){
				this.book_new=book
				console.log(this.book_new)
			  let number = this.book_new.number.trim().length;
			  let title = this.book_new.title.trim().length;
			  let author =this.book_new.author.trim().length;
			  let price =this.book_new.price.trim().length;
			  let arr = this.new_tableData.filter(item=>{
			    return  (!number?1:item.id==this.book_new.number) &&
			            (!title?1:item.booksName==this.book_new.title) &&
			            (!author?1:item.author==this.book_new.author) &&
			            (!price?1:item.price==this.book_new.price)
			  })
			  this.tableData = arr
			
			}
		}
	}
</script>

<style scoped>
	.el-container{
		height: 100%;
	}
	.el-header {
		  background-color: #111;
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

  .aside{


    background-color: #222324;

    /* border-right: 1px solid #131e26; */

  }

  .el-main{


    background-color: #ecf0f5;

  }

</style>

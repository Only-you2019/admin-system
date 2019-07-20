<template>

			<div class="Books-scients-box-slecte">
			    <input type="text" v-model="book.number"  placeholder="ID" autocomplete="off" class="Books-scients-box-slecte-input">
				<input type="text" v-model="book.title" placeholder="书名" autocomplete="off" class="Books-scients-box-slecte-input">
				<input type="text" v-model="book.author" placeholder="作者" autocomplete="off" class="Books-scients-box-slecte-input">
				<input type="text" v-model="book.price" placeholder="价格" autocomplete="off" class="Books-scients-box-slecte-input">
			    <button class="Books-scients-box-slecte-query" @click="searchBook">查询</button>
			</div>
</template>

<script>
	export default{
		name:"books-life-slect",
		data(){
			return{
				book:{
					number:"",
					title:"",
					author:"",
					price:"",
				}
			}
		},
		methods:{
			searchBook(book){
				this.$emit("searchBook",this.book)
			}
		}
	}
</script>

<style scoped>

	.Books-scients-box-slecte{
		width: 90%;
		margin-left: 60px;
		margin-bottom: 30px;
		margin-top: 20px !important;
		display: flex;
		align-items: center;
		flex: 1;
		flex-wrap:wrap ;
	}
	.Books-scients-box-slecte-input{
		display: block;
		height: 30px;
		border: 1px solid #C0C0C0;
		margin-right: 10px;
		font-size: 15px;
		padding-left: 10px;
	}
	.Books-scients-box-slecte-query{
		width: 70px;
		height: 30px;
		border: 0;
		background:red ;
		color:#ffffff ;
		font-size: 13px;
	}
</style>

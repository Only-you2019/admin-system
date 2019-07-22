<template>
	<div>
		<div  class="Books-scients">
			<div class="Books-scients-box-slecte">
				<input v-model="Id" type="text"  placeholder="ID" autocomplete="off" class="Books-scients-box-slecte-input">
					<input v-model="BooksName" type="text"  placeholder="书名" autocomplete="off" class="Books-scients-box-slecte-input">
					<input v-model="Author" type="text"  placeholder="作者" autocomplete="off" class="Books-scients-box-slecte-input">
					<input v-model="Price" type="text"  placeholder="价格" autocomplete="off" class="Books-scients-box-slecte-input">
					<input v-model="Pic" type="text"  placeholder="出版社" autocomplete="off" class="Books-scients-box-slecte-input">
					<input v-model="Sort" type="text"  placeholder="类别" autocomplete="off" class="Books-scients-box-slecte-input">
				    <button class="Books-scients-box-slecte-query" @click="handleEdit(),GiveRow()" >增加</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Kong from "../../kong.js"
	export default{
		name:"books-life-find",
		data(){
			return{
				AddRow:"",
				BooksName:"",
				Author:"",
				Price:"",
				Pic:"",
				Sort:"",
				Id:""
			}
		},
		methods:{
			 handleEdit() {
				this.AddRow={	
					id:this.Id,
					pic: this.Pic,
					booksName:this.BooksName,
					author:this.Author,
					price:this.Price,
					sort:this.Sort,
				}
			  console.log(this.AddRow)
			  this.Id=""
			  this.Pic=""
			  this.BooksName=""
			  this.Author=""
			  this.Price=""
			  this.Sort=""
			},
			GiveRow(){
				Kong.$emit("give",this.AddRow)
			}
		}
	}
</script>

<style scoped>
	.Books-scients{
		width: 100%;
		height: 100%;
		display: flex;
	}
	.Books-scients-box-slecte{
		width: 90%;
		display: flex;
		margin-left: 60px;
		margin-bottom: 30px;
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
		margin-bottom: 5px;
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

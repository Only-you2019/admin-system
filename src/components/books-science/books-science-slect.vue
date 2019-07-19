<template>
	<div>
			<div class="Books-scients-box-slecte">
			    <input type="text"  placeholder="ID" autocomplete="off" class="Books-scients-box-slecte-input">
				<input type="text"  placeholder="书名" autocomplete="off" class="Books-scients-box-slecte-input">
				<input type="text"  placeholder="作者" autocomplete="off" class="Books-scients-box-slecte-input">
				<input type="text"  placeholder="价格" autocomplete="off" class="Books-scients-box-slecte-input">
			    <button class="Books-scients-box-slecte-query" >查询</button>
			</div>
	</div>
</template>

<script>
	export default{
		name:"books-science-slect"
	}
</script>

<style scoped>
	.Books-scients{
		width: 100%;
		height: 100%;
	}
	.Books-scients-box{
		width: 97%;
		border: 1px solid silver;
		margin: 0 auto;
	}
		.Books-scients-box-slecte{
		width: 90%;
		margin: 10px auto ;
		display: flex;
	}
	.Books-scients-box-slecte-input{
		display: block;
		width: 140px;
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

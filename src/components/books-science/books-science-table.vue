<template>
	<div >
			<div class="Books-scients-box-table">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border @selection-change="handleSelectionChange">
                    <el-table-column type="selection" >
                    </el-table-column>
                     <el-table-column  prop="id" label="ID" width="90">
                    </el-table-column>
					<el-table-column  prop="booksName" label="书名" >
					</el-table-column>
					 <el-table-column  prop="author" label="作者" width="150">
					</el-table-column>
					<el-table-column  prop="price" label="价格" width="100">
					</el-table-column>
                    <el-table-column prop="pic"  label="出版社" width="150">
                    </el-table-column>
                    <el-table-column  prop="sort" label="类别" width="150">
                    </el-table-column>
					<el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button size="mini" @click="dialogVisible=true,handleEdit(scope.$index)">编辑</el-button>
						  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                                id:<input v-model="ID" type="text" placeholder="id"><br>
								书名:<input v-model="BooksName" type="text" placeholder="书名"><br>
								作者:<input v-model="Author" type="text" placeholder="作者"><br>
								价格:<input v-model="Price" type="text" placeholder="价格"><br>
                                出版社:<input v-model="Pic" type="text" placeholder="出版社"><br>
								类别:<input v-model="Sort" type="text" placeholder="类别"><br>
                                <span slot="footer" class="dialog-footer">
                                  <el-button @click="dialogVisible = false">取 消</el-button>
                                  <el-button type="primary" @click="dialogVisible = false,saveData()">保存</el-button>
                                </span>
                          </el-dialog>
						  
                          <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
			</div>
		    <div class="Books-scients-box-page">
				<!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"> -->
	  <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </el-pagination>
			</div>
	</div>
</template>

<script>
	import Kong from "../../kong.js"
	export default{
		name:"books-life-table",
		props:["tableData","new_tableData"],
		data() {
        return {
			multipleSelection: [],
			dialogVisible:false,
			ID:"",
			Pic:"",
			BooksName:"",
			Author:"",
			Price:"",
			Sort:"",
			// 编辑
			changeRow:"",
			Index:""
        }
    },
	mounted(){
		Kong.$on("give",(data)=>{
			console.log(data)
			this.tableData.push(data)
		})
	},
	methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
	  // 编辑
	  handleEdit(index) {
		console.log(this.tableData[index])
		this.Index=index
		this.ID=this.tableData[index].id
		this.Pic=this.tableData[index].pic
		this.BooksName=this.tableData[index].booksName
		this.Author=this.tableData[index].author
		this.Price=this.tableData[index].price
		this.Sort=this.tableData[index].sort
		
      },
	  saveData(){
		  this.changeRow={
		  	id: this.ID,
		  	pic: this.Pic,
		  	booksName:this.BooksName,
		  	author:this.Author,
		  	price:this.Price,
		  	sort:this.Sort
		  }
		  console.log(this.changeRow)
		  console.log(this.tableData[this.Index])
		  this.tableData[this.Index]=this.changeRow
		  this.ID=""
		  this.Pic=""
		  this.BooksName=""
		  this.Author=""
		  this.Price=""
		  this.Sort=""
	  },
	  handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
	  // 删除
     deleteRow(index) {
		 console.log(index)
     		this.$confirm('确定删除?', '提示', {
     		  confirmButtonText: '确定',
     		  cancelButtonText: '取消',
     		  type: 'warning',
     		  center: true
     		}).then(() => {
     			 this.tableData.splice(index, 1);
     		  this.$message({
     		    type: 'success',
     		    message: '删除成功!'
     		  });
     		}).catch(() => {
     		  this.$message({
     		    type: 'info',
     		    message: '已取消删除'
     		  });
     		});
      },
	  // 分页
// 	   handleSizeChange(val) {
// 	    console.log(`每页 ${val} 条`);
// 	  },
// 	  handleCurrentChange(val) {
//         // console.log(`当前页: ${val}`);
// 		this.$emit("handleCurrentChange",this.val)    
//       },
//分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.$emit("handleCurrentChange",val)
      },

    }
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

	.Books-scients-box-table{
		margin:30px auto;
		width: 90%;
	}
	.Books-scients-box-table .el-table[data-v-44fffab0]{
		overflow-y: auto;
	}
	.Books-scients-box-page{
		margin:  30px auto;
		width: 90%;
	}
</style>

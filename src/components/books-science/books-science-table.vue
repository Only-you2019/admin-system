<template>
	<div >
			<div class="Books-scients-box-table">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                     <el-table-column  prop="date" label="ID" width="140">
                    </el-table-column>
                    <el-table-column prop="pic"  label="出版社" width="180">
                    </el-table-column>
                    <el-table-column  prop="booksName" label="书名" width="140">
                    </el-table-column>
                    <el-table-column  prop="author" label="作者" >
                    </el-table-column>
                    <el-table-column  prop="price" label="价格">
                    </el-table-column>
                    <el-table-column  prop="sort" label="类别">
                    </el-table-column>
					<el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
			</div>
		    <div class="Books-scients-box-page">
				<el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
			</div>
	</div>
</template>

<script>
	export default{
		name:"books-science-table",
		data() {
        return {
            tableData: [{
              date: '01',
              pic: '森式出版社',
			  booksName:'系统电子兼容',
			  author:'赵辉',
			  price:'56.05',
			  sort:'科学技术',
			  
            }, {
              date: '02',
              pic: '森式出版社',
              booksName:'人工电磁结构天线理论与设计',
              author:'曹文权',
              price:'45.6',
              sort:'科学技术'
            }, {
              date: '03',
              pic: '森式出版社',
              booksName:'盘龙',
              author:'我爱吃西红柿',
              price:'1000000',
              sort:'科学技术'
            }, {
              date: '04',
              pic: '森式出版社',
              booksName:'盘龙',
              author:'我爱吃西红柿',
              price:'1000000',
              sort:'科学技术'
            }],
			multipleSelection: []
        }
    },
	methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
	  handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
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
		margin:  30px auto;
		width: 90%;
	}
	.Books-scients-box-page{
		margin:  30px auto;
		width: 90%;
	}
</style>

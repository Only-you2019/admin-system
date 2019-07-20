<template>
    <div>
        <el-table
                :data="tableDataThree"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="时间"
            >
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="订单编号"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="购买人">
            </el-table-column>
            <el-table-column
                    prop="money"
                    label="金额"
                    width="80px"
            >
            </el-table-column>
            <el-table-column
                    prop="things"
                    label="购买物品">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "personalCollectionMain",
        props:['main','tableDataThree'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
.el-header{

    background-color: #111;

  }

  .aside{

    height: 700px;

    background-color: #222324;

    /* border-right: 1px solid #131e26; */

  }

  .el-main{

    height:700px; 

    background-color: #ecf0f5;

  }
</style>
<template>
    <div>
        <el-table
                :data="tableDatatwo"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="collect"
                    label="收藏">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "IndividualOrdersMain",
        props:['main','tableDatatwo'],
        data(){
            return{

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
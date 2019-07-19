<template>
    <div>
        <el-table
                :data="tableData"
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
        props:['main'],
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    collect: '水浒传'
                }, {
                    date: '2016-05-04',
                    name: '王大虎',
                    collect: '西游记'
                }, {
                    date: '2016-05-01',
                    name: '王二虎',
                    collect: '三国演义'
                }, {
                    date: '2016-05-03',
                    name: '王四虎',
                    collect: '聊斋'
                }]
            }

        }
    }
</script>

<style scoped>

</style>
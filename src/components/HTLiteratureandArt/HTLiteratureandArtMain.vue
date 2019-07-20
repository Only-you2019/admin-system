<template>
    <div class="HTLiteratureandArtMain">
        <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
                    label="ID">
                <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="书名">
                <template slot-scope="scope">
                    <span>{{ scope.row.Title }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="出版社">
                <template slot-scope="scope">
                    <span>{{ scope.row.Press }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="作者">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="价格">
                <template slot-scope="scope">
                    <span>{{ scope.row.Price }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="类别">
                <template slot-scope="scope">
                    <span>{{ scope.row.category }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                           >编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click.native.prevent="deleteRow(scope.$index)"
                           >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "HTLiteratureandArtMain",
        props:["tableData"],
        data() {
            return {

            }
        },
        methods: {
            deleteRow(index){
                this.$emit("deleteRow",index)
            }
        }
    }
</script>

<style scoped>
    .HTLiteratureandArtMain{
        padding: 20px 100px;
        height: 700px;
        overflow-y: auto;
    }
</style>

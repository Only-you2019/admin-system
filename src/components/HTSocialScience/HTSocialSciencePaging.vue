<template>
    <div class="HTSocialSciencePaging">
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="5"
                    layout="prev, pager, next, jumper"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HTSocialSciencePaging",
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.$emit("handleCurrentChange",val)
            },

        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        }
    }
</script>

<style scoped>
    .HTSocialSciencePaging{
        padding: 20px 100px;
    }
</style>

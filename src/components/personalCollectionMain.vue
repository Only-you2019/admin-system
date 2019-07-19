<template>
    <div>
        <el-table
                :data="tableData"
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
        props:['main'],
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    number:'101234214141',
                    money:'59',
                    things:'水浒传'
                },
                    {
                        date: '2016-05-04',
                        name: '王大虎',
                        number:'101234214141',
                        money:'59',
                        things:'水浒传'

                    },
                    {
                        date: '2016-05-01',
                        name: '王小狮',
                        number:'101234214141',
                        money:'59',
                        things:'水浒传'

                    },
                    {
                        date: '2016-05-03',
                        name: '王大狮',
                        number:'101234214141',
                        money:'59',
                        things:'水浒传'

                    },
                    {
                        date: '2016-05-03',
                        name: '王小狗',
                        number:'101234214141',
                        money:'59',
                        things:'水浒传'

                    },
                    {
                        date: '2016-05-03',
                        name: '王老虎',
                        number:'101234214141',
                        money:'59',
                        things:'水浒传'

                    },
                    {
                        date: '2016-05-03',
                        name: '王大狗',
                        number:'101234214141',
                        money:'59',
                        things:'水浒传'

                    },

                ]
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    >
            </el-table-column>

            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>

            <el-table-column
                    prop="province"
                    label="省份"
                    width="120">
            </el-table-column>

            <el-table-column
                    prop="city"
                    label="市区"
                    >
            </el-table-column>

            <el-table-column
                    prop="address"
                    label="地址"
                    >
            </el-table-column>

            <el-table-column
                    prop="zip"
                    label="邮编"
                    >
            </el-table-column>

            <el-table-column
                    prop="sex"
                    label="性别"
                    >
            </el-table-column>

            <el-table-column
                    prop="datas"
                    label="下单日期"
                    >
            </el-table-column>

            <el-table-column
                    prop="phone"
                    label="手机"
                    >
            </el-table-column>

            <el-table-column
                    prop="thing"
                    label="购买产品"
                    >
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="200px"
                    >
                <template class="tem" slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            @click="handleNewadd(scope.$index, scope.row)">新增</el-button>
                    <el-button class="elbtn"
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "personalInformationMain",
        props:['main'],
        data(){
            return{
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'男',
                        datas:'2019-7-10',
                        phone:'12345678910',
                        thing:'西游记'

                    },
                    {
                        date: '2016-06-02',
                        name: '王大虎',
                        province: '北京',
                        city: '海淀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'女',
                        datas:'2019-7-7',
                        phone:'12345678910',
                        thing:'三国演义'
                    },
                    {
                        date: '2016-07-04',
                        name: '王大狮',
                        province: '西安',
                        city: '雁塔区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'男',
                        datas:'2019-7-2',
                        phone:'12345678910',
                        thing:'红楼梦'
                    }, {
                        date: '2016-08-01',
                        name: '王小狮',
                        province: '西安',
                        city: '未央区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'女',
                        datas:'2019-7-9',
                        phone:'12345678910',
                        thing:'水浒传'
                    },
                    {
                        date: '2016-09-01',
                        name: '王小豹',
                        province: '西安',
                        city: '长安区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'女',
                        datas:'2019-7-9',
                        phone:'12345678910',
                        thing:'水浒传'
                    },
                    {
                        date: '2016-10-01',
                        name: '王大豹',
                        province: '西安',
                        city: '碑林区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'女',
                        datas:'2019-7-9',
                        phone:'12345678910',
                        thing:'水浒传'
                    },
                    {
                        date: '2016-12-01',
                        name: '王小狗',
                        province: '西安',
                        city: '西咸新区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'女',
                        datas:'2019-7-9',
                        phone:'12345678910',
                        thing:'水浒传'
                    },
                    {
                        date: '2016-01-01',
                        name: '王二狗',
                        province: '西安',
                        city: '高新区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id:6127722199719961995,
                        sex:'女',
                        datas:'2019-7-9',
                        phone:'12345678910',
                        thing:'水浒传'
                    },
                ],
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleNewadd(index,row){
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>

    .el-button+.el-button{
        width: 50px;
    }
</style>
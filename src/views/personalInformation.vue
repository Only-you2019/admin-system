<template>
    <div class="personalInformation">
        <el-container class="container">
            <!-- 头部 -->
            <el-header style="text-align: right; font-size: 12px">
                <xh-head></xh-head>
            </el-header>
            <el-container>
                <!-- 左侧导航栏 -->
                <el-aside width="200px" class="aside">
                    <xh-aside></xh-aside>
                </el-aside>
                <!-- 右侧主体 -->
                <el-main class="el-main">
					<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
					  <el-breadcrumb-item>个人信息</el-breadcrumb-item>
					</el-breadcrumb>
                    <el-input class="messages_zyb" v-model="userName" placeholder="客户姓名"></el-input>
                    <button class="btnzyb" @click="search()">查询</button>
                    <houtai-main :main="main" :tableData="tableData" @deleteRow="deleteRow"></houtai-main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import main from '../components/personalInformationMain'
    export default {
        name: "personalInformation",
        components:{
            'XhHead':XhHead,
            'XhAside':XhAside,
            'houtai-main':main
        },
        data() {
            return {
                userName: '',
                header:'',
                main:'',
                tableData_w: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '男',
                        datas: '2019-7-10',
                        phone: '12345678910',
                        thing: '西游记'
                    },
                    {
                        date: '2016-06-02',
                        name: '王大虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '女',
                        datas: '2019-7-7',
                        phone: '12345678910',
                        thing: '三国演义'
                    },
                    {
                        date: '2016-07-04',
                        name: '王大狮',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '男',
                        datas: '2019-7-2',
                        phone: '12345678910',
                        thing: '红楼梦'
                    },
                    {
                        date: '2016-08-01',
                        name: '王小狮',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '女',
                        datas: '2019-7-9',
                        phone: '12345678910',
                        thing: '水浒传'
                    },
                    {
                        date: '2016-09-01',
                        name: '王小豹',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '女',
                        datas: '2019-7-9',
                        phone: '12345678910',
                        thing: '水浒传'
                    },
                    {
                        date: '2016-10-01',
                        name: '王大豹',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '女',
                        datas: '2019-7-9',
                        phone: '12345678910',
                        thing: '水浒传'
                    },
                    {
                        date: '2016-12-01',
                        name: '王小狗',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '女',
                        datas: '2019-7-9',
                        phone: '12345678910',
                        thing: '水浒传'
                    },
                    {
                        date: '2016-01-01',
                        name: '王二狗',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333,
                        id: 6127722199719961995,
                        sex: '女',
                        datas: '2019-7-9',
                        phone: '12345678910',
                        thing: '水浒传'
                    },
                ],
                tableData:[]
            }
        },
        created(){
            this.tableData=this.tableData_w
        },
        methods:{
            search(){
                let name=this.userName.trim().length;
                let arr=this.tableData_w.filter(item=>{
                    return (!name?1:item.name==this.userName)
                })
                this.tableData=arr
            },
            deleteRow(index, rows) {
                this.$confirm('真的要删除吗？')
                    .then(_ => {
                        rows.splice(index, 1);
                    })
                    .catch(_ => {
                    });
            },
        }
    }
</script>

<style scoped>
    .el-header{

        background-color: #111;

    }

    .aside{

        /*height: 700px;*/

        background-color: #222324;

        /* border-right: 1px solid #131e26; */

    }

    .el-main{

        /*height:700px;*/

        background-color: #ecf0f5;

    }
    a{
        display: inline-block;
        width: 80px;
        height: 35px;
        margin-left: 20px;
        text-decoration: none;
    }
    .messages_zyb{
        width: 200px;
        height: 40px;
        margin-right: 30px;
        margin-left: 20px;

    }
    .btnzyb{
		margin-top: 20px;
        width: 80px;
        height: 35px;
        border-radius: 5px;
        background-color: #d91715;
        color: #ffffff;
        font-size: 18px;
        border: none;
        outline: none;
        margin-bottom: 30px;
    }
</style>

<template>
    <div class="IndividualOrders">
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
					  <el-breadcrumb-item>个人收藏</el-breadcrumb-item>
					</el-breadcrumb>
			
                    <el-input class="messages_zyb" v-model="userName" placeholder="客户姓名"></el-input>

                    <button class="btnzyb" @click="search()">查询</button>

                    <!--<router-link to="/personalCollection">个人订单</router-link>-->

                    <!--<router-link to="/personalInformation">个人信息</router-link>-->
                    <houtaiCollectMain :main="main" :tableDatatwo="tableDatatwo"></houtaiCollectMain>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import main from '../components/IndividualOrdersMain'

    export default {
        name: "IndividualOrders",
        components: {
            'XhHead': XhHead,
            'XhAside': XhAside,
            'houtaiCollectMain': main

        },
        data() {
            return {
                userName: '',
                main: '',
                tableData_i: [
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    collect: '水浒传'
                 },
                    {
                    date: '2016-05-04',
                    name: '王大虎',
                    collect: '西游记'
                },
                    {
                    date: '2016-05-01',
                    name: '王二虎',
                    collect: '三国演义'
                },
                    {
                    date: '2016-05-03',
                    name: '王四虎',
                    collect: '聊斋'
                }
            ],
                tableDatatwo:[]
            }
        },
        created(){
            this.tableDatatwo=this.tableData_i
        },
        methods:{
            search(){
                let name=this.userName.trim().length;
                let arr=this.tableData_i.filter(item=>{
                    return (!name?1:item.name==this.userName)
                })
                this.tableDatatwo=arr
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

    a {
        display: inline-block;
        width: 80px;
        height: 35px;
        margin-left: 20px;
        text-decoration: none;
    }

    .messages_zyb {
        width: 200px;
        height: 40px;
        margin-right: 30px;
        margin-left: 20px;

    }

    .btnzyb {
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

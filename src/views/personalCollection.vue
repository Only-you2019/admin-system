<template>
    <div class="personalCollection">
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
					  <el-breadcrumb-item>个人订单</el-breadcrumb-item>
					</el-breadcrumb>
                    <el-input class="messages_zyb" v-model="userName" placeholder="客户姓名"></el-input>

                    <button class="btnzyb"  @click="search()">查询</button>

                    <!--<router-link to="/personalInformation">个人信息</router-link>-->

                    <!--<router-link to="/IndividualOrders">个人收藏</router-link>-->

                    <houtaiOrderMain :main="main" :tableDataThree="tableDataThree"></houtaiOrderMain>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    //引入header子组件
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import main from "../components/personalCollectionMain"

    export default {
        name: "personalCollection",
        components:{
            'XhHead':XhHead,
            'XhAside':XhAside,
            'houtaiOrderMain':main
        },
        data(){
            return{
                main:'',
                header:'',
                userName:'',
                tableData_t: [{
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

                ],
                tableDataThree:[]
            }
        },
        created(){
            this.tableDataThree=this.tableData_t
        },
        methods:{
            search(){
                let name=this.userName.trim().length;
                let arr=this.tableData_t.filter(item=>{
                    return (!name?1:item.name==this.userName)
                })
                this.tableDataThree=arr
            }
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

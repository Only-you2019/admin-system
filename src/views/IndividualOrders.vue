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
                    <el-input class="messages_zyb" v-model="input" placeholder="客户姓名"></el-input>

                    <button class="btnzyb">查询</button>

                    <router-link to="/personalCollection">个人订单</router-link>

                    <router-link to="/personalInformation">个人信息</router-link>
                    <houtaiCollectMain :main="main"></houtaiCollectMain>
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
                main: '',
                input: ''

            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
        text-align: right; font-size: 12px
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

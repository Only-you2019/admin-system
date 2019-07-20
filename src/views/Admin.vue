<template>
    <div>
        <el-container class="container">
            <!-- 头部 -->
            <el-header style="text-align: right; font-size: 12px; background:">
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
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
                    </el-breadcrumb>
                   <div class="admin-main">
                       <el-table
                               height="480"
                               :data="tableData"
                               style="width: 100%">
                           <!--多选-->
                           <el-table-column
                                   align="center"
                                   type="selection">
                           </el-table-column>
                           <!--日期-->
                           <el-table-column
                                   align="center"
                                   label="创建日期">
                               <template slot-scope="scope">
                                   <i class="el-icon-time"></i>
                                   <span>{{ scope.row.date }}</span>
                               </template>
                           </el-table-column>
                           <!--账号-->
                           <el-table-column
                                   align="center"
                                   label="账号">
                               <template slot-scope="scope">
                                   <span>{{ scope.row.Id}}</span>
                               </template>
                           </el-table-column>
                           <!--用户名-->
                           <el-table-column
                                   align="center"
                                   label="用户名">
                               <template slot-scope="scope">
                                   <span>{{ scope.row.name}}</span>
                               </template>
                           </el-table-column>
                           <!--性别-->
                           <el-table-column
                                   align="center"
                                   label="性别">
                               <template slot-scope="scope">
                                   <span>{{ scope.row.sex}}</span>
                               </template>
                           </el-table-column>
                           <!--住址-->
                           <el-table-column
                                   label="住址"
                                   width="150"
                                   align="center">
                               <template slot-scope="scope">
                                   <span>{{ scope.row.address}}</span>
                               </template>
                           </el-table-column>
                           <!--操作-->
                           <el-table-column
                                   align="center"
                                   width="360"
                                   label="操作">
                               <template slot-scope="scope">
                                   <!--编辑-->
                                   <el-button
                                           size="mini"
                                           type="primary"
                                           @click="dialogVisible = true">编辑
                                   </el-button>
                                   <el-dialog
                                           :visible.sync="dialogVisible"
                                           width="30%"
                                           :before-close="handleClose">
                                       <!--需要编辑的内容-->
                                       <div class="addMessage">
                                           <!--账号-->
                                           <p>
                                               <span> 账&nbsp;&nbsp;&nbsp;&nbsp;号:</span>
                                               <input type="text" placeholder="请输入账号" v-model="userId">
                                               <br>
                                           </p>
                                           <!--用户名-->
                                           <p>
                                               <span>用户名:</span>
                                               <input type="text" placeholder="请输入用户名" v-model="userName">
                                               <br>
                                           </p>
                                           <!--性别-->
                                           <p>
                                               <span>性&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
                                               <el-radio v-model="radio" label="1">男</el-radio>
                                               <el-radio v-model="radio" label="2">女</el-radio>
                                               <br>
                                           </p>
                                           <!--住址-->
                                           <p>
                                               <span> 住&nbsp;&nbsp;&nbsp;&nbsp;址:</span>
                                               <input type="text" placeholder="请输入住址" v-model="address">
                                               <br>
                                           </p>
                                       </div>
                                       <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure()">确 定</el-button>
          </span>
                                   </el-dialog>
                                   <!--删除-->
                                   <el-button
                                           size="mini"
                                           type="danger"
                                           @click.native.prevent="deleteRow(scope.$index, tableData)">删除
                                   </el-button>
                               </template>
                           </el-table-column>
                       </el-table>
                   </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from '../components/common/XhHead'
    import XhAside from '../components/common/XhAside'
    export default {
        name: "Admin",
        components: {
            'xh-head': XhHead,
            'xh-aside':XhAside
        },
        data() {
            return {
                dialogVisible: false,
                radio: '1',
                userId: "", //账号
                userName: "",//用户名
                address: "",//地址
                tableData: [{
                    date: '2019-07-01',
                    name: '刘管理员',
                    Id: "1902-111",
                    sex: "男",
                    address: '延安市壶口瀑布'
                }, {
                    date: '2019-07-02',
                    name: '党管理员',
                    Id: "1902-222",
                    sex: "女",
                    address: '渭南市大荔同洲湖'
                }, {
                    date: '2019-07-03',
                    name: '柴管理员',
                    Id: "1902-333",
                    sex: "男",
                    address: '咸阳市乐华城'
                }, {
                    date: '2019-07-04',
                    name: '娜管理员',
                    Id: "1902-444",
                    sex: "女",
                    address: '榆林市红石峡'
                }, {
                    date: '2019-07-05',
                    name: '许管理员',
                    Id: "1902-555",
                    sex: "女",
                    address: '安康市紫阳富硒茶园'
                }, {
                    date: '2019-07-06',
                    name: '吴管理员',
                    Id: "1902-666",
                    sex: "女",
                    address: '旬阳太极城森林公园'
                }, {
                    date: '2016-05-07',
                    name: '杨管理员',
                    Id: "1902-777",
                    sex: "男",
                    address: '哈尔滨汉斯滑冰场'
                }, {
                    date: '2019-07-08',
                    name: '孙管理员',
                    Id: "1902-888",
                    sex: "男",
                    address: '西安市昆明池'
                }, {
                    date: '2019-07-09',
                    name: '张管理员',
                    Id: "1902-999",
                    sex: "男",
                    address: '神木市二郎山'
                }, {
                    date: '2019-07-10',
                    name: '宫管理员',
                    Id: "1902-1010",
                    sex: "男",
                    address: '天水市麦积山'
                }]
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            deleteRow(index, rows) {
                this.$confirm('真的要删除吗？')
                    .then(_ => {
                        rows.splice(index, 1);
                    })
                    .catch(_ => {
                    });
            },
            CurentTime() {
                var now = new Date();
                var year = now.getFullYear();       //年
                var month = now.getMonth() + 1;     //月
                var day = now.getDate();            //日
                var clock = year + "-";
                if (month < 10)
                    clock += "0";
                clock += month + "-";
                if (day < 10)
                    clock += "0";
                clock += day + " ";
                return (clock);
            },
            sure() {
                this.dialogVisible = false
                var dataArr = {
                    date: this.CurentTime(),
                    name: this.userName,
                    Id: this.userId,
                    sex: this.radio == '1' ? '男' : '女',
                    address: this.address
                }
                this.tableData.push(dataArr);
                //清空
                this.userName = "",
                    this.userId = "",
                    this.radio = '1',
                    this.address = ""
            }
        }
    }
</script>

<style scoped>
    .addMessage span {
        display: inline-block;
        width: 60px;
    }
    .addMessage p {
        text-align: left;
        height: 20px;
        line-height: 20px;
        margin: 14px 0
    }
    .admin-main{
        margin-top:20px;
    }
</style>

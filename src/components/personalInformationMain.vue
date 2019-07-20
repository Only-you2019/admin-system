<template>
    <div>
        <el-table :data="tableData"
                border
                style="width: 100%">
            <el-table-column fixed
                    prop="date"
                    label="日期"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="name"
                    label="姓名"
                    width="100"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="address"
                    label="地址"
                    width="260"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="zip"
                    label="邮编"
                    width="80"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="sex"
                    label="性别"
                    width="60"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="datas"
                    label="下单日期"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="phone"
                    label="手机"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="thing"
                    label="购买产品"
                    align="center">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="140"
                    align="center">
                <template class="tem" slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="dialogVisible = true">新增
                    </el-button>
                    <!--修改中的数据-->
                    <el-dialog
                            :visible.sync="dialogVisible"
                            width="40%"
                            :modal="isTrue"
                            :before-close="handleClose">
                        <div class="personal-information-main">
                            <!--日期-->
                            <p>
                                <span> 日期:</span>
                                <input type="text" placeholder="请输入日期" v-model="myDate" >
                                <br>
                            </p>
                            <!--姓名-->
                            <p>
                                <span>姓名:</span>
                                <input type="text" placeholder="请输入姓名" v-model="myName">
                                <br>
                            </p>
                            <!--地址-->
                            <p>
                                <span>地址:</span>
                                <input type="text" placeholder="请输入地址" v-model="myAddress">
                                <br>
                            </p>
                            <!--邮编-->
                            <p>
                                <span>邮编:</span>
                                <input type="text" placeholder="请输入邮编" v-model="myPost">
                                <br>
                            </p>
                            <!--性别-->
                            <p>
                                <span>性别:</span>
                                <el-radio v-model="radio" label="1">男</el-radio>
                                <el-radio v-model="radio" label="2">女</el-radio>
                                <br>
                            </p>
                            <!--下单日期-->
                            <p>
                                <span>下单日期:</span>
                                <input type="text" placeholder="请输入下单日期" v-model="myBuyDate">
                                <br>
                            </p>
                            <!--手机-->
                            <p>
                                <span>手机:</span>
                                <input type="text" placeholder="请输入手机" v-model="myPhone"  @blur="zhengze()">
                                <span style="color: darkred;display: inline-block;width: 150px">{{msg}}</span>
                                <br>
                            </p>
                            <!--购买产品-->
                            <p>
                                <span>购买产品:</span>
                                <input type="text" placeholder="请输入购买产品" v-model="myProduct">
                                <br>
                            </p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="sure">确 定</el-button>
                        </span>
                    </el-dialog>

                    <el-button
                            size="mini"
                            type="danger"
                            @click.native.prevent="deleteRow(scope.$index, tableData)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "personalInformationMain",
        props: ['main','tableData'],
        data() {
            return {
                msg:'',
                radio:'1',
                dialogVisible: false,
                isTrue:false,
                // 编辑数据
                myDate: "", //日期
                myName: "", //姓名
                myAddress: "", //地址
                myPost: "", //邮编
                mySex: "", //性别
                myBuyDate: "", //下单日期
                myPhone: "",  //手机
                myProduct: "" //购买产品
            }
        },
        methods: {
            zhengze(){
                var reg= reg = /^1[3|5|7|8]\d{9}$/g
                if(reg.test(this.myPhone)===true){
                    this.msg="格式正确"
                }else {
                    this.msg="请输入正确的手机号";
                }
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            //确认修改
            sure(){
                this.dialogVisible = false
                var dataArr = {
                    date: this.myDate,
                    name:this.myName,
                    address:this.myAddress,
                    zip: this.myPost,
                    sex: this.radio==='1'?'男':'女',
                    datas: this.myBuyDate,
                    phone: this.myPhone,
                    thing: this.myProduct
                }

                // 新增数据
                this.tableData.push(dataArr);
                //清空
                this.myDate='',
                this.myName='',
                this.myAddress='',
                this.myPost='',
                this.radio='1',
                this.myBuyDate='',
                this.myPhone='',
                this.myProduct=''
            },
            //删除
            deleteRow(index, rows) {
                this.$emit('deleteRow',index,rows)
            },
        }
    }
</script>

<style scoped>
.personal-information-main p input{
    border-radius: 5px;
    height: 25px;
    border: 2px solid #dddddd;
    text-align: center;
}
.personal-information-main p{
    margin: 20px 0;
}

.el-button + .el-button {
        width: 70px;
    }
    .el-header {
        background-color: #111;
    }

    .aside {
        height: 700px;
        background-color: #222324;
        /* border-right: 1px solid #131e26; */
    }

    .el-main {
        height: 700px;
        background-color: #ecf0f5;
    }




    .personal-information-main span {
        display: inline-block;
        width: 60px;
    }
    .personal-information-main p {
        text-align: left;
        height: 20px;
        line-height: 20px;
        margin: 14px 0
    }
    .dialog-footer{
        width:20px;
    }
</style>
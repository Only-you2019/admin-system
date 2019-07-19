<template>
    <div class="HTEducationalExaminationMain">
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
                            @click="handleEdit">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "HTEducationalExaminationMain",
        data() {
            return {
                tableData: [{
                    date: '0001',
                    Title: '计算机视觉算法(基于OpenCV的计算机应用开发)/智能科学与技术丛书',
                    Press:'机械工业出版社',
                    name:'(伊朗)阿明·艾哈迈迪·塔兹赫孔迪',
                    Price:"65.55",
                    category:"教育考试"
                }, {
                    date: '0002',
                    Title: '网络创新指数研究',
                    Press:'机械工业出版社',
                    name:'汪小梅//万映红//岳英',
                    Price:"65.55",
                    category:"教育考试"
                }, {
                    date: '0003',
                    Title: '计算机基础教学的现状和发展趋势研究',
                    Press:'冶金工业出版社',
                    name:'赵晓霞',
                    Price:"46.55",
                    category:"教育考试"
                }, {
                    date: '0004',
                    Title: '物联网渗透测试/网络空间安全技术丛书',
                    Press:'机械工业出版社',
                    name:'(美)亚伦·古兹曼//阿迪蒂亚·古普塔',
                    Price:"84.55",
                    category:"教育考试"
                }, {
                    date: '0005',
                    Title: '计算机文化(原书第20版)/计算机科学丛书',
                    Press:'机械工业出版社',
                    name:'(美)琼·詹姆里奇·帕森斯',
                    Price:"94.05",
                    category:"教育考试"
                }, {
                    date: '0006',
                    Title: '移动物联网技术',
                    Press:'科学出版社',
                    name:'张德干//康学净//张婷',
                    Price:"118.75",
                    category:"教育考试"
                }, {
                    date: '0007',
                    Title: '复杂系统弹性建模与评估',
                    Press:'化学工业出版社',
                    name:'李瑞莹//杜时佳//康锐',
                    Price:"55.10",
                    category:"教育考试"
                }, {
                    date: '0008',
                    Title: '云计算安全理论技术及应用',
                    Press:'国防科技大学出版社',
                    name:'鲜明//刘建//黄昆//王会梅',
                    Price:"102.60",
                    category:"教育考试"
                }, {
                    date: '0009',
                    Title: '中文在线评论的用户情感分析及应用',
                    Press:'经济科学出版社',
                    name:'郑丽娟//王洪伟',
                    Price:"43.70",
                    category:"教育考试"
                }, {
                    date: '0010',
                    Title: 'CSS权威指南(第4版上下)',
                    Press:'中国电力出版社',
                    name:'(美)迈耶//埃斯特尔·韦尔',
                    Price:"188.10",
                    category:"教育考试"
                }, {
                    date: '0011',
                    Title: 'ASP.NET应用开发实例教程(全国高等院校应用型创新规划教材)/计算机系列',
                    Press:'清华大学出版社',
                    name:'卢守东',
                    Price:"56.05",
                    category:"教育考试"
                }]
            }
        },
        methods: {
            handleEdit() {
                console.log("编辑");
            },
            handleDelete() {
                console.log("删除");
            }
        }
    }
</script>

<style scoped>
    .HTEducationalExaminationMain{
        padding: 20px 100px;
    }
</style>

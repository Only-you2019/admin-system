<template>
    <div class="HTEducationalExamination" style="height: 100%">
        <el-container class="container" style="height: 100%">
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
                    <H-t-educational-examination-header @sureUpload="sureUpload"></H-t-educational-examination-header>
                    <H-t-educational-examination-main :tableData="tableData" @deleteRow="deleteRow"></H-t-educational-examination-main>
                    <H-t-educational-examination-paging></H-t-educational-examination-paging>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import HTEducationalExaminationHeader from '../components/HTEducationalExamination/HTEducationalExaminationHeader';
    import HTEducationalExaminationMain from '../components/HTEducationalExamination/HTEducationalExaminationMain';
    import HTEducationalExaminationPaging from '../components/HTEducationalExamination/HTEducationalExaminationPaging';
    export default {
        name: "HTEducationalExamination",
        components: {
            'XhHead':XhHead,
            'XhAside':XhAside,
            HTEducationalExaminationHeader,
            HTEducationalExaminationMain,
            HTEducationalExaminationPaging,
        },
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
        methods:{
            //添加书籍
            sureUpload(item) {
                this.tableData.push(item);
            },
            //删除书籍
            deleteRow(index) {
                this.tableData.splice(index, 1);
            },
        }
    }
</script>

<style scoped>
    .el-header{

        background-color: #111;

    }

    .aside{

        background-color: #222324;

        /* border-right: 1px solid #131e26; */

    }

    .el-main{

        background-color: #ecf0f5;

    }

</style>

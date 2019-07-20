<template>
    <div class="HTSocialScience">
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
                    <H-t-social-science-header @sureUpload="sureUpload"></H-t-social-science-header>
                    <H-t-social-science-main :tableData="tableData" @deleteRow="deleteRow"></H-t-social-science-main>
                    <H-t-social-science-paging></H-t-social-science-paging>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import HTSocialScienceHeader from '../components/HTSocialScience/HTSocialScienceHeader';
    import HTSocialScienceMain from '../components/HTSocialScience/HTSocialScienceMain';
    import HTSocialSciencePaging from '../components/HTSocialScience/HTSocialSciencePaging';
    export default {
        name: "HTSocialScience",
        components: {
            'XhHead':XhHead,
            'XhAside':XhAside,
            HTSocialScienceHeader,
            HTSocialScienceMain,
            HTSocialSciencePaging,
        },
        data() {
            return {
                tableData: [{
                    date: '0001',
                    Title: '新中国成立初期延安地区社会变迁研究',
                    Press:'中国社会科学出版社',
                    name:'张雪梅',
                    Price:"71.25",
                    category:"人文社科"
                }, {
                    date: '0002',
                    Title: '史记',
                    Press:'中华书局',
                    name:'(汉)司马迁',
                    Price:"560.50",
                    category:"人文社科"
                }, {
                    date: '0003',
                    Title: '大汗天下',
                    Press:'中国铁道出版社',
                    name:'丁守卫',
                    Price:"56.81",
                    category:"人文社科"
                }, {
                    date: '0004',
                    Title: '三国史话',
                    Press:'北京人民出版社',
                    name:'吕思勉',
                    Price:"17.10",
                    category:"人文社科"
                }, {
                    date: '0005',
                    Title: '延安时期青年学生的史学教育与社会实践',
                    Press:'中国科学出版社',
                    name:'杨东',
                    Price:"61.75",
                    category:"人文社科"
                }, {
                    date: '0006',
                    Title: '杏坛追梦我思我在',
                    Press:'光明日报出版社',
                    name:'汪瀛',
                    Price:"55.10",
                    category:"人文社科"
                }, {
                    date: '0007',
                    Title: '华大史学论坛',
                    Press:'华中师范大学出版社',
                    name:'吴琦',
                    Price:"45.60",
                    category:"人文社科"
                }, {
                    date: '0008',
                    Title: '道德经',
                    Press:'凤凰出版社',
                    name:'(春秋)老子',
                    Price:"55.10",
                    category:"人文社科"
                }, {
                    date: '0009',
                    Title: '穿越春秋品管仲',
                    Press:'中国青年出版社',
                    name:'李任飞',
                    Price:"45.60",
                    category:"人文社科"
                }, {
                    date: '0010',
                    Title: '庄子发微',
                    Press:'上海古籍出版社',
                    name:'钟泰',
                    Price:"85.50",
                    category:"人文社科"
                }, {
                    date: '0011',
                    Title: '儒学小史',
                    Press:'上海人民社出版',
                    name:'干春松',
                    Price:"56.05",
                    category:"人文社科"
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
            //分页
            handleCurrentChange(val) {
                this.tableData=this.new_tableData.slice(5*(val-1),5*val)
                this.searchBook_new=this.new_tableData.slice(5*(val-1),5*val)
            },
            created(){
                this.tableData=this.new_tableData.slice(0,5)
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

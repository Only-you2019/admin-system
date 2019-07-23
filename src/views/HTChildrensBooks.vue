<template>
    <div class="HTChildrensBooks" style="height: 100%">
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
					<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					  <el-breadcrumb-item>图书分类</el-breadcrumb-item>
					  <el-breadcrumb-item>少儿童书</el-breadcrumb-item>
					</el-breadcrumb>
                    <H-t-childrens-books-header @sureUpload="sureUpload"></H-t-childrens-books-header>
                    <H-t-childrens-books-main :tableData="tableData" @deleteRow="deleteRow"></H-t-childrens-books-main>
                    <H-t-childrens-books-paging></H-t-childrens-books-paging>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import HTChildrensBooksHeader from '../components/HTChildrensBooks/HTChildrensBooksHeader';
    import HTChildrensBooksMain from '../components/HTChildrensBooks/HTChildrensBooksMain';
    import HTChildrensBooksPaging from '../components/HTChildrensBooks/HTChildrensBooksPaging';
    export default {
        name: "HTChildrensBooks",
        components: {
            'XhHead':XhHead,
            'XhAside':XhAside,
            HTChildrensBooksHeader,
            HTChildrensBooksMain,
            HTChildrensBooksPaging,
        },
        data() {
            return {
                tableData: [{
                    date: '0001',
                    Title: '中国儿童文学新世界 怪兽村',
                    Press:'世界图书出版公司',
                    name:'小酷哥哥',
                    Price:"23.75",
                    category:"少儿童书"
                }, {
                    date: '0002',
                    Title: '神奇动物:格林德沃之罪',
                    Press:'人民文学出版社',
                    name:'j.k.罗琳',
                    Price:"56.05",
                    category:"少儿童书"
                }, {
                    date: '0003',
                    Title: '“愤怒的小鸟”大电影全新动漫故事2：真正的朋友',
                    Press:'人民文学出版社',
                    name:'芬兰罗威欧公司',
                    Price:"¥33.25",
                    category:"少儿童书"
                }, {
                    date: '0004',
                    Title: '银色独角兽：我想变得与众不同',
                    Press:'人民文学出版社',
                    name:'保罗 比格尔',
                    Price:"¥35.00",
                    category:"少儿童书"
                }, {
                    date: '0005',
                    Title: '中国女排(永不言弃的王者之师)/中华先锋人物故事汇/中华人物故事汇',
                    Press:'党建读物出版社',
                    name:'葛竞',
                    Price:"17.10",
                    category:"少儿童书"
                }, {
                    date: '0006',
                    Title: '中国神话故事',
                    Press:'北京联合出版公司',
                    name:'袁珂',
                    Price:"28.00",
                    category:"少儿童书"
                }, {
                    date: '0007',
                    Title: '宝葫芦的秘密',
                    Press:'延边大学出版社',
                    name:'张天翼',
                    Price:"18.81",
                    category:"少儿童书"
                }, {
                    date: '0008',
                    Title: '故宫里的大怪兽',
                    Press:'中国大百科全书出版社',
                    name:'常怡',
                    Price:"33.25",
                    category:"少儿童书"
                }, {
                    date: '0009',
                    Title: '神探鹰之队',
                    Press:'中国友谊出版社',
                    name:'董恒波',
                    Price:"28.31",
                    category:"少儿童书"
                }, {
                    date: '0010',
                    Title: '好狐狸坏狐狸/动物联盟',
                    Press:'明天出版社',
                    name:'沈石溪/李花三吉',
                    Price:"20.90",
                    category:"少儿童书"
                }, {
                    date: '0011',
                    Title: '小鲤鱼跃龙门',
                    Press:'长江少年儿童出版社有限公司',
                    name:'金近',
                    Price:"23.75",
                    category:"少儿童书"
                }]
            }
        },
        methods:{
            //添加书籍
            sureUpload(item) {
                this.tableData.push(JSON.parse(JSON.stringify(item)));
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

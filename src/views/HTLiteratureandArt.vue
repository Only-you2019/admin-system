<template>
    <div class="HTLiteratureandArt" style="height: 100%">
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
                    <H-t-literatureand-art-header @sureUpload="sureUpload"></H-t-literatureand-art-header>
                    <H-t-literatureand-art-main :tableData="tableData" @deleteRow="deleteRow"></H-t-literatureand-art-main>
                    <H-t-literatureand-art-paging></H-t-literatureand-art-paging>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import XhHead from "../components/common/XhHead"
    import XhAside from "../components/common/XhAside"
    import HTLiteratureandArtHeader from '../components/HTLiteratureandArt/HTLiteratureandArtHeader';
    import HTLiteratureandArtMain from '../components/HTLiteratureandArt/HTLiteratureandArtMain';
    import HTLiteratureandArtPaging from '../components/HTLiteratureandArt/HTLiteratureandArtPaging';
    export default {
        name: "HTLiteratureandArt",
        components: {
            'XhHead':XhHead,
            'XhAside':XhAside,
            HTLiteratureandArtHeader,
            HTLiteratureandArtMain,
            HTLiteratureandArtPaging,
        },
        data(){
            return{
                tableData: [
                    {
                        date: '0001',
                        Title: '家',
                        Press:'吉林大学出版社',
                        name:'巴金',
                        Price:"45.60",
                        category:"文学艺术"
                    }, {
                        date: '0002',
                        Title: '你有一份初恋请签收',
                        Press:'贵州人民出版社',
                        name:'子非鱼//森木岛屿//冬三儿',
                        Price:"34.01",
                        category:"文学艺术"
                    }, {
                        date: '0003',
                        Title: '小河山',
                        Press:'花山文艺出版社',
                        name:'长宇宙',
                        Price:"36.10",
                        category:"文学艺术"
                    }, {
                        date: '0004',
                        Title: '初恋的小鹿怦怦跳',
                        Press:'百花洲文艺出版社',
                        name:'鹿拾尔',
                        Price:"34.90",
                        category:"文学艺术"
                    }, {
                        date: '0005',
                        Title: '小娇妻',
                        Press:'江苏文艺出版社',
                        name:'洛心辰',
                        Price:"36.86",
                        category:"文学艺术"
                    }, {
                        date: '0006',
                        Title: '我的小哥哥',
                        Press:'百花洲文艺出版社',
                        name:'城南花开',
                        Price:"36.10",
                        category:"文学艺术"
                    }, {
                        date: '0007',
                        Title: '我的男朋友呀他是草莓味的',
                        Press:'江苏文艺出版社',
                        name:'周寒舟',
                        Price:"36.10",
                        category:"文学艺术"
                    }, {
                        date: '0008',
                        Title: '杂牌军',
                        Press:'江苏文艺出版社',
                        name:'陈建波',
                        Price:"42.76",
                        category:"文学艺术"
                    }, {
                        date: '0009',
                        Title: '我喜欢他但是我迟到了',
                        Press:'广东人民出版社',
                        name:'痞子蔡',
                        Price:"42.75",
                        category:"文学艺术"
                    }, {
                        date: '0010',
                        Title: '他像风一样自由',
                        Press:'贵州人民出版社',
                        name:'子非鱼',
                        Price:"34.96",
                        category:"文学艺术"
                    }, {
                        date: '0011',
                        Title: '白雪覆盖的大地',
                        Press:'安徽文艺出版社出版',
                        name:'黄梅宝',
                        Price:"47.31",
                        category:"文学艺术"
                    }],
                uploadBook:{},
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

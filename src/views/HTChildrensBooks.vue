<template>
    <div class="HTChildrensBooks">
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
                    <H-t-childrens-books-header></H-t-childrens-books-header>
                    <H-t-childrens-books-main></H-t-childrens-books-main>
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
</style>

<template>
    <div class="HTLiteratureandArt">
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
                    <H-t-literatureand-art-header></H-t-literatureand-art-header>
                    <H-t-literatureand-art-main></H-t-literatureand-art-main>
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

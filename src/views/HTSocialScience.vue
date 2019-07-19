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
                    <H-t-social-science-header></H-t-social-science-header>
                    <H-t-social-science-main></H-t-social-science-main>
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

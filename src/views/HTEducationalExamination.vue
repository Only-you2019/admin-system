<template>
    <div class="HTEducationalExamination">
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
                    <H-t-educational-examination-header></H-t-educational-examination-header>
                    <H-t-educational-examination-main></H-t-educational-examination-main>
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

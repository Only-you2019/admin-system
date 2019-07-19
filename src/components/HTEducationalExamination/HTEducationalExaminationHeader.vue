<template>
    <div class="HTEducationalExaminationHeader">
        <input class="HTEducationalExaminationHeader-input" type="text" placeholder="ID">
        <input class="HTEducationalExaminationHeader-input" type="text" placeholder="书名">
        <input class="HTEducationalExaminationHeader-input" type="text" placeholder="出版社">
        <input class="HTEducationalExaminationHeader-input" type="text" placeholder="作者">
        <input class="HTEducationalExaminationHeader-input" type="text" placeholder="价格">
        <input class="HTEducationalExaminationHeader-input" type="text" placeholder="类别">
        <el-button class="HTEducationalExaminationHeader-button" type="primary">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "HTEducationalExaminationHeader"
    }
</script>

<style scoped>
    .HTEducationalExaminationHeader{
        margin-left: 10rem;
    }
    .HTEducationalExaminationHeader-input{
        margin-right: 30px;
    }
    .HTEducationalExaminationHeader-button{
        width: 173px;
        height: 21px;
        padding: 0 ;
    }
</style>

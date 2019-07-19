<template>
    <div class="HTSocialScienceHeader">
        <input class="HTSocialScienceHeader-input" type="text" placeholder="ID">
        <input class="HTSocialScienceHeader-input" type="text" placeholder="书名">
        <input class="HTSocialScienceHeader-input" type="text" placeholder="出版社">
        <input class="HTSocialScienceHeader-input" type="text" placeholder="作者">
        <input class="HTSocialScienceHeader-input" type="text" placeholder="价格">
        <input class="HTSocialScienceHeader-input" type="text" placeholder="类别">
        <el-button class="HTSocialScienceHeader-button" type="primary">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "HTSocialScienceHeader"
    }
</script>

<style scoped>
    .HTSocialScienceHeader{
        margin-left: 10rem;
    }
    .HTSocialScienceHeader-input{
        margin-right: 30px;
    }
    .HTSocialScienceHeader-button{
        width: 173px;
        height: 21px;
        padding: 0 ;
    }
</style>

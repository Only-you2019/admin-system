<template>
    <div class="HTChildrensBooksHeader">
        <input class="HTChildrensBooksHeader-input" type="text" placeholder="ID">
        <input class="HTChildrensBooksHeader-input" type="text" placeholder="书名">
        <input class="HTChildrensBooksHeader-input" type="text" placeholder="出版社">
        <input class="HTChildrensBooksHeader-input" type="text" placeholder="作者">
        <input class="HTChildrensBooksHeader-input" type="text" placeholder="价格">
        <input class="HTChildrensBooksHeader-input" type="text" placeholder="类别">
        <el-button class="HTChildrensBooksHeader-button" type="primary">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "HTChildrensBooksHeader"
    }
</script>

<style scoped>
    .HTChildrensBooksHeader{
        margin-left: 10rem;
    }
    .HTChildrensBooksHeader-input{
        margin-right: 30px;
    }
    .HTChildrensBooksHeader-button{
        width: 173px;
        height: 21px;
        padding: 0 ;
    }
</style>

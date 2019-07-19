<template>
    <div class="HTLiteratureandArtHeader">
        <input class="HTLiteratureandArtHeader-input" type="text" placeholder="ID">
        <input class="HTLiteratureandArtHeader-input" type="text" placeholder="书名">
        <input class="HTLiteratureandArtHeader-input" type="text" placeholder="出版社">
        <input class="HTLiteratureandArtHeader-input" type="text" placeholder="作者">
        <input class="HTLiteratureandArtHeader-input" type="text" placeholder="价格">
        <input class="HTLiteratureandArtHeader-input" type="text" placeholder="类别">
        <el-button class="HTLiteratureandArtHeader-button" type="primary">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "HTLiteratureandArtHeader",
        data() {
            return {
                input: ''
            }
        }
    }
</script>

<style scoped>
    .HTLiteratureandArtHeader{
        margin-left: 10rem;
    }
    .HTLiteratureandArtHeader-input{
        margin-right: 30px;
    }
    .HTLiteratureandArtHeader-button{
        width: 173px;
        height: 21px;
        padding: 0 ;
    }
    .HTLiteratureandArtHeader-el-input{
        width: 200px;
    }
</style>

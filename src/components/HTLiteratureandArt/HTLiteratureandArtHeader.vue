<template>
    <div class="HTLiteratureandArtHeader">
        <input class="HTLiteratureandArtHeader-input" type="text" v-model="number" placeholder="ID">
        <input class="HTLiteratureandArtHeader-input" type="text" v-model="title" placeholder="书名">
        <input class="HTLiteratureandArtHeader-input" type="text" v-model="publish" placeholder="出版社">
        <input class="HTLiteratureandArtHeader-input" type="text" v-model="author" placeholder="作者">
        <input class="HTLiteratureandArtHeader-input" type="text" v-model="price" placeholder="价格">
        <input class="HTLiteratureandArtHeader-input" type="text" v-model="classify" placeholder="类别">
        <el-button class="HTLiteratureandArtHeader-button" type="primary" @click="sureUpload">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "HTLiteratureandArtHeader",
        data() {
            return {
                uploadBook:{},
                title:'',
                author:'',
                classify:'',
                number:'',
                price:'',
                publish: '',
            }
        },
        methods: {
            sureUpload() {
                this.uploadBook.date = this.number;
                this.uploadBook.Title = this.title;
                this.uploadBook.Press = this.publish;
                this.uploadBook.name = this.author;
                this.uploadBook.Price = this.price;
                this.uploadBook.category = this.classify;
                this.$emit("sureUpload",this.uploadBook)
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
</style>

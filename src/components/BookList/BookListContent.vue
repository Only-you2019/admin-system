<template>
  <div class="book-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>图书列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="list-secrch">
      <input type="search" placeholder="ID" v-model="book.number">
      <input type="search" placeholder="书名" v-model="book.title">
      <input type="search" placeholder="作者"  v-model="book.author">
      <input type="search" placeholder="类别" v-model="book.classify">
      <el-button
        @click="searchBook"
        type="text"
        size="middle">
        查询
      </el-button>
      <el-button type="text"  @click="dialogVisible = true">上传书籍</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="addBook">
          <!--书名-->
          <p>
            <span> 书 名:</span>
            <input type="text" placeholder="请输入书名" v-model="title1">
            <br>
          </p>
          <!--作者-->
          <p>
            <span>作 者:</span>
            <input type="text" placeholder="请输入作者" v-model="author1">
            <br>
          </p>
          <!--类别-->
          <p>
            <span>类 别:</span>
            <input type="text" placeholder="请输入类别" v-model="classify1">
            <br>
          </p>
          <!--编号-->
          <p>
            <span> ID编号:</span>
            <input type="text" placeholder="请输入ID" v-model="number1">
            <br>
          </p>
          <!--价格-->
          <p>
            <span>价 格:</span>
            <input type="text" placeholder="请输入价格" v-model="price1">
            <br>
          </p>
          <!--图片-->
          <p class="list-img">
            <span>上传图片:</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imgPath" :src="imgPath" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <br>
          </p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="sureUpload" >确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <el-table class="book-list-table"
      :data="tableData"
      height="440"
      border
      style="width: 100%">
      <el-table-column
        type="selection"
        align="center"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        label="序号"
        type="index"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        width="150"
        prop="title"
        label="书名">
      </el-table-column>
      <el-table-column
        align="center"
        width="150"
        prop="author"
        label="作者">
      </el-table-column>
      <el-table-column
        align="center"
        width="150"
        prop="classify"
        label="类别">
      </el-table-column>
      <el-table-column
        align="center"
        prop="number"
        label="ID编号"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        width="120"
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        align="center"
        prop="imgPath"
        label="图片">
        <!--插入图片链接的代码-->
        <template slot-scope="scope">
          <img  :src="scope.row.imgPath" alt="" style="width: 50px;height: 50px">
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index)"
            type="text"
            size="middle">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    name: "BookListContent",
    props:["tableData"],
    data() {
      return {
        dialogVisible: false,
        input10: '',
        //查询书籍
        book:{
          number:'',
          title:'',
          author:'',
          classify:'',
        },
        price:'',
        //上传书籍
        imgPath: '',
        title1:'',
        author1:'',
        classify1:'',
        number1:'',
        price1:'',
        uploadBook:{},
        searchBook_new:[],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 1,
        currentPage4: 4
      }
    },
    methods: {
      //删除
      deleteRow(index){
        this.$emit("deleteRow",index)
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.$emit("handleCurrentChange",val)
      },
      //对话框
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 上传图片
      handleAvatarSuccess(res, file) {
        this.imgPath = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 确定上传书籍
      sureUpload(){
        this.dialogVisible = false
        this.uploadBook.title=this.title1;
        this.uploadBook.author=this.author1;
        this.uploadBook.classify=this.classify1;
        this.uploadBook.number=this.number1;
        this.uploadBook.price=this.price1;
        this.uploadBook.imgPath=this.imgPath;
        this.$emit("sureUpload",this.uploadBook)
      },
      //查询书籍
      searchBook(){
        this.$emit("searchBook",this.book)
      }
    }

  }
</script>
<style scoped>
  .book-list .block{
    margin-top:10px;
  }
  .book-list .book-list-table{
    margin-top:10px;
  }
  /*.book-list-table td{*/
  /*  height:30px;*/
  /*}*/
  .book-list .list-secrch{
    text-align: left;
    margin-top:16px;
  }
  .book-list .list-secrch input{
    width: 200px;
    height: 30px;
    padding-left: 10px;
    vertical-align: middle;
    margin-right:10px;
  }
  .book-list .list-secrch button{
    width: 70px;
    height: 30px;
    border: 0;
    background:red ;
    color:#ffffff ;
    font-size: 13px;
    outline: none;
    vertical-align: middle;
    margin-right:20px;
  }
  .book-list .addBook{
    height: 400px;
  }
  .book-list .addBook span {
    display: inline-block;
    width: 60px;
  }
  .book-list .addBook p {
    text-align: left;
    height: 20px;
    line-height: 20px;
    margin: 20px 0
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

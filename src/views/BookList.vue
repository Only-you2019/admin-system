<template>
  <el-container class="container">
<!--    头部-->
    <el-header class="el-header">
        <xh-head></xh-head>
    </el-header>
    <el-container>
      <el-aside class="el-aside" width="200px">
        <xh-aside></xh-aside>
      </el-aside>
      <el-container>
        <el-main class="el-main">
          <book-list-content :tableData="tableData"
              @searchBook="searchBook"
              @sureUpload="sureUpload"
              @deleteRow="deleteRow"
              @handleCurrentChange="handleCurrentChange"
          ></book-list-content>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import XhHead from "../components/common/XhHead"
  import XhAside from "../components/common/XhAside"
  import BookListContent from "../components/BookList/BookListContent"

  export default {
    name: "BookList",
    components:{
        XhHead,
        XhAside,
        BookListContent
    },
    data() {
      return {
          tableData: [],
          searchBook_new:[],
          new_tableData:[
              {
                  title: '微微一笑很倾城',
                  author: '娜作者',
                  classify:'小说',
                  number:"001",
                  price:"111",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '谁的青春不迷茫',
                  author: '吴作者',
                  classify:'青春',
                  number:"002",
                  price:"222",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '追风筝的人',
                  author: '党作者',
                  classify:'文学',
                  number:"003",
                  price:"333",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '何以笙箫默',
                  author: '宫作者',
                  classify:'小说',
                  number:"004",
                  price:"444",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '诛仙',
                  author: '刘作者',
                  classify:'小说',
                  number:"005",
                  price:"555",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '灰姑娘',
                  author: '柴作者',
                  classify:'文学',
                  number:"006",
                  price:"666",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '水浒传',
                  author: '张作者',
                  classify:'文学',
                  number:"007",
                  price:"777",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '杉杉来迟',
                  author: '许作者',
                  classify:'小说',
                  number:"008",
                  price:"888",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '灰姑娘',
                  author: '杨作者',
                  classify:'文学',
                  number:"009",
                  price:"999",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              },
              {
                  title: '葫芦娃',
                  author: '孙作者',
                  classify:'青春',
                  number:"010",
                  price:"100",
                  imgPath:"http://xhsdtest.oss-cn-beijing.aliyuncs.com/images/2018/12/03/c0808eb5-68bd-4fc0-851a-91e0ff3f4261.png",
              }],
      }
    },
      created(){
        this.tableData=this.new_tableData.slice(0,5)
      },
    methods: {
        //删除
        deleteRow(index) {
            this.tableData.splice(index, 1);
        },
        //上传书籍
        sureUpload(book){
            this.new_tableData.push(book);
        },
        //查询书籍
        searchBook(book){
            // console.log(book);
            let number = book.number.trim().length;
            let title = book.title.trim().length;
            let author =book.author.trim().length;
            let classify =book.classify.trim().length;
            let arr = this.new_tableData.filter(item=>{
                return  (!number?1:item.number==book.number) &&
                    (!title?1:item.title==book.title) &&
                    (!author?1:item.author==book.author) &&
                    (!classify?1:item.classify==book.classify)
            })
            this.tableData = arr
        },
        //分页
        handleCurrentChange(val) {
            this.tableData=this.new_tableData.slice(5*(val-1),5*val)
            this.searchBook_new=this.new_tableData.slice(5*(val-1),5*val)
        },
    }

  }
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

</style>

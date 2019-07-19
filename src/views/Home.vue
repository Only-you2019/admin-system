<template>
  <div class="home">
    <el-container class="container">
      <!-- 头部 -->
      <el-header>
        <xh-head></xh-head>
      </el-header>

      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="220px" class="aside">
          <xh-aside></xh-aside>
        </el-aside>
        <!-- 右侧主体 -->
        <el-main class="el-main">
            <xh-index></xh-index>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import XhHead from "../components/common/XhHead";
import XhAside from "../components/common/XhAside";
import XhIndex from "../components/XhIndex";
export default {
  name: "home",
  components: {
    "xh-head": XhHead,
    "xh-aside": XhAside,
    "xh-index": XhIndex
  }
};
</script>

<style scoped>
  .el-header{
    background-color: #111;
  }
  .aside{
    height: 700px;
    background-color: #222324;
    /* border-right: 1px solid #131e26; */
  }
  .el-main{
    height:700px; 
    background-color: #ecf0f5;
  }
</style>

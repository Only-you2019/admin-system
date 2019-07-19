<template>
  <div class="home">
    <el-container class="container">
      <!-- 头部 -->
      <el-header style="">
        <xh-head></xh-head>
      </el-header>

      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px" class="aside">
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
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    text-align: right; font-size: 12px
  }

</style>

<template>
  <!-- 左侧导航栏 -->
      <el-menu :default-openeds="['3']"  router :default-active=$route.path>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"></i>首页
          </template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-order"></i>图书列表
          </template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>图书分类
          </template>
          <el-menu-item index="3-1">文学艺术</el-menu-item>
          <el-menu-item index="3-2">人文社科</el-menu-item>
          <el-menu-item index="3-3">少儿童书</el-menu-item>
          <el-menu-item index="3-4">教育考试</el-menu-item>
          <el-menu-item index="3-4">经济金融</el-menu-item>
          <el-menu-item index="3-4">生活休闲</el-menu-item>
          <el-menu-item index="3-4">科学技术</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-user-solid"></i>用户管理
          </template>
          <el-menu-item index="4-1">个人信息</el-menu-item>
          <el-menu-item index="4-2">个人订单</el-menu-item>
          <el-menu-item index="4-3">个人收藏</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-custom"></i>管理员列表
          </template>
        </el-submenu>
      </el-menu>
</template>

<script>
export default {
    name:"XhAside"
};
</script>

<style>
</style>

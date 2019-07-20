<template>
  <!-- 左侧导航栏 -->
  <!-- <div class="box"> -->
    <el-row class="tac">
        <el-menu
        :default-openeds="['3','4']"
        background-color="#222324"
        text-color="#8e8e8e"
        class="el-menu-vertical-demo"
        active-text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router :default-active=$route.path
        >
          <el-menu-item index="/" >
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/BookList" >
            <i class="el-icon-s-order"></i>
            <span>图书列表</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>图书分类
            </template>
              <el-menu-item-group>
                  <el-menu-item index="/HTLiteratureandArt">
                    <i class="el-icon-arrow-right"></i>
                    <span>文学艺术</span>
                  </el-menu-item>
                  <el-menu-item index="/HTSocialScience">
                    <i class="el-icon-arrow-right"></i>
                    <span>人文社科</span>
                  </el-menu-item>
                  <el-menu-item index="/HTChildrensBooks">
                    <i class="el-icon-arrow-right"></i>
                    <span>少儿童书</span>
                  </el-menu-item>
                  <el-menu-item index="/HTEducationalExamination">
                    <i class="el-icon-arrow-right"></i>
                    <span>教育考试</span>
                  </el-menu-item>
                  <el-menu-item index="/booksEconmic">
                    <i class="el-icon-arrow-right"></i>
                    <span>经济金融</span>
                  </el-menu-item>
                  <el-menu-item index="/booksLife">
                    <i class="el-icon-arrow-right"></i>
                    <span>生活休闲</span>
                  </el-menu-item>
                  <el-menu-item index="/booksScience">
                    <i class="el-icon-arrow-right"></i>
                    <span>科学技术</span>
                  </el-menu-item>
              </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user-solid"></i>用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/personalInformation">
                <i class="el-icon-arrow-right"></i>
                <span>个人信息</span>
              </el-menu-item>
              <el-menu-item index="/IndividualOrders">
                <i class="el-icon-arrow-right"></i>
                <span>个人订单</span>
              </el-menu-item>
              <el-menu-item index="/personalCollection">
                <i class="el-icon-arrow-right"></i>
                <span>个人收藏</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/Admin" >
            <i class="el-icon-s-custom"></i>
            <span>管理员列表</span>
          </el-menu-item>
        </el-menu>
    </el-row>
  <!-- </div> -->
</template>

<script>
export default {
    name:"XhAside",
    methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
};
</script>

<style scoped>
  

</style>

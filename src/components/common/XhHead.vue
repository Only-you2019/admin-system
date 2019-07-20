<template>
    <!-- 头部 -->
      <el-row class="xhhead" :gutter="20" type="flex" align="middle"  justify="space-between">
        <el-col :span="18" height="100%">
          <div class="grid-content bg-purple xhTitle">新华书店后台管理系统</div>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-message" ></i>
            <i class="el-icon-headset"></i>
            <el-dropdown>
               <span class="el-dropdown-link">
                  换肤<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">皮肤一</el-dropdown-item>
                <el-dropdown-item command="b">皮肤二</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="head" class="manager">
            <span class="managerName">administror</span>
        </el-col>
      </el-row>
</template>

<script>

export default {
    name:"XhHead"
}
</script>

<style scoped>
  .xhhead{
    height: 100%;
    background-color: #111;
    color: #fff;
    text-align: right; font-size: 12px;
  }

  .grid-content {
    height: 100%;
    /* min-height: 36px; */
    font-size: 20px;
    font-weight: 800;
    color: #fff;
    text-align-last: left;
  }
  .xhTitle{
    font-size:20px;
  }
  .el-icon-message,.el-icon-headset{
    font-size: 20px;
    margin: 0 5px ;
  }

  /* 换肤样式 */
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-avatar {
    vertical-align: middle;
  }
  .manager{
    width:40px;
    height:40px;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 5px;
  }
  .managerName {
    font-size: 14px;
    font-weight: 400;
  }
</style>

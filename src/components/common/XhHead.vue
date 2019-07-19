<template>
    <!-- 头部 -->
      <el-row class="xhhead" :gutter="20" type="flex" align="bottom"  justify="space-between">
        <el-col :span="5">
          <div class="grid-content bg-purple xhTitle">新华书店后台管理系统</div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple headRight">
            <i class="el-icon-message"></i>
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
            <div>
              <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span class="managerName">administrator</span>
            </div>
          </div>
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
    height:60px;
    background-color: #111;
    color: #fff;
    line-height: 60px;
    text-align: right; font-size: 12px;
  }

  .grid-content {
    min-height: 36px;
    font-size: 20px;
    font-weight: 800;
    color: #fff;
    text-align-last: left;
  }
  .xhTitle{
    font-size:20px;
  }
  .headRight{
    display: flex;
    justify-content:space-between;
    align-items: center;
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
  .managerName {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 400;
  }
</style>

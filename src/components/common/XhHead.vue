<template>
    <!-- 头部 -->
      <el-row :gutter="20" type="flex" align="bottom"  justify="space-between">
        <el-col :span="5">
          <div class="grid-content bg-purple">新华书店后台管理系统</div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
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
            <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span class="managerName">administrator</span>
          </div>
        </el-col>
      </el-row>
</template>

<script>

export default {
    name:"XhHead"
}
</script>

<style>


  .el-row {
    margin-bottom: 0px;
  &:last-child {
     margin-bottom: 0;
   }
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
    font-size: 20px;
    font-weight: 800;
    color: #fff;
    text-align-last: left;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
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
    font-size: 14px;
    font-weight: 400;
  }
</style>

<template>
        <div class="cc">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
            </el-breadcrumb>
            <div class="rows">
                <div class="pic1 pic">
                    <div class="panel-heading">销售分析</div>
                    <div class="pic1-panel-body"></div>
                </div>
                <div class="pic2 pic">
                    <div class="panel-heading">趋势分析</div>
                    <div class="pic2-panel-body"></div>
                </div>
            </div>
            <div class="rows">
                <div class="pic3 pic">
                    <div class="panel">
                        <div class="panel-heading">销售分析</div>
                        <div class="pic3-panel-body"></div>
                    </div>
                </div>
                <div class="pic4 pic">
                    <div class="panel">
                        <div class="panel-heading">销售分析</div>
                        <div class="pic4-panel-body"></div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name:"XhIndex",
    
}
</script>


<style>
/* 右侧主体内容(首页)样式 */
.cc{
    height: 800px;
}
.rows{
    display: flex;
    justify-content: space-between;
    margin: 0.8% 0;
    overflow: hidden;
    height: 310px;
}
.pic1,.pic3{
    width: 69%;
    border: 1px solid #e6e6e6;
}
.pic2,.pic4{
    width: 30%;
    border: 1px solid #e6e6e6;
}
.pic{
    background-color: #fff;
}
.panel-heading{
    color: #777;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #e6e6e6;
}
</style>

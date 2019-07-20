<template>
  <div class="xhIndex">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="rows">
      <div class="pic1 pic">
        <div class="panel-heading">月度销售分析</div>
        <div id="pic1-panel-body" class="panel-body"></div>
      </div>
      <div class="pic2 pic">
        <div class="panel-heading">季度销售分析</div>
        <div id="pic2-panel-body" class="panel-body"></div>
      </div>
    </div>
    <div class="rows">
      <div class="pic3 pic">
        <div class="panel">
          <div class="panel-heading">类别销售分析</div>
          <div id="pic3-panel-body" class="panel-body"></div>
        </div>
      </div>
      <div class="pic4 pic">
        <div class="panel">
          <div class="panel-heading">渠道销售分析</div>
          <div id="pic4-panel-body" class="panel-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "XhIndex",
  mounted() {
    this.drawLine(),
    this.drawGraph(),
    this.drawBar(), 
    this.drawPie()
  },
  methods: {
    drawLine(){
        let mychart1 = this.$echarts.init(document.getElementById("pic1-panel-body"));
        mychart1.setOption({
            xAxis: {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                type: 'value'
            },
            itemStyle:{
              color:'#FF5A5E'
            },
            lineStyle:{
              color:'#F7464A'
            },
            series: [{
                data: [299, 432, 801, 934, 1290, 889,1330, 598, 865, 1253, 928, 1134],
                type: 'line'
            }]
        })
        window.onresize = mychart1.resize;
    },
    drawGraph(){
        let mychart2 = this.$echarts.init(document.getElementById("pic2-panel-body"));
        var axisData = ['周一','周二','周三','周四','周五','周六','周日'];
        var data = axisData.map(function (item, i) {
            return Math.round(Math.random() * 1000 * (i + 1));
        });
        var links = data.map(function (item, i) {
            return {
                source: i,
                target: i + 1
            };
        });
        links.pop();
        mychart2.setOption({
            title: {
                text: ''
            },
            tooltip: {},
            xAxis: {
                type : 'category',
                boundaryGap : false,
                data : axisData
            },
            yAxis: {
                type : 'value'
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 30,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle:{
                      color:'#F7464A'
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    data: data,
                    links: links,
                    lineStyle: {
                        normal: {
                            color: '#2f4554'
                        }
                    }
                }
            ]
        })
        window.onresize = mychart2.resize;
    },
    drawBar() {
      //基于准备好的dom，初始化echarts实例
      let mychart3 = this.$echarts.init(document.getElementById("pic3-panel-body"));
      mychart3.setOption({
        tooltip: {
          trigger: "item"
        },

        calculable: true,
        grid: {
          borderWidth: 0,
          y: 80,
          y2: 60
        },
        xAxis: [
          {
            type: "category",
            splitLine: { show: false },
            show: true,
            data: [
              "文学艺术",
              "人文社科",
              "少儿童书",
              "教育考试",
              "经济金融",
              "生活休闲",
              "科学技术"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            show: true,
            splitLine: { show: false }
          }
        ],
        series: [
          {
            name: "提案分类统计图",
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                    "#F3A43B",
                    "#60C0DD",
                    "#D7504B",
                    "#C6E579",
                    "#F4E001",
                    "#F0805A",
                    "#26C0C0"
                  ];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "top",
                  formatter: "{b}\n{c}"
                }
              }
            },
            data: [120, 210, 100, 40, 120, 50, 60],
            markPoint: {
              tooltip: {
                trigger: "item",
                backgroundColor: "rgba(0,0,0,0)",
                formatter: function(params) {
                  return (
                    '<img src="' +
                    params.data.symbol.replace("image://", "") +
                    '"/>'
                  );
                }
              },
              data: [
                {
                  xAxis: 0,
                  y: 350,
                  name: "Line",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/折线图.png"
                },
                {
                  xAxis: 1,
                  y: 350,
                  name: "Bar",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/柱状图.png"
                },
                {
                  xAxis: 2,
                  y: 350,
                  name: "Scatter",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/散点图.png"
                },
                {
                  xAxis: 3,
                  y: 350,
                  name: "K",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/K线图.png"
                },
                {
                  xAxis: 4,
                  y: 350,
                  name: "Pie",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/饼状图.png"
                },
                {
                  xAxis: 5,
                  y: 350,
                  name: "Radar",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/雷达图.png"
                },
                {
                  xAxis: 6,
                  y: 350,
                  name: "Chord",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/和弦图.png"
                },
                {
                  xAxis: 7,
                  y: 350,
                  name: "Force",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/力导向图.png"
                },
                {
                  xAxis: 8,
                  y: 350,
                  name: "Map",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/地图.png"
                },
                {
                  xAxis: 9,
                  y: 350,
                  name: "Gauge",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/仪表盘.png"
                },
                {
                  xAxis: 10,
                  y: 350,
                  name: "Funnel",
                  symbolSize: 20,
                  symbol: "image://../asset/ico/漏斗图.png"
                }
              ]
            }
          }
        ]
      });
      window.onresize = mychart3.resize;
    },

    drawPie() {
      let mychart4 = this.$echarts.init(document.getElementById("pic4-panel-body"));
      mychart4.setOption({
        color:['#F7464A','#46BFBD','#FDB45C','#949FB1'],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid:{
          top: 0,
          left: 100,
          right: 5,
          height: 40
        },
        legend: {
          orient: "horizontal",
          x: "center",
          bottom:"40",
          itemWidth: 18,
          itemHeight: 18,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            center:['50%','40%'],
            radius: ["30%", "60%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问",backgroundColor:"#F7464A" },
              { value: 310, name: "邮件营销" ,backgroundColor:"#F7464A"},
              { value: 234, name: "联盟广告" ,backgroundColor:"#F7464A"},
              { value: 135, name: "视频广告",backgroundColor:"#F7464A" },
            ]
          }
        ]
      });
      window.onresize = mychart4.resize;
    }
  }
};
</script>


<style>
/* 右侧主体内容(首页)样式 */
.rows {
  display: flex;
  justify-content: space-between;
  margin: 2% 0;
  overflow: hidden;
}

.pic {
  background-color: #fff;
}
.pic1,
.pic3 {
  width: 59%;
  border: 1px solid #e6e6e6;
}
.pic2,
.pic4 {
  width: 40%;
  border: 1px solid #e6e6e6;
}

.panel-heading {
  color: #777;
  padding: 10px;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
}
.panel-body {
  height: 300px;
}
</style>

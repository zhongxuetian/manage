<template>
  <div>
    <el-row :gutter='20'>
      <el-col :span='6'>
        <el-card >
          <span class="h">总用户</span>
          <el-divider></el-divider>
          <span class='v'>123</span>
        </el-card>
      </el-col>
      <el-col :span='6'>
        <el-card >
          <span class="h">总任务</span>
          <el-divider></el-divider>
          <span class='v'>123</span>
        </el-card>
      </el-col>
      <el-col :span='6'>
        <el-card >
          <span class="h">待完成</span>
          <el-divider></el-divider>
          <span class='v'>123</span>
        </el-card>
      </el-col>
      <el-col :span='6'>
        <el-card >
          <span class="h">总流量</span>
          <el-divider></el-divider>
          <span class='v'>123</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card ref="card" class="card">
          <div id="echarts1" :style="wh"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class>
          <div id="echarts2" :style="wh"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class>
          <div id="echarts3" :style="wh"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class>
          <div id="echarts4" :style="wh"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class>
          <div id="echarts5" :style="wh"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      wh: { width: '100%', height: '300px' },
      echarts1: {
        wh: { width: '100%', height: '300px' },
        d: {
          title: {
            text: '实例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
      },
      echarts2: {
        d: {
          title: {
            // text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      },
      echarts3: {
        wh: { width: '100%', height: '300px' },
        d: {
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: [
                { value: 235, name: '视频广告' },
                { value: 274, name: '联盟广告' },
                { value: 310, name: '邮件营销' },
                { value: 335, name: '直接访问' },
                { value: 400, name: '搜索引擎' }
              ]
            }
          ]
        }
      },
      echarts4: {
        wh: { width: '100%', height: '300px' },
        d: {
          title: {
            text: '漏斗图'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
          },
          // toolbox: {
          //   feature: {
          //     dataView: { readOnly: false },
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          legend: {
            data: ['展现', '点击', '访问', '咨询', '订单'],
            top: 30
          },

          series: [
            {
              name: '漏斗图',
              type: 'funnel',
              left: '10%',
              top: 80,
              // x2: 80,
              bottom: 60,
              width: '80%',
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                label: {
                  fontSize: 20
                }
              },
              data: [
                { value: 60, name: '访问' },
                { value: 40, name: '咨询' },
                { value: 20, name: '订单' },
                { value: 80, name: '点击' },
                { value: 100, name: '展现' }
              ]
            }
          ]
        }
      },
      echarts5: {
        wh: { width: '100%', height: '300px' },
        d: {

          series: [
            {
              center: ['50%', '65%'],
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 1,
              splitNumber: 8,
              axisLine: {
                lineStyle: {
                  width: 6,
                  color: [
                    [0.25, '#FF6E76'],
                    [0.5, '#FDDD60'],
                    [0.75, '#58D9F9'],
                    [1, '#7CFFB2']
                  ]
                }
              },
              pointer: {
                icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                length: '12%',
                width: 20,
                offsetCenter: [0, '-60%'],
                itemStyle: {
                  color: 'auto'
                }
              },
              axisTick: {
                length: 12,
                lineStyle: {
                  color: 'auto',
                  width: 2
                }
              },
              splitLine: {
                length: 20,
                lineStyle: {
                  color: 'auto',
                  width: 5
                }
              },
              axisLabel: {
                color: '#464646',
                fontSize: 16,
                distance: -60,
                formatter: function (value) {
                  if (value === 0.875) {
                    return '优'
                  } else if (value === 0.625) {
                    return '中'
                  } else if (value === 0.375) {
                    return '良'
                  } else if (value === 0.125) {
                    return '差'
                  }
                }
              },
              title: {
                offsetCenter: [0, '-20%'],
                fontSize: 18
              },
              detail: {
                fontSize: 30,
                offsetCenter: [0, '20%'],
                valueAnimation: true,
                formatter: function (value) {
                  return Math.round(value * 100) + '分'
                },
                color: 'auto'
              },
              data: [
                {
                  value: 0.7,
                  name: '成绩评定'
                }
              ]
            }
          ]
        }
      }
    }
  },
  mounted () {
    const myChart1 = this.$echarts.init(document.getElementById('echarts1'))
    const myChart2 = this.$echarts.init(document.getElementById('echarts2'))
    const myChart3 = this.$echarts.init(document.getElementById('echarts3'))
    const myChart4 = this.$echarts.init(document.getElementById('echarts4'))
    const myChart5 = this.$echarts.init(document.getElementById('echarts5'))
    myChart1.setOption(this.echarts1.d)
    myChart2.setOption(this.echarts2.d)
    myChart3.setOption(this.echarts3.d)
    myChart4.setOption(this.echarts4.d)
    myChart5.setOption(this.echarts5.d)
  }
}
</script>
<style lang="less" scoped>
.el-col {
  margin-bottom: 20px;
}
.h{
  font-size: 18px;
  font-weight: 600;
}
.v{
  font-size: 16px;
}
// .user {
//   display: flex;
//   box-sizing: border-box;
//   padding: 20px;
//   height: 150px;
//   .user-avator {
//     width: 110px;
//     height: 110px;
//     border-radius: 10px;
//   }
//   .user-info {
//     margin-left: 30px;
//     flex-grow: 1;
//     .username{
//       font-size: 20px;
//     }
//     .exit {
//       font-size: 13px;
//     }
//   }
// }
// .login-time {
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
//   color: #666;
// }

// .br2 {
//   border: 1px solid #f1f1f1;
//   border-radius: 2px;
// }

// .hg100 {
//   height: 100px;
// }

// .hg200 {
//   height: 200px;
// }

// .hr {
//   height: 2px;
//   width: 100%;
//   background: #f5f5f5;
// }
</style>

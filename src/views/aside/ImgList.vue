<template>
  <div class="main-container">
    <el-row>
      <el-col :span="18">
        <el-row type='flex' class="wrap" :gutter='20'>
          <el-col
            :span="11"
            :lg='7'
            class="card"
            v-for="(item,index) in imgList"
            :key="index"
          >
            <el-card
              :body-style="{ padding: '0px'}"
              :shadow="detail_index == index?'always':'hover'"
            >
              <div>
                <el-image  :preview-src-list="bigImgs"  :src="item.url" class="image" ></el-image>
              </div>
              <div style="padding: 14px;">
                <span>{{ item.name }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.time }}</time>
                  <el-button type="text" class="button" @click="showDetail(item,index)">详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5"  :offset="1">
        <div class="t">详情</div>
        <div v-if="detail">
          <div class="box">
            <p class="k">上传时间</p>
            <p class="v">{{ detail.time }}</p>
          </div>
          <div class="box">
            <p class="k">标题</p>
            <p class="v">{{ detail.name }}</p>
          </div>
          <div class="box">
            <p class="k">备注</p>
            <p class="v">{{ detail.remarks }}</p>
          </div>
          <div class="box">
            <p class="k">图片地址</p>
            <p class="v">
              <input :value="detail.url" class="copy-value" disabled />
              <el-link type="primary" @click="copy(detail.url)">复制</el-link>
            </p>
          </div>
        </div>
        <div v-else>暂无数据</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detail: null,
      detail_index: null
    }
  },
  computed: {
    imgList () {
      return this.$store.state.imgsModule.imgs
    },
    bigImgs () {
      const bigImgs = []
      this.$store.state.imgsModule.imgs.forEach((item) => {
        bigImgs.push(item.url)
      })
      return bigImgs
    }
  },
  methods: {
    copy (url) {
      const obj = document.getElementsByClassName('copy-value')[0]
      obj.select()
      document.execCommand('Copy')
      this.$notify({
        message: '复制成功',
        position: 'top-right',
        type: 'success',
        duration: 1500
      })
    },
    showDetail (o, i) {
      this.detail = o
      this.detail_index = i
    }
  }
}
</script>
<style  >
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.t {
  font-weight: 600;
  font-size: 15px;
  border-bottom: 2px solid #555;
  padding-bottom: 10px;
  color: #555;
}
.box {
  margin-top: 10px;
}
.box .k {
  font-size: 14px;
  color: #767676;
}
.box .v {
  font-size: 13px;
  color: #222;
  margin-top: 2px;
}
.card {
  margin-bottom: 15px;
}
.copy-value {
  /* width: 0px;
  height: 0px; */
}
.wrap{
  flex-wrap: wrap;
}
</style>

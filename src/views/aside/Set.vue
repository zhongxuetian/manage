<template>
  <div class="main-container">
    <div class="block">
      <span class="demonstration" :style="'color:'+color+';'">修改header的颜色</span>
      <el-color-picker v-model="color" change="updateColor"></el-color-picker>
    </div>

    <!-- <el-switch v-model="value1" active-text="切换英文"></el-switch> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: false
    }
  },
  computed: {
    color: {
      get () {
        return this.$store.state.headerColor
      },
      set (v) {
        this.$store.commit('updateHeaderColor', { color: v })
      }
    }
  },
  methods: {
    updateColor (v) {
      console.log(v)
    }
  }
}
</script>
<style lang="less">
.block {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  .demonstration {
    margin-right: 10px;
  }
}
</style>

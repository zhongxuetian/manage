<template>
  <div class="home">
    <el-container>
      <el-aside width='200px'>
        <aside-component></aside-component>
      </el-aside>
      <el-container>
        <el-header>
          <header-component></header-component>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideComponent from '@/components/aside.vue'
import headerComponent from '@/components/header.vue'
export default {
  name: 'Home',
  data () {
    return {
      // aside
    }
  },
  components: {
    asideComponent,
    headerComponent
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less">
html,
body,
#app,
.home,
.el-container,
.el-aside{
  height: 100%;
}
</style>
<style lang="less" scoped>
</style>

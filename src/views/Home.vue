<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <aside-component></aside-component>
      </el-aside>
      <el-container>
        <el-header :style="'background:'+headerColor+';'">
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
  },
  beforeCreate () {
    console.log('beforeCreated')
  },
  created () {
    // this.$store.dispatch('a')
    console.log('create')
    // console.log(this.$route.params)
    // if (this.$route.params.id !== 'ass') this.$router.push('/home_page/ass')
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  computed: {
    headerColor () {
      return this.$store.state.headerColor
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
.el-aside {
  height: 100%;
}
.el-header {
  // padding: 0;
  background: #409eff;
  height: 35px !important;
}
.el-aside {
  // background: #409EFF;
}
</style>
<style lang="less" scoped>
</style>

<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
        >
          <template v-for="(item, index) in aside">
            <template v-if="item.children&&item.children.length>0">
              <el-submenu :index="index" :key="index">
                <template slot="title">
                  <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                  <i v-else class="el-icon-s-flag"></i>
                  <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item v-for="(cItem,cIndex) in item.children" :key="cIndex" :index="cItem.path">{{cItem.meta.title}}</el-menu-item>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :key="index" :index="item.path">
                <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                <i v-else class="el-icon-s-flag"></i>
                <span slot="title">{{item.meta.title}} </span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { aside } from '../store/aside'
export default {
  name: 'Home',
  data () {
    return {
      aside
    }
  },
  components: {},
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
.el-aside,
.el-menu {
  height: 100%;
}
</style>
<style lang="less" scope>
.el-menu{
  overflow-y: scroll;
}
.el-menu::-webkit-scrollbar {
    width: 0;
}
</style>

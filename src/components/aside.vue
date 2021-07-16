<template>
  <el-scrollbar class="aside-container">
    <el-menu  :default-active="defaultActive" class="el-menu-vertical-demo" router>
      <template v-for="(item, index) in aside">
        <template v-if="item.children&&item.children.length>0">
          <el-submenu :index="index.toString()" :key="index">
            <template slot="title">
              <i  v-if="item.meta.icon" :class="item.meta.icon"></i>
              <i v-else class="  el-icon-s-flag"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item
              v-for="(cItem,cIndex) in item.children"
              :key="cIndex"
              :index="cItem.path"
            >{{cItem.meta.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="index" :index="item.path">
            <i class="" v-if="item.meta.icon" :class="item.meta.icon"></i>
            <i v-else class="  el-icon-s-flag"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  computed: {
    aside () {
      return this.$store.state.asideModule.aside
    },
    defaultActive () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang='less' scoped>
.white{
  color: #fff;
}
.el-menu {
  border: 0px;
}

.aside-container {
  height: 100%;
  border-right: solid 1px #e6e6e6;
}

</style>
<style lang='less'>
  .el-scrollbar__wrap{
    overflow-x:hidden !important;;
  }
  .is-horizontal{
    display: none;
  }
</style>

<template>
  <div class="header-container" :style="'background:'+headerColor+';'">
    <!-- <div class="search">
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
        <el-button @click="onSearch" slot="append" icon="el-icon-search" type="primary"></el-button>
      </el-input>
    </div> -->
    <div class="actions">
      <!-- <div class="log">
        <i class="el-icon-bell" style="font-size:20px; color:#fff;"></i>
      </div> -->
      <div class="user-avatar">
        <el-dropdown @command="handleCommand">
          <el-avatar :size='22' src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{ username }}</el-dropdown-item>
            <el-dropdown-item  command='exit'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  computed: {
    headerColor () {
      return this.$store.state.headerColor
    },
    username () {
      return this.$funs.getCookie('username')
    }
  },
  methods: {
    // onSearch () {
    //   this.$alert('这只是个装饰品', '', {
    //     confirmButtonText: '确定'
    //   })
    // }
    handleCommand (command) {
      if (command === 'exit') {
        this.exitLogin()
      }
    },
    exitLogin () {
      this.$funs.removeCookie('username')
      this.$notify({
        title: '退出成功',
        type: 'success',
        position: 'top-left'
      })
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped lang='less'>
.header-container {
  // padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // background:#409EFF;
  height:35px;
  // .search {
  //   .el-input {
  //     width: 400px;
  //     height: 30px;
  //   }
  // }
  .actions {
    display: flex;
    align-items: center;
    .user-avatar {
      // width: 30px;
      height: 22px;
      margin-left: 20px;
    }
  }
}
</style>

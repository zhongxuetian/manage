<template>
  <header class="header-container">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
        <el-button @click="onSearch" slot="append" icon="el-icon-search" type="primary"></el-button>
      </el-input>
    </div>
    <div class="actions">
      <div class="log">
        <i class="el-icon-bell" style="font-size:30px; color:#C0C4CC;"></i>
      </div>
      <div class="user-avatar">
        <el-dropdown>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>杨过</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    onSearch () {
      this.$alert('这只是个装饰品', '', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>
<style scoped lang='less'>
.header-container {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  .search {
    .el-input {
      width: 400px;
      height: 40px;
    }
  }
  .actions {
    display: flex;
    align-items: center;
    .user-avatar {
      margin-left: 30px;
    }
  }
}
</style>

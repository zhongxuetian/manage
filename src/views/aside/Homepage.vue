<template>
  <div>123
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.user {
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  height: 150px;
  .user-avator {
    width: 110px;
    height: 110px;
    border-radius: 10px;
  }
  .user-info {
    margin-left: 30px;
    flex-grow: 1;
    .username{
      font-size: 20px;
    }
    .exit {
      font-size: 13px;
    }
  }
}
.login-time {
  text-align: center;
  padding: 10px;
  font-size: 14px;
  color: #666;
}

.br2 {
  border: 1px solid #f1f1f1;
  border-radius: 2px;
}

.hg100 {
  height: 100px;
}

.hg200 {
  height: 200px;
}

.hr {
  height: 2px;
  width: 100%;
  background: #f5f5f5;
}
</style>
